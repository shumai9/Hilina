import React from 'react'

class Networth extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      networth: {},
      isLoaded: false
    }  
  }
  
  componentDidMount() {
    console.log("Got ch yaaaa")
  } 
  
  render() { 
    return (
      <div className='networth'>
          <h1>Total Networth</h1>
          {/* {this.state.bucks.map((key, value) => {return <div></div>})} */}  
        </div>
      ); 
    
  }
}
  
  
export default Networth ; 
  