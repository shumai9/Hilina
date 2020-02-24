import React from 'react'; 
import {formFormat, closeIcon, flexChild, links} from '../../style/style.module.css';

const Section = (props) => {
  const component = props.component;
  return(
      props.data ?
      <div className={formFormat}>
        <h2>{props.component}</h2>
        <ul className={flexChild}>
          <button className={closeIcon} onClick={props.closeSection}></button>
          <li>Name: {props.data[ component + "_name" ] }</li>
          <li>Type:  { props.data[ component + "_type" ] }</li>
          <li>Amount:  {props.data.amount}</li>
          <li>In held since: {props.data.acquired.getDate()}
          /{props.data.acquired.getMonth()}/{props.data.acquired.getFullYear()}
          </li>
          <li>Terminated since: {props.data.ceased.getDate()}/{props.data.ceased.getMonth()}/{props.data.ceased.getFullYear()}</li>
        </ul>
        <span className={links}>          
          <button className="btn-edit" onClick={props.renderEditor} >Edit</button>
          <button className="btn-delete" onClick={props.removeHandler}>
            <i className="icon-delete"></i>Delete</button>
        </span>
      </div>
    :  null
  )
}

export default Section;