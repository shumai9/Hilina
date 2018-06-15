import React from 'react'


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
      <div>
       <header>
        <nav>
        <h2>Welcome Home</h2>
          <a href='#' onClick={() => this.props.changePage("signup")}>
            New here Signup</a>
          <a href='#' onClick={() => this.props.changePage("login")}>
            Back to Login</a>
        </nav>
      </header>
      </div>
    )
  }
}

export default Home;