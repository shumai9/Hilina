import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/header'
import './App.scss'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount(){
    let self = this
    
    fetch('/site', {
      method: "GET",headers: {
      'Content-Type': 'application/json',mode: 'cors' 
        }
      }
    )
    .then(res => res.json())
    .then((result) => {        
      if(result.data.email){
        self.setState({ currentUser: result.data.email })
      } else {
        self.setState({ currentUser: null })
      }
    }).catch(function(error)
    {if(error){console.log(error);}})
  }

  updateCurrentUser(email) {
    this.setState({
      currentUser: email
    })
  }

  changePage(newPage) {
    this.setState({ page: newPage })
  }
  
  render(){
    return (
      <div className="app">
        <h1 id="logo">Hilina</h1>
        <a href={this.props.page || '#'} onClick={() => this.changePage("home")}>
          Home</a>
        <Header updateCurrentUser={this.updateCurrentUser}/>
      </div>
    )
  }
}



export default App;

