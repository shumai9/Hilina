import React from 'react'

class Commitments extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    console.log('COMit mounted');
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
