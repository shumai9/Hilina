import React from 'react'


class Assets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/assets")
      .then(res => res.json())
      .then (
        (result) => {
          this.setState({ asset: result[0] })
        },
      (error) => {this.props.setState({ isLoaded: true, errors: error.messages });} 
    )
  }
  
  render() {   
    if (this.props.errors) {
      return <div>Error: {this.props.errors}</div>;
    } else if (this.props.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <div >
            <h2> Total Assets:{this.state.asset}</h2>
               
          </div>
        );
      }
    }
}  


export default Assets;  
