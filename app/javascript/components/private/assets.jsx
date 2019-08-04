import React from 'react'


class Assets extends React.Component {
  constructor(props) {
    super(props);
  }

  listAssets =(res)=>{
    const data = {asset: res};
    console.log('Asset', data.asset)
    this.setState({isLoaded: true})
  }
  componentDidMount() {
    console.log('asset mounted')
  }

  render() {
    console.log("ASSEt",this.props.token());
    if (this.props.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="assets">
          <h2> Total Assets:</h2>
          {/*this.state.asset.map((k,v)=>{ return <li>`${k} : ${v}`</li>})*/}               
        </div>
      );
    }
  }
}  


export default Assets;  
