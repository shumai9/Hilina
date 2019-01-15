import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isLoaded: false,
      text: {}
    }       
  }
  componentDidMount() {
    fetch("http://localhost:3000/home")
    .then(res => res.json())
    .then((result)=>{
      this.setState({
        isLoaded: true,
        text: result
      })
    })
    .catch( e => {console.log('home',e)})
  }
  render() {
    const data = this.state.text;
    return(
      <div className="home">  
        <h1>{data.title}</h1>
          <p>{data.body}</p>     
      </div>
    )
  }
}

export default Home;