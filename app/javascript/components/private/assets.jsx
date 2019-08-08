import React from 'react'


class Assets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    }
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
          <ul >
            {
              [...data].map((k,v)=>{
                this.state.value.push(parseInt(k.amount));
                return (
                  <li key={"asset-" + v}>  {k.asset_name} : £  {k.amount}</li>
                );
              })
            }
          </ul>
          <h1>Total:  <strong> £ { sum(this.state.value)}</strong></h1>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}  


export default Assets;  
