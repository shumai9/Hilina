import React from 'react'

class Commitments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
  }
  
  componentDidMount() {
    console.log('COMit mounted');    
    this.props.fetchUserData("commitments", "GET");
  }
  
  render() {
    const data = this.props.data;
    const sum = this.props.sumData;  
    if (data) {
      return (
        <div className="commitments">
          <h2>Financial commitment : Total amount</h2>
          <ul>
            {
              [...data].map((k,v)=>{
                this.state.value.push(parseInt(k.amount));
                return (
                  <li key={"commit" + v}> {k.commitment_name}: £  - {k.amount}</li>             
                );
              })
            }
          </ul>
          <h1>Total: £  - <strong>{ sum(this.state.value)}</strong> </h1>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}     


export default Commitments;  
