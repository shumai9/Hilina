import React from 'react';

const Section = (props) => {
  return(
    props.data ?
      <div className="section">
        <h1>Type: {props.data.asset_type}</h1>
        <ul>
          <li>Name: {props.data.asset_name}</li>
          <li>Amount: {props.data.amount}</li>
          <li>It was Acquired {props.data.acquired}</li>
          <li>No longer held since {props.data.ceased}</li>
        </ul>
      </div>
      : null
  )
}

export default Section;