import React from 'react';
import {signOut} from '../../style/style.module.css'

class Logout extends React.Component {  
  constructor(props){
    super(props);
  }
  handleLogout = (e) => {
    sessionStorage.clear();
    this.props.updateCurrentUser();      
    this.props.toggleLogin();
  }
  render() {
    return (<i className={signOut} onClick={this.handleLogout}></i>);
  };
}

export default Logout;