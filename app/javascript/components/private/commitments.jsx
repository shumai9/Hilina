import React from 'react';
import {flexChild, commit } from '../../style/style.module.css'

class Commitments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
  }
  valueHandler = () =>{
    const ary = [];
    if(this.props.data.length > 0){
      this.props.data.map( (k,v) => {
        ary.push(k.amount)
      });
      return(- this.props.sumData(ary))
    }else{
      return 0
    }
  }
  componentDidMount() {
    console.log('COMit mounted');
    this.props.loadedComponent("commitment")    
    //this.props.fetchUserData("commitments", "GET");
  }
  render() {
    const data = this.props.data;
    const updateUserData = this.props.updateUserData;
    if (data) {
      return (
        <div className={commit}>
          <h2 className="title">List of Commitments </h2>
          <ul onClick={this.props.getSingleData} >
            {
              [...data].map((k,v)=>{
                this.state.value.push(parseInt(k.amount));
                return (
                  <li  
                  className={flexChild}
                  id={k.id} key={"commit" + v}> {k.commitment_name}: £  - {k.amount}</li>             
                );
              })
            }
          </ul>
          <h1>Total: £ <strong>{this.valueHandler()}</strong> </h1>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}     

export default Commitments;  
