import React from 'react'
import Nav from '../components/nav'
import './home.scss'


class Home extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    
  }

   handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  render() {
    return(
      <div className="home">
       <header>
        <Nav>
        <h2>Welcome Home</h2>
          <a href='#' onClick={() => this.props.changePage("signup")}>
            New here Signup</a>
          <a href='#' onClick={() => this.props.changePage("login")}>
            Back to Login</a>
        </Nav>
        </header>
      </div>
    )
  }
}

export default Home;