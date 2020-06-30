import React from 'react'
import { NavLink } from 'react-router-dom'
import Logout from './logout';
import { 
  navLink, 
  navChild, 
  navItem,
  assetIcon,
  comitIcon,
  netIcon
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
      <>
        <ul id="manu" className={navLink} >
          <i className="arr">></i>
          <li className={navChild}>
          <NavLink 
            className={navItem} 
            to={ "/assets" }>
            <i className={assetIcon}></i>
            Assets
          </NavLink>
          </li>              
          <li className={navChild}>
            <NavLink 
              className={navItem} 
              to={ "/commits" }>
            <i className={comitIcon}></i>
            Commits</NavLink>
          </li>
          <li className={navChild}>
            <NavLink 
              className={navItem} 
              to={ "/networth" }>
              <i className={netIcon}></i>
              Networth
            </NavLink>
          </li>
        </ul>
        <Logout
          signedIn = { signedIn }
          toggleLogin={ toggleLogin }
          updateCurrentUser = { updateCurrentUser }
          user={ currentUser }
        />
      </>
    )
  }
}

export default DashNav;
