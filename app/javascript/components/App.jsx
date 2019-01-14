import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import DashBoard from '../components/private/dash_board';
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

  updateCurrentUser(email) {
    this.setState({
      current_user: email
    })
  }

  toggleLogin() {
    this.setState({ logedIn: !this.state.logedIn })
  }
  
  render(){
    if (this.state.logedIn){
      return(
        <Router>
          <Switch>
            <Route exact to="/user/dash_board" component={DashBoard} />
          </Switch>
        </Router>     
      )
    }   
    return (      
      <Router>
        <div className="content" >
          <Nav />                           
            <div className="route">
              <Route exact path="/" render= { (props)=> <Home { ...props}/>}/>
              <Route exact path="/home" render={ (props)=> <Home { ...props}/>}/>
              <Route path="/about" render={ (props)=><About { ...props}/>}/>
              <Route path="/contact" render={ (props)=><Contact { ...props}/>}/>
              <Route path="/users/sign_up" render={ (props)=> <Signup { ...props} toggleLogin={this.toggleLogin}  />}/>
              <Route 
                path="/users/login" 
                  render={
                    (props)=> <Login 
                      { ...props} 
                      updateCurrentUser = { this.updateCurrentUser } 
                      toggleLogin={this.toggleLogin} 
                      />
                } 
              />
            </div>    
          <div id="footer"></div>
        </div>
      </Router>        
    )
  }
}


export default App;


