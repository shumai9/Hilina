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
    fetch("http://localhost:3000/api/v1/networth", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "charset": "UTF-8",
        "Authorization": this.props.token(), 
        "mode": "cors"
      }})
    .then(res => res.json())
    .then((result) => {
      this.setState({isLoaded: true, networth: result});
    })
    .catch( e => {
      console.warn('Error in Networth', e);
    });
  } 
  
  render() { 
    if (!this.state.isLoaded) {
      return <div> Loading...</div>;
    } else {
      return (
        <div className='networth'>
          <h1>Total Networth</h1>
          {/* {this.state.bucks.map((key, value) => {return <div></div>})} */}  
        </div>
      ); 
    }
  }
}
  
  
export default Networth ; 
  