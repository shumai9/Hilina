import React from 'react';
import { 
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Dashboard from '../components/private/dash_board';
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
  }

  updateCurrentUser = (email, token) => {
    this.setState({ current_user: email });
    if (token){
      sessionStorage.setItem('email',email);
      sessionStorage.setItem('token',token); 
    }
  }
  toggleLogin = () => {
    this.setState({ logedIn: !this.state.logedIn })
  }
  componentDidMount(){
    const email = sessionStorage.getItem('email');         
    if(email){
       this.updateCurrentUser(email)
    } else {
      this.setState({ current_user: null })
    }
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
              <Route exact to="/user/dash_board" render={
                (props)=> <Dashboard { ...props} 
                  updateCurrentUser = { updateCurrentUser } 
                  toggleLogin={toggleLogin}
                  currentUser={currentUser}
                  signedIn = {signedIn} />
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