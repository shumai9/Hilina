import React from 'react'

class Commitments extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      comit: {},
      isLoaded: false
    }
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/commitments", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "charset": "UTF-8",
        "Authorization": this.props.token(), 
        "mode": "cors"
      }})
    .then(res => res.json())
    .then ((result) => {this.setState({comit: result, isLoaded: true})})
    .catch(
      e =>{ console.log('commitments errors',e);}
    );
  }
  
  render() {   
    if (this.props.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="commitmentss">
          <h2> Total Commitments:</h2>               
        </div>
      );
    }
  }
}     


export default Commitments;  
