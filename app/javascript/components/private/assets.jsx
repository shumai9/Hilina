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
          <h2> Total Assets:</h2>
            {
              [...data].map((k,v)=>{ 
                return (
                  <div key={v}>
                    <h5 > `${k.asset_type}` : `${k.asset_name}` </h5>
                    <ul>
                      <li> Total amount: {k.amount}</li>
                    </ul>
                  </div>              
                );
              })
            }
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}  


export default Assets;  
