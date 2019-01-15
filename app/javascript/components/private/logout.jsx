import React from 'react';
import {BrowserRouter as Redirect} from "react-router-dom";

class Logout extends React.Component {  
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  handleLogout(e) {
    e.preventDefault();
    let email = this.props.current_user
    console.log('from log out', email);

    fetch('/users/sign_out', {
      method: 'delete',
      header: 'Content-Type: application/json',
      body: JSON.stringify(email)
    })
    .then(res => res.json())
    .then((result) => {
      this.props.toggleLogin();
      this.updateCurrentUser(result);
    })
    .catch( e =>{
      console.log('logout error',e);
    })
  }

  render() {
    return (
      <div id="exit">
      <button className="btn-out" onClick={this.handleLogout}>Sign Out</button>
      </div>
    );
  };
}

export default Logout;