import React from 'react'
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Nav from '../components/nav'
import Signup from '../components/signup'
import Login from '../components/login'
import Main from '../components/main'
import About from '../components/about'
import Home from '../components/home'
import Contact from '../components/contact'
import Address from '../components/address'

require('../style/App.scss');


class App extends React.Component {
  constructor(){
    super();
    this.state = { current_user: null }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount(){
    fetch('/any_user', {
      method: "GET",
      headers: {'Content-Type': 'application/json',mode: 'cors'}
      }
    ).then((res) => res.json()).then((response) => {        
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

  changePage(newPage) {
    this.setState({ page: newPage })
  }
  
  render(){
    return (
      <Router>
        <div className="content" >
          <Nav/>            
          <Main updateCurrentUser = { this.updateCurrentUser } />
            <div className="route">
              <Route exact path="/home" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/address" component={Address}/>
              <Route path="/users/sign_up" component={Signup}/>
            </div>              
          <div id="footer"></div>
        </div>
      </Router>        
    )
  }
}


export default App;


