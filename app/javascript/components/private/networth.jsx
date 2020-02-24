import React from 'react'
import {flexChild, netWorth } from '../../style/style.module.css'

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
    const subAsset = this.props.data.subtotal;
    const subComit = this.props.data.subtotal;
    console.log(this.props.data, data)
    if (this.props.data) {
      return (
        <div className={netWorth}>
          <h2 className="title">Networth </h2>
            { data ? 
              (<div className={flexChild}>
                <h3>Total Asset : { subAsset ? subAsset.asset : 0 }</h3>
                <h3> Totals Commits: { subComit ? subComit.commit : 0 }</h3>
                <br/>
                <h3> Net Worth Now: { data.current_networth  }</h3>
                <h3> Total amount: { data.total_amount  }</h3>
                <h3> Total Net Worth value : { data.total_current_value }</h3>
              </div>) : (null)
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
  