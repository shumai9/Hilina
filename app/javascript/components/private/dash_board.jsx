import React from 'react'
import Assets from './assets'
import Commitments from './commitments'
import Networth from './networth'
import Logout from './logout'
import {  BrowserRouter as Router,  Route,  Link,  Redirect,  withRouter} from "react-router-dom";



class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      isLoaded: false,
      display: null,
    })
    
  }
  render() {
    const curentUser= this.props.currentUser;
    const toggleLogin = this.props.toggleLogin;
    const updateCurrentUser = this.props.updateCurrentUser;
    const signedIn = this.props.signedIn
    console.warn(curentUser); 
    return (
      <div className='dashboard'>
        <Logout
          signedIn = {signedIn}
          toggleLogin={toggleLogin}
          updateCurrentUser = { updateCurrentUser }
          curentUser={curentUser}
        />
        <Networth curentUser={curentUser} />
        <Assets curentUser={curentUser} />
        <Commitments curentUser={curentUser} />         
      </div>
    ); 
  }
  
}


export default DashBoard;  
