import React from 'react'

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: {},
      isLoaded: true
    }
  }
  componentDidMount() {
    fetch("http://localhost:3000/about")
    .then(res => res.json())
    .then ((result) => {this.setState({text: result, isLoaded: true})})
    .catch(
      e =>{ console.log('text errors',e);}
    );
  }

  render() {
    const data = this.state.text
    return(
      <div className="about">
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
    );
  }
}

export default About;