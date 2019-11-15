import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Dashboard from '../components/private/dash_board';
import Home from '../components/shared/home';
import About from '../components/shared/about';
import Contact from '../components/shared/contact';
import Nav from '../components/shared/nav';
import DashNav from '../components/private/dash_nav';
import Login from './login';
import Signup from './signup';

require('../style/App.scss');

class App extends React.Component {
  constructor(){
    super();
    this.state = { 
      current_user: null,
      logedIn: false
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
    this.setState({ logedIn: !this.state.logedIn })
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
  tokenHandler=()=>{
    return this.state.token
  }
  dataParser =(data)=>{
    const subj = Object.keys(data)[0];
    const detail = data[subj];
    if(Array.isArray(detail)){
      Object.values(data)[0].map((k, v) =>{
        k.amount = parseInt(k.amount)
      });
      this.setState(data)
    } else {
      data[subj].amount = parseInt(data[subj].amount)
      this.setState(data)
    }
  }
  fetchUserData = (endPoint, method, data) => {
    const baseUrl = 'http://localhost:3000/api/v1';
    const param = { 
      method: method,
      headers: {
        "Content-Type": "application/json",
        "charset": "UTF-8",
        "Authorization": "",
        "mode": "cors"
      }
    }
    method == "POST"|"EDIT"|"DELETE" ? param["body"] = JSON.stringify(data) : ""
    const token = sessionStorage.getItem("token");
    if (this.state.current_user) {
      param.headers["Authorization"] = token;
      fetch( baseUrl +"/"+ endPoint, param)
      .then(res => res.json())
      .then ((result) => {
        param.body ? this.showMessage(result) : this.dataParser(result)
      }).catch(
        e =>{ console.log('Asset errors',e);}
      );
    } else {
      console.log("No Token so far")
    }     
  }
  getUserData() {
    ["assets","commitments","networth"].forEach(
      (item) => { this.fetchUserData(item, "GET")})
  }
  componentDidUpdate(prevState, prevProps) {
    if (this.state.current_user !== prevProps.current_user) {
      this.getUserData();
    }
    console.log(this.state.current_user,prevProps.current_user)
  } 
  render(){
    const currentUser       = this.state.current_user;
    const signedIn          = this.state.logedIn;
    const updateCurrentUser = this.updateCurrentUser;
    const toggleLogin       = this.toggleLogin;
    const fetchUserData     = this.fetchUserData;
    const getUserData       = this.getUserData;
    const data = {
      asset: this.state.asset,
      commit: this.state.commits,
      net:  this.state.net
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
                <Route exact to="/user/dash_board" render={
                  (props)=> <Dashboard {...props} 
                    updateCurrentUser = { updateCurrentUser } 
                    toggleLogin = { toggleLogin }
                    currentUser = { currentUser }
                    signedIn = { signedIn }
                    tokenHandler = { this.tokenHandler }
                    fetchUserData = { fetchUserData }
                    getUserData = { getUserData }
                    data = { data }
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