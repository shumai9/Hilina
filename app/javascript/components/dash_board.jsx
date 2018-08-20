import React from 'react'
import Assets from '../components/assets'
import Commitments from '../components/commitments'
import Networth from '../components/networth'
import {  BrowserRouter as Router,  Route,  Link,  Redirect,  withRouter} from "react-router-dom";


class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      isLoaded: false,
      display: null,
    })
    
  }
  
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/networth")
    .then(res => res.json())
    .then((result) => {
      this.setState ({
          isLoaded: true,
          display: result
        });
      }, 
    )
  }

  render() {    
    if (this.state.isLoaded) {
      return <Networth>This is data {this.state.display}</Networth>;
    } else {
      return (
        <div className='appStyle'>
          <div> Calculating...</div>;
          <Assets />
          <Commitments />         
        </div>
      ); 
    }
  }  
}


export default DashBoard;  
