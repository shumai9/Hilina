import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class Nav extends React.Component {
  constructor(props) {
    super(props)  
  }
  render(){ 
    return( 
      <span className="baner">
        <nav className="nav nav-bar">
          <Link to={`/about`}>
            <span>About</span>
          </Link>
          <Link to={`/home`}>
            <span>Home</span>
          </Link>
          <Link to={`//users/sign_up`}>
            <span>SignUp</span>
          </Link>
          <Link to={`/users/sign_in`}>
            <span>Login</span>
          </Link>
        </nav> 
      </span> 
    )
  }
}

export default Nav;

