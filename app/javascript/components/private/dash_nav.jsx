import React from 'react'
import { NavLink } from 'react-router-dom'


class DashNav extends React.Component {
  constructor(props) {
    super(props)  
  }
  render(){ 
    return( 
      <div className="nav nav-bar">
        <NavLink exact to={"/"} id="logo"/>
          <ul className="link" >
            <li><NavLink to={ "/assets" }>Assets</NavLink></li>              
            <li><NavLink to={ "/commits" }>Commitments</NavLink></li>
            <li><NavLink to={ "/networth" }>Net Worth</NavLink></li>
          </ul>
      </div> 
    )
  }
}

export default DashNav;
