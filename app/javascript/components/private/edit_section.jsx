import React from 'react';
import {formFormat,sectionEdit, closeIcon, saveIcon,links} from '../../style/style.module.css';

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
    const eData = this.state.edited;
    const aqDate = eData.acquired.toISOString().substr(0,10) | eData.acquired;
    const ceDate = eData.ceased ? 
      eData.ceased.toISOString().substr(0,10) | eData.ceased : '' ;
    return(
      <div className={sectionEdit}>
        <h2>Edit {this.props.component}</h2>
        <form className={formFormat}>
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
            selected={ this.state.edited[compo + "_type"] | ''}
            name={ compo + "_type" } form="form">
            <option disabled >--sellect type--</option>
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
              value={ aqDate }
              onChange ={this.onEdit}
              type="date" 
              name="acquired"/>
          </label>
          <label>
            <input
              value={ ceDate}
              onChange ={this.onEdit}
              type="date" 
              name="ceased"/>
          </label>
          <span className={links}>
            <button 
              className={saveIcon} 
              onSubmit={ this.onSaveForm }
              type="submit">Save</button>
            <button 
              className="btn-cancel"
              onClick={ this.props.renderEditor }>Cancel</button>
          </span>
        </form>        
      </div>
    )
  }
}
export default EditForm;