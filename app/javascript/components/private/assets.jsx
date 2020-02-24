import React from 'react';
import {flexChild, asset, gridCol, gridRow } from '../../style/style.module.css'

class Assets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridData: {}
    }
  }
  valueHandler = () =>{
    const ary = [];
    if(this.props.data.length > 0){
      this.props.data.map( (k,v) => {
        ary.push(
          typeof(k) === "string" ? parseInt(k.amount) :  k.amount
        )
      });
      return this.props.sumData(ary)
    }else{
      return 0
    }
  }
  
  componentDidMount() {
    console.log('asset mounted')
    this.props.loadedComponent("asset")
    //this.props.fetchUserData("assets", "GET");
  }
  render(props) {
    const data = this.props.data;
    const sum = this.props.sumData;
    const updateUserData= this.props.updateUserData;
    console.log("ASSEt");
    if (this.props.data) {
      return (
        <div className={asset}>
          <h2 className="title">List of Assets </h2>
            <div className={gridCol}>
              <h2>Asset name</h2>
              <h2>Asset type</h2>
              <h2>Amount</h2>
              <h2>Held</h2>
              <h2>Ceased</h2>
            </div>
            {
              [...data].map((k,v)=>{       
                return (
                  <div
                    className={gridCol}
                    onClick={this.props.getSingleData}                    
                    id={k.id} key={`${k.id}`}>
                      <li className={flexChild} id={k.id}>{k.asset_name}</li>
                      <li className={flexChild} id={k.id}>{k.asset_type}</li>
                      <li className={flexChild} id={k.id}> £ {k.amount}</li>                    
                      <li className={flexChild} id={k.id}>
                        {k.acquired.getDate()} / {k.acquired.getMonth()} / {k.acquired.getFullYear()}</li>
                      <li className={flexChild} id={k.id} >
                      {k.ceased.getDate()} / {k.ceased.getMonth()} / {k.ceased.getFullYear()}</li>
                  </div>
                );
              })
            }
          <ul onClick={this.props.getSingleData}>
            {
              [...data].map((k,v)=>{
                return (
                  <li className={flexChild} id={k.id} key={`${k.id}`}>
                    {k.asset_name} 
                  : £  {k.amount}
                  </li>
                );
              })
            }
          </ul>
          <h2>Total:  <strong> £ {this.valueHandler()}</strong></h2>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}  


export default Assets;  
