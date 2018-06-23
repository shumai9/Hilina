import React from 'react'
import './logout.scss'

class Logout extends React.Component {
  
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  handleLogout(e) {
    e.preventDefault();
    let self = this
    let email = this.props.current_user

    fetch('/users/sign_out', {
      method: 'delete',
      header: 'Content-Type: application/json',
      body: JSON.stringify(email)
    })
    .then((res) => {
      self.props.changePage("login")
    })
    .catch(function(error){
      console.log(error)
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