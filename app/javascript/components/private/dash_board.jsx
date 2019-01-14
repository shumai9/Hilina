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
    return (
      <div className='dashboard'>
        <Logout />
        <Networth />
        <Assets />
        <Commitments />         
      </div>
    ); 
  }
  
}


export default DashBoard;  
