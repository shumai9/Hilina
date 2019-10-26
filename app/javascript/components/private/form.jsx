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
    return(
      <form {...props} onSubmit={this.submitForm} className="form">
        <label>
          <input
            value={this.state.value}
            onChange ={this.inputHandler}
            type="text"
            id="asset_name"
            name="asset_name"
            placeholder="Asset name"
          />
        </label>
        <label>
          <input
            value={this.state.value}
            onChange ={this.inputHandler}
            type="number"
            id="amount" 
            name="amount"
            placeholder="Asset value"/>
        </label>
        <label>
          <input
            value={this.state.value}
            onChange ={this.inputHandler}
            type="text"
            id="asset_type" 
            name="asset_type"
            placeholder="Asset type"/>
        </label>
        <label>
          <input
            value={this.state.value}
            onChange ={this.inputHandler}
            type="date"
            id="acquired" 
            name="acquired"
            placeholder="Date acquired"/>
        </label>
        <label>
          <input
            value={this.state.value}
            onChange ={this.inputHandler}
            type="date"
            id="ceased" 
            name="ceased"
            placeholder="Date ceased"/>
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form;