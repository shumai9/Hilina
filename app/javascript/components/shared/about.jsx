import React from 'react'

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: {},
      isLoaded: true
    }
  }
  /*componentDidMount() {
    fetch("http://localhost:3000/public/data.json")
    .then(res => res.json())
    .then ((result) => {this.setState({text: result, isLoaded: true})})
    .catch(
      e =>{ console.log('text errors',e);}
    );
  }*/

  render() {
    const data = this.state.text
    return(
      <div className="about">
        <h1>About</h1>
        <p>{data.about}</p>
      </div>
    );
  }
}

export default About;