import React from 'react'

class Commitments extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isLoaded: false,
      commitments: []
    }
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/commitments")
    .then(res => res.json())
    .then ((result) => {this.setState({asset: result.all, isLoaded: true})})
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
          <h2> Total Commitments:{this.state.commitments}</h2>               
        </div>
      );
    }
  }
}     


export default Commitments;  
