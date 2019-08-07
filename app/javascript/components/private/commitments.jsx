import React from 'react'

class Commitments extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    console.log('COMit mounted');    
    this.props.fetchUserData("commitments", "GET");
  }
  
  render() {
    const data = this.props.data;   
    if (data) {
      return (
        <div className="commitments">
          <h2>Financial commitment : Total amount</h2>
          <ul>
            {
              [...data].map((k,v)=>{ 
                return (
                  <li key={"commit" + v}> {k.commitment_name}: - {k.amount}</li>             
                );
              })
            }
          </ul>
          <h1>Total:</h1>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}     


export default Commitments;  
