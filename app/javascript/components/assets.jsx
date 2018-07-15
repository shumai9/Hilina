import React from 'react'


class Assets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: []
    }
    this.list = this.list.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/total_assets")
      .then(res => res.json())
      .then (
        (result) => {
          this.setState({ asset: result })
        },
      (error) => {this.props.setState({ isLoaded: true, errors: error.message });} 
    )
  }
  
  list(data1, data2){    
     return ( 
      <span>
        <p id="a-name">{data1} </p>
        <p id="v-name">{data2} </p>
      </span>     
      )
      console.log(data);
  }

  render() {    
    if (this.props.error) {
      return <div>Error: {this.props.errors}</div>;
    } else if (!this.props.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <div style={asetStyle}>
            <h2> Total Assets:</h2>
             {itemsName.map((data1)=> this.list(data1))}
              { itemsVal.map((data2)=> this.list(data2)) }   
          </div>
        );
      }
    }
}  


export default Assets;  
