import React from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import Login from '../components/login'


class Nav extends React.Component {
  constructor(props) {
    super(props)  
  }
  render(){ 
    return( 
      <div className="nav nav-bar">
        <NavLink exact to={"/#"} id="logo"/>
          <ul className="link" >
            <li><NavLink exact to={"/home"}>Home</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
            <li><NavLink to={"/address"}>Address</NavLink></li>
            <li><NavLink to={"/users/sign_up"}>Sign up</NavLink></li>
          </ul>
        <Login updateCurrentUser = { this.props.updateCurrentUser } />
      </div> 
    )
  }
}

export default Nav;
