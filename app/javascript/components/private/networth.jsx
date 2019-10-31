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
    //this.props.fetchUserData("networth", "GET");
  } 
  
  render() { 
    const data = this.props.data;
    const net = this.props.getNetworth;
    if (data) {
      return (
        <div className="networth">
          <h1> Total Net worth</h1>
          {
            [...data].map((k,v)=>{ 
              return (
                <div key={v}>
                  <h3> Net Worth Now: {k.current_networth}</h3>
                  <h3> Total amount: {k.total_amount}</h3>
                  <h3> Total Net Worth value : {k.total_current_value}</h3>
                </div>              
              );
            })
          }
          <h1>Net : {net()}</h1>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}
  
  
export default Networth ; 
  