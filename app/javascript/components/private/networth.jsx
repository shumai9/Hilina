import React from 'react'

class Networth extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      networth: null,
      isLoaded: false
    }  
  }
  
  componentDidMount() {
    this.props.loadedComponent("networth"); 
    //this.props.fetchUserData("networth", "GET");
  } 
  
  render() { 
    const data = this.props.data.net;
    const net = this.props.getNetworth;
    console.log(this.props.data, data)
    if (data) {
      return (
        <div className="networth">
          <h1>Net worth</h1>
            <div key={data.id}>
              <h3>Total Asset : {this.props.data.subtotal.asset}</h3>
              <h3> Totals Commits: { this.props.data.subtotal.commit }</h3>
              <br/>
              <h3> Net Worth Now: {data.current_networth}</h3>
              <h3> Total amount: {data.total_amount}</h3>
              <h3> Total Net Worth value : {data.total_current_value}</h3>
            </div>              
          <h1>Net : {net()}</h1>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}
  
  
export default Networth ; 
  