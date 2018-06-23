import React from 'react'


class Assets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      error: null,
      itemsName:[],
      itemsVal: []
    }
    this.list = this.list.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/asset")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            itemsName: (Object.keys(result[0])),
            itemsVal: ( Object.values(result[0]))
          });

        },

        (error) => {this.setState({ isLoaded: true, error});} 
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
    const { error, isLoaded, itemsName, itemsVal } = this.state;
    console.log(this.state.itemsName);
    console.log(this.state.itemsVal);  

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
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
