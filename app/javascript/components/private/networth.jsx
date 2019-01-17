


import React from 'react'

class Networth extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      isLoaded: false,
      bucks: null       
    });      
  }
  
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/networth")
    .then(res => res.json())
    .then((result) => {this.setState({isLoaded: true, bucks: result.current});})
    .catch( e => {
        console.warn('Error in Networth', e);
    });
  } 

    render() {
      console.log('Networth', this.state.bucks)  ;  
      if (!this.state.isLoaded) {
        return <div> Loading...</div>;
      } else {
        return (
          <div className='networth'>
            <h1>{this.state.bucks}</h1>
            {/* {this.state.bucks.map((key, value) => {return <div></div>})} */}
                   
          </div>
        ); 
      }
    }
}
  
  
export default Networth ; 
  