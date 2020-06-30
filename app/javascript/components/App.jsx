import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Dashboard from '../components/private/dash_board';
import Home from '../components/shared/home';
import About from '../components/shared/about';
import Contact from '../components/shared/contact';
import Nav from '../components/shared/nav';
import DashNav from '../components/private/dash_nav';
import styles from '../style/style.module.css'
import '../style/main.scss'

class App extends React.Component {
  constructor(){
    super();
    this.state = { 
      current_user: null,
      logedIn: false
    }
    this.baseUrl = 'http://localhost:3000/api/v1';
    this.param = { method: "", headers: {
        "Content-Type": "application/json",
        "charset": "UTF-8",
        "Authorization": "",
        "mode": "cors"
      }
    }
  }
  updateCurrentUser = (email, token) => {
    if (token){
      sessionStorage.setItem('token',token); 
      sessionStorage.setItem('email',email);
    }
    this.setState({ current_user: email, token: token });
  }
  toggleLogin = () => {
    this.setState({ logedIn: !this.state.logedIn });
  }
  componentDidMount(){
    const email = sessionStorage.getItem('email');
    if(email){
      this.updateCurrentUser(email);
    } else {
      this.setState({ current_user: null })
    }
    this.state.current_user ? this.getUserData() : console.log("skiped")
  }
  showMessage =(result)=>{
    console.log(result.message)
    this.setState({message: result.message})
  }
  dataParser =(data)=>{
    const subj = Object.keys(data)[0];
    const detail = data[subj];
    if(Array.isArray(detail)){
      Object.values(data)[0].map((item) =>{
        item.amount = parseInt(item.amount)
        item.acquired = new Date(item.acquired)
        item.ceased = new Date(item.ceased)
      });
      this.setState(data)
    } else {
      data[subj].amount = parseInt(data[subj].amount)
      this.setState(data)
    }
  }
  removeUserData=(endPoint, id)=>{
    const token = sessionStorage.getItem("token")
    if (this.state.current_user) {
      this.param.headers["Authorization"] = token;
      this.param.method = "DELETE"
      fetch( this.baseUrl +"/" + `${endPoint}/${id}`, this.param)
      .then(res => res.json())
      .then((result) => {
        this.showMessage(result)
        //this.setState( prevState => ({ asset: [...prevState.asset, data]}))
      }).catch(
        e =>{ console.log('Asset errors',e)}
      );
      } else {
      console.log("No Token or User so far")
    }
  }
  updateUserData=(endPoint,id, data)=>{
    this.param["body"] = JSON.stringify(data)
    const token = sessionStorage.getItem("token")
    if (this.state.current_user) {
      this.param.headers["Authorization"] = token;
      this.param.method = "PUT"
      fetch( this.baseUrl +"/"+ `${endPoint}/${id}`, this.param)
      .then(res => res.json())
      .then((result) => {
        this.showMessage(result)
        //this.setState( prevState => ({ asset: [...prevState.asset, data]}))
      }).catch(
        e =>{ console.log('Asset errors',e)}
      );
      } else {
      console.log("No Token or User so far")
    }
  }
  createUserData=(endPoint, data)=>{
    this.param["body"] = JSON.stringify(data)
    const token = sessionStorage.getItem("token")
    if (this.state.current_user) {
      this.param.headers["Authorization"] = token;
      this.param.method = "POST"
      fetch( this.baseUrl +"/"+ endPoint, this.param)
      .then(res => res.json())
      .then((result) => {
        this.showMessage(result)
      }).catch(
        e =>{ console.log('Asset errors',e)}
      );
      } else {
      console.log("No Token or User so far")
    }
  }
  fetchUserData = (endPoint) => {    
    const token = sessionStorage.getItem("token")
    if (this.state.current_user) {
      this.param.headers["Authorization"] = token;
      this.param.method = "GET"
      fetch( this.baseUrl +"/"+ endPoint, this.param)
      .then(res => res.json())
      .then((result) => { this.dataParser(result) })
      .catch( e =>{ console.log('Asset errors',e) });
    } else {
      console.log("No Token so far")
    }    
  }
  getUserData() {
    Promise.all([
      this.fetchUserData("assets"),
      this.fetchUserData("commitments"),
      this.fetchUserData("networth"),
    ])
  }
  componentDidUpdate(prevState, prevProps){
    if (this.state.current_user !== prevProps.current_user) {
      this.getUserData();
    }
    console.log(this.state.current_user,prevProps.current_user)
  }
  sumData = (value) =>{
    const reducer = (sum, num) => sum + num;
    const total  = value.reduce(reducer);
    return total 
  }
  networthCalc = () =>{
    if(this.state.net) {
      const net = { assetTotal: [], commitTotal: []};
      const collectAmounts = (data, netItem) => {
      data.map((item) =>{ net[netItem].push(item.amount);})
      }
      if (this.state.asset.length && this.state.commits.length){
        collectAmounts(this.state.asset, "assetTotal")
        collectAmounts(this.state.commits, "commitTotal")
        return(
          this.sumData(net.assetTotal) - this.sumData(net.commitTotal)
        )
      }
    }    
    return 0
  }
  render(){
    const currentUser       = this.state.current_user;
    const signedIn          = this.state.logedIn;
    const updateCurrentUser = this.updateCurrentUser;
    const toggleLogin       = this.toggleLogin;
    const fetchUserData     = this.fetchUserData;
    const createUserData    = this.createUserData;
    const updateUserData    = this.updateUserData;
    const removeUserData    = this.removeUserData;
    const getUserData       = this.getUserData;
    const networthCalc      = this.networthCalc;
    const data = {
      asset: this.state.asset,
      commit: this.state.commits,
      net:  this.state.main,
      subtotal: this.state.subtotal
    };
    return (      
      <BrowserRouter>
        <div className={styles.app} >
          <Link title="Hilina Logo" className={styles.logoIcon} to={"/"}/>
          { 
            currentUser ? 
              <DashNav 
                updateCurrentUser = { updateCurrentUser }
                toggleLogin       = { toggleLogin }
                currentUser       = { currentUser }
                signedIn          = { signedIn }
              />
            : <Nav/>
          }
          <div className={styles.appSection}>
            <Switch>
              <Route exact path="/" render= { (props)=> <Home { ...props}/>}/>
              <Route exact path="/about_us" render={ (props)=><About { ...props}/>}/>
              <Route exact path="/contact_us" render={ (props)=><Contact { ...props}/>}/>
              <Route exact to="/dash_board" render={
                (props)=> <Dashboard {...props} 
                  updateCurrentUser = { updateCurrentUser } 
                  toggleLogin       = { toggleLogin }
                  currentUser       = { currentUser }
                  signedIn          = { signedIn }
                  fetchUserData     = { fetchUserData }
                  getUserData       = { getUserData }
                  data              = { data }
                  createUserData    = { createUserData }
                  updateUserData    = { updateUserData }
                  removeUserData    = { removeUserData }
                  networthCalc      = { networthCalc }
                  />
                }
              />
            </Switch>
          </div>
          < div className={styles.footer} id="footer">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Nemo libero ab doloremque consectetur quis voluptates neque similique 
            quidem quisquam quod ipsam reiciendis tenetur incidunt nulla, temporibus,
            qui, illo nobis? Quos!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quos voluptas molestias veniam, accusamus et quisquam, corporis soluta laudantium 
            voluptatum possimus quas iusto porro odio blanditiis ipsa,
            perferendis qui? Consequuntur, sed! </p>
            <section >
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est, 
              itaque cumque nulla distinctio eveniet voluptatem tempore alias magni
              natus. Quibusdam, vero! Ducimus a laborum sint, nobis soluta illum nostrum?</p>
            </section>
          </div>    
        </div>        
      </BrowserRouter>        
    )
  }
}

export default App; 