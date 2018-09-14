


import React from 'react'

class Networth extends React.Component {
    constructor(props) {
      super(props);
      this.state = ({
        isLoaded: false,
        
      })
      
    }
    
    componentDidMount() {
      fetch("http://localhost:3000/api/v1/networth")
      .then(res => res.json())
      .then((result) => {
        this.setState({
            isLoaded: true,
            bucks: result[0]
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            errors: error.message
          })
        } 
      )
    }
  
    render() {    
      
      if (this.state.errors) {
        return <div> Error: {this.state.errors}</div>;
      } else if (!this.state.isLoaded) {
        return <div> Loading...</div>;
      } else {
        return (
          <div className='appStyle'>
            <p>Net</p>       
          </div>
        ); 
      }
    }  
  }
  
  
export default Networth ; 
  