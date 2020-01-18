import React from 'react';

class EditForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { edited: this.props.data }
  }  
  onEdit = (e) => {
    this.setState({ 
      edited: { ...this.state.edited,
        [e.target.name]: e.target.value
      }
    })
  }
  onSaveForm =(e)=>{
    e.preventDefault();
    const data = this.state.edited;
    //needs cleaner way of sorting it out
    delete(data.created_at)
    delete(data.updated_at)
    this.props.updateHandler(data);
  }
  componentDidUpdate(prevProps) {
    if(prevProps.data !== this.props.data){
      this.setState({edited: this.props.data})
    }    
  }
  render(){
    const compo = this.props.component;
    return(
      <div className="section">
        <button 
          className="btn-cancel" 
          onClick={ this.props.renderEditor }
        >Cancel</button>
        <form onSubmit={ this.onSaveForm } className="form">
          <label>
            <input
              value={ this.state.edited[compo + "_name"] }
              onChange={ this.onEdit }
              type="text"
              edit="true"
              name={ compo + "_name" }
              placeholder="Name"
            />
          </label>
          <select  
            onChange ={ this.onEdit }
            value={ this.state.edited[compo + "_type"] | ''}
            name={ compo + "_type" } form="form">
            <option value=''>--sellect type--</option>
            <option>Financial</option>
            <option>Non-Financial</option>
          </select>
          <label>
            <input
              value={ this.state.edited.amount }
              onChange ={ this.onEdit }
              type="number"
              step="0.01"
              name="amount"
              placeholder="Value in cash"/>
          </label>
          <label>
            <input
              value={ this.state.edited.acquired.substr(0,10) }
              onChange ={this.onEdit}
              type="date" 
              name="acquired"/>
          </label>
          <label>
            <input
              value={ this.state.edited.ceased ? this.state.edited.ceased.substr(0,10) : '' }
              onChange ={this.onEdit}
              type="date" 
              name="ceased"/>
          </label>
          <button className="btn-save" type="submit">Save</button>
        </form>
      </div>
    )
  }
}
export default EditForm;