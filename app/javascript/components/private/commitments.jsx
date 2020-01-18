import React from 'react';

class Commitments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
  }
  valueHandler = () =>{
    const ary = [];
    this.props.data.map( (k,v) => {
      ary.push(k.amount)
    });
    return this.props.sumData(ary)
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
        <div className="commitments">
          <button onClick={this.props.renderForm} className="btn-add">
              Add {this.state.component}
            </button>
          <h2>Financial commitment : Total amount</h2>
          <ul onClick={this.props.getSingleData} >
            {
              [...data].map((k,v)=>{
                this.state.value.push(parseInt(k.amount));
                return (
                  <li id={k.id} key={"commit" + v}> {k.commitment_name}: £  - {k.amount}</li>             
                );
              })
            }
          </ul>
          <h1>Total: £  - <strong>{this.valueHandler()}</strong> </h1>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}     

export default Commitments;  
