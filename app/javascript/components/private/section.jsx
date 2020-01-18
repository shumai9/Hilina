import React from 'react';

const Section = (props) => {
  const component = props.component;
  return(
      props.data ?
      <div className="section">
        <span>
          <button className="btn-edit" onClick={props.renderEditor} >Edit</button>
          <button className="btn-delete" onClick={props.removeHandler}>
            <i className="icon-delete"></i>Delete</button>
        </span>
        <h1>Type: { props.data[ component + "_type" ] }</h1>
        <ul>
          <li>Name: {props.data[ component + "_name" ] }</li>
          <li>Amount: {props.data.amount}</li>
          <li>In held since {props.data.acquired}</li>
          <li>Terminated since {props.data.ceased}</li>
        </ul>
        <button className="btn-close" onClick={props.closeSection}></button>
      </div>
    :  null
  )
}

export default Section;