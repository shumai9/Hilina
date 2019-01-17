import React from 'react'


class Assets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/assets")
    .then(res => res.json())
    .then ((result) => {this.setState({asset: result.all, isLoaded: true})})
    .catch(
      e =>{ console.log('Asset errors',e);}
    );
  }
  
  render() {   
    if (this.props.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="assets">
          <h2> Total Assets:{this.state.asset}</h2>               
        </div>
      );
    }
  }
}  


export default Assets;  
