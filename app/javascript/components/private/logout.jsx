import React from 'react';
import {BrowserRouter as Redirect} from "react-router-dom";

class Logout extends React.Component {  
  constructor(props){
    super(props);
  }
  
  handleLogout = (e) => {
    const data= { email: `${this.props.user}`}  
    console.log('check data in logout ',data.email);
    this.props.updateCurrentUser();      
    this.props.toggleLogin();
    //sessionStorage.clear();
  }

  render() {
    const curentUser = this.props.user;
    const signedIn = this.props.signedIn
    console.warn('now user is ', curentUser);
    return (
      <div className="exit form">
        <button className="btn-out" onClick={this.handleLogout}>Sign Out</button>
      </div>
    );
  };
}

export default Logout;