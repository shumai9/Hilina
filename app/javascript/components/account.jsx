import React from 'react'
import Assets from '../components/assets'
import Commitments from '../components/commitments'
import PropTypes from 'prop-types'


class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      isLoaded: false,
      bucks: [],
      errors: []
    })
    
  }
  
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/accounts")
    .then(res => res.json())
    .then((result) => {
      this.setState({
          isLoaded: true,
          bucks: result[0]
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          errors: error.message
        })
      } 
    )
  }

  render() {    
    
    if (!this.state.errors) {
      return <div> Error: {this.state.errors}</div>;
    } else if (!this.state.isLoaded) {
      return <div> Loading...</div>;
    } else {
      return (
        <div className='appStyle'>
          <Assets />
          <Commitments />         
        </div>
      ); 
    }
  }  
}


export default Account;  
