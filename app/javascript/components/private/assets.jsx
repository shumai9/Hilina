import React from 'react'


class Assets extends React.Component {
  constructor(props) {
    super(props);
  }

  listAssets =()=>{
    console.log('asset got here')   
  }
  componentDidMount() {
    console.log('asset mounted')
    this.props.fetchUserData("assets", "GET"); 
  }

  render() {
    const data = this.props.data;
    console.log("ASSEt");
    if (this.props.data) {
      return (
        <div className="assets">
          <h2>Financial Assets: :Total amount </h2>
          <ul >
            {
              [...data].map((k,v)=>{ 
                return (
                  <li key={"asset-" + v}>  {k.asset_name} : {k.amount}</li>
                );
              })
            }
          </ul>
          <h1>Total:</h1>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}  


export default Assets;  
