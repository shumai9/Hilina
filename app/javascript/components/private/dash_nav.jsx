import React from 'react'
import { NavLink } from 'react-router-dom'
import Logout from './logout';
import { 
  navLink, 
  navBar, 
  navChild, 
  logoIcon ,
  navItem,
  nav
} from '../../style/style.module.css'


class DashNav extends React.Component {
  constructor(props) {
    super(props)  
  }
  render(){
    const currentUser       = this.props.currentUser;
    const toggleLogin       = this.props.toggleLogin;
    const updateCurrentUser = this.props.updateCurrentUser;
    const signedIn          = this.props.signedIn;
    return(
      <div className={nav}>
        <NavLink exact to={"/"}>
            <i className={logoIcon}></i>
        </NavLink>
          <ul className={navLink} >
            <li className={navChild}><NavLink className={navItem} to={ "/assets" }>Assets</NavLink></li>              
            <li className={navChild}><NavLink className={navItem} to={ "/commits" }>Commitments</NavLink></li>
            <li className={navChild}><NavLink className={navItem} to={ "/networth" }>Net Worth</NavLink></li>
          </ul>
          <Logout
            signedIn = { signedIn }
            toggleLogin={ toggleLogin }
            updateCurrentUser = { updateCurrentUser }
            user={ currentUser }
          />
      </div>
    )
  }
}

export default DashNav;
