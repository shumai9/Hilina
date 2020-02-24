import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  navBar, 
  navChild, 
  logoIcon,
  navItem,
  navLink
} from '../../style/style.module.css'

class Nav extends React.Component {
  constructor(props) {
    super(props)  
  }
  render(){ 
    return( 
      <div className={navBar}>
        <NavLink exact to={"/"}>
            <i className={logoIcon}></i>
        </NavLink>
          <ul className={navLink} >
            <li className={navChild}><NavLink className={navItem} exact to={"/"}>Home</NavLink></li>
            <li className={navChild}><NavLink className={navItem} exact to={"/about_us"}>About</NavLink></li>
            <li className={navChild}><NavLink className={navItem} exact to={"/contact_us"}>Contact</NavLink></li>            
            <li className={navChild}><NavLink className={navItem} exact to={"/dash_board"}>Dash Board</NavLink></li>
          </ul>
      </div> 
    )
  }
}

export default Nav;
