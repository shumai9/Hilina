import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Home from '../components/home'
import Signup from '../components/signup'
import Logout from '../components/logout'



class Main extends React.Component {

  constructor(props){
    super(props);
    this.state = {value:''};

    if (this.props.currentUser == null){
      this.state = { page:"" }
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
      case "" :
        return <div />
      case "delete":
        return <Logout changePage={this.changePage} 
      updateCurrentUser={this.props.updateCurrentUser}/>
    }
  }
}

export default Main;