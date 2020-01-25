import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Dashboard from '../components/private/dash_board';
import Home from '../components/shared/home';
import About from '../components/shared/about';
import Contact from '../components/shared/contact';
import Nav from '../components/shared/nav';
import DashNav from '../components/private/dash_nav';
require('../style/App.scss');

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
    ["assets","commitments","networth"].forEach(
      (item) => { this.fetchUserData(item, "GET")})
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
    const net = { assetTotal: [], commitTotal: []};
    const collectAmounts = (data, netItem) => {
      data.map((item) =>{ net[netItem].push(item.amount);})
    }
    if (this.state.asset && this.state.commits){
      collectAmounts(this.state.asset, "assetTotal")
      collectAmounts(this.state.commits, "commitTotal")
      return(
        this.sumData(net.assetTotal) - this.sumData(net.commitTotal)
      )
    }
    return false
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
      net:  this.state.net,
      subtotal: this.state.total
    };
    return (      
      <BrowserRouter>
        <div className="content" > 
          {currentUser ? <DashNav/> : <Nav />}                           
            <div className="route">
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
          <div id="footer"></div>
        </div>        
      </BrowserRouter>        
    )
  }
}

export default App; 