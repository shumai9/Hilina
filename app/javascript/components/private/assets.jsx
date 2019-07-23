import React from 'react'


class Assets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      asset: {}
    }
  }
  listAssets =(res)=>{
    const data = {asset: res};
    console.log('Asset', data.asset)
    this.setState({isLoaded: true})
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/assets", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "charset": "UTF-8",
        "Authorization": this.props.token(), 
        "mode": "cors"
      }
    })
    .then(res => res.json())
    .then ((result) => {
      this.listAssets(result);
    }).catch(
      e =>{ console.log('Asset errors',e);}
    );
  }

  render() {
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
