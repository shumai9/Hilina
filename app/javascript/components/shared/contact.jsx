import React from 'react'

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: {},
      isLoaded: true
    }
  }
  componentDidMount() {
    fetch("http://localhost:3000/contact")
    .then(res => res.json())
    .then ((result) => {this.setState({text: result, isLoaded: true})})
    .catch(
      e =>{ console.log('text errors',e);}
    );
  }
  render() {
    const data = this.state.text;
    return(
      <div>
        <h1>Contact Us</h1>
        <h2>{data.name} </h2>
        <p>{data.address}</p>
        <p>{data.city}</p>
        <p>{data.tel}</p>
        <p>{data.email} </p>
      </div>
    )
  }
}

export default Contact;