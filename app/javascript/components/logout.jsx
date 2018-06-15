import React from 'react'


class Logout extends React.Component {
  
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  handleLogout(e) {
    e.preventDefault();
    let that = this
    let email = this.props.currentUser

    fetch('/users/sign_out', {
      method: 'delete',
      header: 'Content-Type: application/json',
      body: JSON.stringify(data)
    })
    .then((res) => {
      that.props.changePage("login")
    })
    .catch(function(error){
      console.log(error)
    })
  }

  render() {
    return (
      <button onClick={this.handleLogout}>Sign Out</button>
    );
  };
}

export default Logout;