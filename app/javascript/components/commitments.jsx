import React from 'react'

class Commitments extends React.Component {
  constructor(props) {
    super(props)
  }
   
  

  render(){
    return(
      <div >
        <h1> This is Commitments</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}     


export default Commitments;  
