import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter as Route, Link } from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'
import Nav from './nav'



class Main extends React.Component {

  constructor(props){
    super(props);
    this.state = {value:''};
  }

  render() {
    return (
      <div className="content" >            
        <Main updateCurrentUser = { this.updateCurrentUser } >         
          <div className="route">
            <Route exact path="/" render= { (props)=> <Home { ...props}/>}/>
            <Route exact path="/home" render={ (props)=> <Home { ...props}/>}/>
            <Route path="/about" render={ (props)=><About { ...props}/>}/>
            <Route path="/contact" render={ (props)=><Contact { ...props}/>}/>
            <Route path="/users/sign_up" render={ (props)=><Signup { ...props}/>}/>
            <Route path="/users/login" render={ (props)=><Login { ...props}/>}/>
          </div>  
        </Main>  
        <div id="footer"></div>
      </div>  
    )
  }
}

export default Main;    
     