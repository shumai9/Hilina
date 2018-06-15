import React from 'react'
import Assets from '../components/Assets'
import Commitments from '../components/Commitments'
import PropTypes from 'prop-types'


class Account extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  
  componentDidMount() {
    let self = this
    fetch("http://localhost:3000/api/v1/account")
    .then(res => res.json())
    .then((result) => {
      self.props.setState({
          isLoaded: true,
          items: result[0]
        });
      },
      (error) => {self.props.setState({ isLoaded: true, error})} 
    )
  }

  render() {    
    const { error, isLoaded, items } = this.props.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
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
