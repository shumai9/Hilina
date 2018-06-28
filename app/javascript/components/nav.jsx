import React from 'react'

class Nav extends React.Component {
  constructor(props) {
    super(props)  
  }
  render(){ 
    return( 
      <span className="baner">
        <nav className="nav nav-bar"> 
        <span>About</span>
        <span>Home</span>
        <span>SignUp</span>
        <span>Login</span>
        <span>About</span> 
        </nav> 
      </span> 
    )
  }
}

export default Nav;

