import React from 'react'
import Assets from './assets'
import Commitments from './commitments'
import Networth from './networth'
import Logout from './logout'
import Login from '../login';
import Signup from '../signup';
import {  BrowserRouter as Router,  Route,  Link,  Redirect,  withRouter} from "react-router-dom";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logedin: false
    }    
  }
  getUserToken =() =>{
    return sessionStorage.getItem('token');
  }
  /*fetchUserData = (endPoint, method) => {
    const baseUrl = 'http://localhost:3000/api/v1';
    const token = this.props.userToken();
    const param = { 
      method: method,
      headers: {
        "Content-Type": "application/json",
        "charset": "UTF-8",
        "Authorization": this.props.token(), 
        "mode": "cors"
      }
    }
    
    fetch( baseUrl + endPoint, param)
    .then(res => res.json())
    .then ((result) => {
      this.listAssets(result);
    }).catch(
      e =>{ console.log('Asset errors',e);}
    );
  }*/
  render() {
    const token = this.getUserToken;
    const currentUser= this.props.currentUser;
    const toggleLogin = this.props.toggleLogin;
    const updateCurrentUser = this.props.updateCurrentUser;
    const signedIn = this.props.signedIn
    console.warn(currentUser, token());

    return (
      <div className='dashboard'>
        {
          !currentUser ? (
          <ul>
            <li><Link to={"/signup"}>Sign up</Link></li>
            <li><Link to={"/auth/login"}>Login</Link></li>
          </ul>
          ):(
            null
          )
        }
        {
          currentUser ? (
          <div>
            <Logout
              signedIn = {signedIn}
              toggleLogin={toggleLogin}
              updateCurrentUser = { updateCurrentUser }
              user={currentUser}
            />
            <Networth 
              token = {this.getUserToken} 
              currentUser={currentUser} />
            <Assets 
              token = {this.getUserToken}
              currentUser={currentUser} />
            <Commitments 
              token = {this.getUserToken}
              currentUser={currentUser} />        
          </div>           
          ) : (
          <div>
            <Route exact path="/signup" 
              render={
                (props)=> <Signup 
                  { ...props} 
                  toggleLogin={toggleLogin}
                  updateCurrentUser={updateCurrentUser}
                />
              }
            />
            <Route  path="/auth/login" 
              render={
                (props)=> <Login { ...props} 
                  updateCurrentUser = { updateCurrentUser } 
                  toggleLogin={toggleLogin}
                  currentUser={currentUser} 
                />
              } 
            /> 
          </div> 
          )
        }
      </div>
    );    
  } 
}


export default DashBoard;  
