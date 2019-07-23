import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isLoaded: false,
      text: {}
    }       
  }
  render() {
    const data = this.state.text;
    return(
      <div className="home">  
        <h1>Home sweet Home</h1>
          <p>{data.body}</p>     
      </div>
    )
  }
}

export default Home;