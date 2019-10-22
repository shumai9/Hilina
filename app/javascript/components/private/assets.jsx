import React from 'react'


class Assets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
  }
  valueHandler = () =>{
    const ary = [];
    this.props.data.map(
      (k,v) => {
      ary.push(parseInt(k.amount))
    });
    //this.setState({ value: ary })
    return this.props.sumData(ary)
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
            {//This needs sorting out ??
              [...data].map((k,v)=>{
                return (
                  <li key={"asset-" + v}>  {k.asset_name} : £  {k.amount}</li>
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
