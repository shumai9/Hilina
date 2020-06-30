import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  navBar, 
  navChild, 
  navItem,
  navLink,
  homeIcon,
  aboutIcon,
  contactIcon,
  dashIcon
} from '../../style/style.module.css'

class Nav extends React.Component {
  constructor(props) {
    super(props)  
  }
  render(){ 
    return( 
      <div className={navBar}>
        <ul className={navLink} >
          <li className={navChild}>
            <NavLink
              className={navItem}
              exact to={"/"}>
                <i className={homeIcon}></i>
              Home
            </NavLink>
          </li>
          <li className={navChild}>
            <NavLink
              className={navItem}
              exact to={"/about_us"}>
                <i className={aboutIcon}></i>
              About
            </NavLink>
          </li>
          <li className={navChild}>
            <NavLink 
              className={navItem} 
              exact to={"/contact_us"}>
              <i className={contactIcon}></i>
              Contact
            </NavLink>
          </li>            
          <li className={navChild}>
            <NavLink 
              className={navItem} 
              exact to={"/dash_board"}>
              <i className={dashIcon}></i>
              Dash board
            </NavLink>
          </li>
        </ul>
      </div> 
    )
  }
}

export default Nav;
