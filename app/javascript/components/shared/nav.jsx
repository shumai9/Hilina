import React from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'


class Nav extends React.Component {
  constructor(props) {
    super(props)  
  }
  render(){ 
    return( 
      <div className="nav nav-bar">
        <NavLink exact to={"/"} id="logo"/>
          <ul className="link" >
            <li><NavLink exact to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/about_us"}>About</NavLink></li>
            <li><NavLink to={"/contact_us"}>Contact</NavLink></li>
            <li><NavLink to={"/users/registration"}>Sign up</NavLink></li>
            <li><NavLink to={"/users/login"}>Login</NavLink></li>
            <li><NavLink exact to={"/user/dash_board"}>Dash Board</NavLink></li>
          </ul>
      </div> 
    )
  }
}

export default Nav;
