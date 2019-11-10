import React from 'react';

const Section = (props) => {
  const component = props.component;
  return(
    props.data ?
      <div className="section">
        <span>
          <button>Edit</button>
          <button>Delete</button>
        </span>
        <h1>Type: { props.data[ component + "_type" ] }</h1>
        <ul>
          <li>Name: {props.data[ component + "_name" ] }</li>
          <li>Amount: {props.data.amount}</li>
          <li>Held since {props.data.acquired}</li>
          <li>No longer held since {props.data.ceased}</li>
        </ul>
      </div>
    : null
  )
}

export default Section;