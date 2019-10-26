import React from 'react'


class Assets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  valueHandler = () =>{
    const ary = [];
    this.props.data.map( (k,v) => {
      ary.push(k.amount)
    });
    //this.setState({ value: ary })
    return this.props.sumData(ary)
  }
  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitHandler = (e) =>{
    const asset = this.state;
    asset['user_id'] = this.props.data[0].user_id;  
    this.props.fetchUserData("assets","POST",asset);
    console.log("Create", asset)
    //e.preventDefault();
  }
  componentDidMount() {
    console.log('asset mounted')
    this.props.fetchUserData("assets", "GET");
  }
  render() {
    const data = this.props.data;
    const sum = this.props.sumData;
    console.log("ASSEt");
    if (this.props.data) {
      return (
        <div className="assets">
          <h2>Financial Assets: :Total amount </h2>
          <table>
            <tbody>
            <tr >
            {
              [...data].map((k,v)=>{
                let thead = Object.keys(k);
                return (
                  <th key={"th-" + v}> {thead[v+2]}</th>
                );
              })
            }
            </tr>
            <tr >
              {
                [...data].map((k,v)=>{
                  let tdata = Object.values(k);
                  return (
                    <th key={"th-" + v}> {tdata[v+2]}</th>
                  );
                })
              }
            </tr>
            </tbody>
          </table>
          <ul >
            {
              [...data].map((k,v)=>{
                return (
                  <li key={"asset-" + v}>  {k.asset_name} : £  {k.amount}</li>
                );
              })
            }
          </ul>
          <h1>Total:  <strong> £{this.valueHandler()}</strong></h1>
          <form onSubmit ={this.submitHandler} className="form">
            <input
              value={this.state.value}
              onChange ={this.inputHandler}
              type="text"
              id="asset_name" 
              name="asset_name"
              placeholder="Asset name"/>
            <input
              value={this.state.value}
              onChange ={this.inputHandler}
              type="number"
              id="amount" 
              name="amount"
              placeholder="Asset value"/>
            <input
              value={this.state.value}
              onChange ={this.inputHandler}
              type="text"
              id="asset_type" 
              name="asset_type"
              placeholder="Asset type"/>
            <input
              value={this.state.value}
              onChange ={this.inputHandler}
              type="date"
              id="acquired" 
              name="acquired"
              placeholder="Date acquired"/>
            <input
              value={this.state.value}
              onChange ={this.inputHandler}
              type="date"
              id="ceased" 
              name="ceased"
              placeholder="Date ceased"/>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}  


export default Assets;  
