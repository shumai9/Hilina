import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Signup from '../components/signup'
import Login from '../components/login'
import Logout from '../components/logout'
import Home from '../components/home'
import './head.scss'



class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {value:''};

    if (this.props.currentUser == null){
      this.state = { page:"login" }
    }else{ 
      this.state = { page: "delete"}
    }
    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage) {
    this.setState({ page: newPage })
  }

  render() {
    switch(this.state.page) {
      case "signup":
        return <Signup changePage={this.changePage} 
          updateCurrentUser={this.props.updateCurrentUser}/>
      case "login":
        return <Login changePage={this.changePage} 
        updateCurrentUser={this.props.updateCurrentUser}/>
      case "delete":
        return <Logout changePage={this.changePage} 
        updateCurrentUser={this.props.updateCurrentUser}/>
        case "home":
        return <Home changePage={this.changePage} 
          updateCurrentUser={this.props.updateCurrentUser}/>
    }
  }
}

export default Header;