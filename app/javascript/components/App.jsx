import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Dashboard from '../components/private/dash_board';
import Home from '../components/shared/home';
import About from '../components/shared/about';
import Contact from '../components/shared/contact';
import Nav from '../components/shared/nav';
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
  }
  tokenHandler=()=>{
    return this.state.token
  } 
  render(){
    const currentUser       = this.state.current_user;
    const signedIn          = this.state.logedIn;
    const updateCurrentUser = this.updateCurrentUser;
    const toggleLogin       = this.toggleLogin;
    const fetchUserData     = this.fetchUserData;
    const data              = this.state;
    const getUserData       = this.getUserData;
    return (      
      <BrowserRouter>
        <div className="content" > 
          <Nav />                           
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