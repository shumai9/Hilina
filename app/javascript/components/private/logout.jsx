import React from 'react';
import {BrowserRouter as Redirect} from "react-router-dom";

class Logout extends React.Component {  
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  handleLogout(e) {
    e.preventDefault();
    const data= { email: `${this.props.curentUser}`}  
    console.log('check data in logout ',data.email);

    fetch('/users/sign_out', {
      method: 'DELETE',
      header: 'Content-Type: application/json',
      body: JSON.stringify(data)
    })
    .then((result) => {     
      this.props.updateCurrentUser();
      console.log('returned api data',result.status);
    })
    .catch( e =>{
      console.log('error form logout ',e);
    })
  }

  render() {
    const curentUser = this.props.curentUser;
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