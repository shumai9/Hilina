import React from 'react';

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
  render(props){
    const compo = this.props.component;
    return(
      <form { ...props } onSubmit={ this.submitForm } className="form">
        <label>
          <input
            value={ this.state.value }
            onChange={ this.inputHandler }
            type="text"
            name={ compo + "_name" }
            placeholder="Name"
          />
        </label>
        <select  
          onChange ={ this.inputHandler }
          value={ this.state.value }
          name={ compo + "_type" } form="form">
          <option placeholder="Select"></option>
          <option>Financial</option>
          <option>Non-Financial</option>
        </select>
        <label>
          <input
            value={ this.state.value}
            onChange ={ this.inputHandler }
            type="number"
            step="0.01"
            name="amount"
            placeholder="Value in cash"/>
        </label>
        <label>
          <input
            value={this.state.value}
            onChange ={this.inputHandler}
            type="date" 
            name="acquired"/>
        </label>
        <label>
          <input
            value={this.state.value}
            onChange ={this.inputHandler}
            type="date" 
            name="ceased"/>
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form;