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
    this.state = {}    
  }

  getUserToken =() =>{
    return sessionStorage.getItem('token');
  }

  fetchUserData = (endPoint, method) => {
    const baseUrl = 'http://localhost:3000/api/v1';
    var param = { method: method,
      headers: {
        "Content-Type": "application/json",
        "charset": "UTF-8",
        "Authorization": "", 
        "mode": "cors"
      }
    }
    if (this.props.currentUser) {
      param.headers["Authorization"] = this.props.tokenHandler()
      fetch( baseUrl +"/"+ endPoint, param)
      .then(res => res.json())
      .then ((result) => {
        this.setState(result);
      }).catch(
        e =>{ console.log('Asset errors',e);}
      );
    } else {
      console.log("No Token so far", this.props.tokenHandler())
    }     
  }
  dashBoardCleaner=()=>{
    this.setState({});
    console.log("CLEANER", this.state)
  }
  handleBtnStyle =(e)=>{
    e.preventDefault();
    console.log("btn clicked", e.target)
    e.currentTarget.style["background"] = "orange"
  }
  handleChange = (e)=>{
    e.preventDefault();
    e.currentTarget.style["background"] = "transparent"
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentUser !== prevProps.currentUser) {
      ["assets","commitments","networth"].forEach(
        item => this.fetchUserData(item, "GET")
      )
    }
    console.log(this.props.currentUser)    
  }
  componentWillUnmount() {
    this.dashBoardCleaner();
    console.log("Dash umounted", this.state)
  }
  render() {
    const token = this.getUserToken;
    const currentUser= this.props.currentUser;
    const toggleLogin = this.props.toggleLogin;
    const updateCurrentUser = this.props.updateCurrentUser;
    const signedIn = this.props.signedIn
    console.warn(this.props.currentUser, this.getUserToken());
    return (
      <div className='dashboard'>
        {
          !currentUser ? (
          <ul>
            <li>
              <button id="signup"
                onClick={e => this.handleBtnStyle(e)}
                onMouseOut={e => this.handleChange(e)}
              >
                <Link to={"/signup"}>Sign up</Link>
              </button>
            </li>
            <li>
              <button id="login"
                onClick={e => this.handleBtnStyle(e)}
                onMouseOut={e => this.handleChange(e)}
                >
                <Link to={"/auth/login"}>Login</Link>
              </button>
            </li>
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
