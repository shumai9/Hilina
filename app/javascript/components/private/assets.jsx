import React from 'react';

class Assets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <div className="assets">
          <button 
            onClick={this.props.renderForm}
            className="btn-add"> Add {this.state.component}
          </button>
          <h2>Financial Assets: :Total amount </h2>
          <ul onClick={this.props.getSingleData}>
            {
              [...data].map((k,v)=>{
                return (
                  <li id={k.id} key={`${k.id}`}>  {k.asset_name} : £  {k.amount}</li>
                );
              })
            }
          </ul>
          <h1>Total:  <strong> £{this.valueHandler()}</strong></h1>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}  


export default Assets;  
