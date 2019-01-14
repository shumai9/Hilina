import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'


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
        <h2>Home</h2>
          <p> Welcome this is hilina home page enjoy! </p>     
      </div>
    )
  }
}

export default Home;