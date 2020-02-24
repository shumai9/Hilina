import React from 'react';
import {formFormat, links} from '../../style/style.module.css';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitForm =(e)=>{
    e.preventDefault();
    const data = this.state;
    this.props.submitHandler(data);
  }
  componentDidMount() {
    this.props.data ?  this.setState(this.props.data) : null
    
  }
  render(props){
    const compo = this.props.component;
    console.log( this.state[compo + "_name"] )
    return(
      <div className={formFormat}>
        <h2> Add {this.props.component}</h2>
        <form { ...props } onSubmit={ this.submitForm } className="form">
          <label>
            <input
              value={ this.state.value }
              onChange={ this.inputHandler }
              type="text"
              edit="true"
              name={ compo + "_name" }
              placeholder="Name"
            />
          </label>
          <select
            defaultValue={"default"}
            onChange ={ this.inputHandler }
            value={ this.state.value }
            name={ compo + "_type" } form="form">
              <option value="default" disabled> -- sellect type --</option>
              <option>Financial</option>
              <option>Non-Financial</option>
          </select>
          <label>
            <input
              value={ this.state.value }
              onChange ={ this.inputHandler }
              type="number"
              step="0.01"
              name="amount"
              placeholder="Value in cash"/>
          </label>
          <label>
            <input
              value={ this.state.value }
              onChange ={this.inputHandler}
              type="date" 
              name="acquired"/>
          </label>
          <label>
            <input
              value={ this.state.value }
              onChange ={this.inputHandler}
              type="date" 
              name="ceased"/>
          </label>
        </form>
        <div className={links}>
          <button type="submit">Submit</button>
          <button
            className="btn-cancel"
            onClick={ this.props.renderForm }
            >Cancel</button>
        </div>
      </div>
    )
  }
}

export default Form;