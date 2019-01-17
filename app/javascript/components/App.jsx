import React from 'react';
import Loadable from 'react-loadable';
import { 
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Dashboard from '../components/private/dash_board';
import Login from '../components/login';
import Signup from '../components/signup';
import Home from '../components/shared/home';
import About from '../components/shared/about';
import Contact from '../components/shared/contact';
import Nav from '../components/shared/nav';

require('../style/App.scss');


class App extends React.Component {
  constructor(){
    super();
    this.state = { 
      current_user: null,
      logedIn: false
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  componentDidMount(){
    fetch('/any_user', {
      method: "GET",
      headers: {'Content-Type': 'application/json',mode: 'cors'}
      }
    )
    .then((res) => res.json())
    .then((response) => {        
      if(response.email){
        this.setState({ current_user: response.email })
      } else {
        this.setState({ current_user: null })
      }
    }).catch((error) =>{
      console.log(error);
    })
  }  

  updateCurrentUser (email) {
    this.setState({
      current_user: email
    })
  }

  toggleLogin() {
    this.setState({ logedIn: !this.state.logedIn })
  }
  
  render(){
    const currentUser = this.state.current_user
    const signedIn = this.state.logedIn
    const updateCurrentUser= this.updateCurrentUser
    const toggleLogin= this.toggleLogin
    
    return (      
      <BrowserRouter>
        <div className="content" > 
          <Nav />                           
            <div className="route">
            <Switch>
              <Route exact path="/" render= { (props)=> <Home { ...props}/>}/>
              <Route exact path="/about_us" render={ (props)=><About { ...props}/>}/>
              <Route exact path="/contact_us" render={ (props)=><Contact { ...props}/>}/>
              <Route exact path="/users/registration" 
                render={
                  (props)=> <Signup 
                    { ...props} 
                    toggleLogin={toggleLogin}
                    updateCurrentUser={updateCurrentUser}
                  />
                }
              />
              <Route exact path="/users/login" 
                render={
                  (props)=> <Login { ...props} 
                    updateCurrentUser = { updateCurrentUser } 
                    toggleLogin={toggleLogin}
                    currentUser={currentUser} 
                  />
                } 
              />
              {
              currentUser ? (
                <Route exact to="/user/dash_board" render={
                  (props)=> <Dashboard { ...props} 
                    updateCurrentUser = { updateCurrentUser } 
                    toggleLogin={toggleLogin}
                    currentUser={currentUser}
                    signedIn = {signedIn}
                  />
                } 
              />
              ) : (
                <Redirect exact  to="/users/login"/>  
              )
             }
            </Switch>
            </div>    
          <div id="footer"></div>
        </div>        
      </BrowserRouter>        
    )
  }
}


export default App;


