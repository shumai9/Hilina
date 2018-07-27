import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Header from '../components/header'
import Nav from '../components/nav'
import './App.scss'


class App extends React.Component {
  constructor(){
    super();
    this.state = { current_user: null }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
    this.changePage = this.changePage.bind(this);
  }
 
  componentDidMount(){
    fetch('/any_user', {
      method: "GET",
      headers: {'Content-Type': 'application/json',mode: 'cors'}
      }
    ).then((res) => res.json()).then((response) => {        
      if(response.email){
        this.setState({ current_user: response.email })
      } else {
        this.setState({ current_user: null })
      }
    }).catch((error) =>{
      console.log(error);
    })
  }

  updateCurrentUser(email) {
    this.setState({
      current_user: email
    })
  }

  changePage(newPage) {
    this.setState({ page: newPage })
  }
  
  render(){
    return (
      <div className="app">
        <Nav />
        <Header updateCurrentUser = { this.updateCurrentUser } />
      <div id="footer"></div>
    </div>
    )
  }
}


export default App;

