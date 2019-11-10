import React from 'react';
import Form from './form';
import Section from './section';

class Commitments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false,
      value: []
    }
  }
  valueHandler = () =>{
    const ary = [];
    this.props.data.map( (k,v) => {
      ary.push(k.amount)
    });
    return this.props.sumData(ary)
  }
  renderForm = () => {
    this.setState({formOpen: !this.state.formOpen});
  }
  submitHandler = (data) =>{
    data['user_id'] = this.props.data[0].user_id;  
    this.props.fetchUserData("commitments","POST", data);
    this.renderForm()
    console.log("Create", data.user_id)
  } 
  getSingleData = (e) => {
    const dataId = e.target.id;
    dataId ? (
      this.props.data.forEach(
        (item) => { 
          if (item.id == dataId){
            this.setState({singleData: item})
          } else{
            //this.props.fetchUserData(`assets/${id}`, "GET");
          }
      })
    ) : console.log("Error", e.target.id )
  }
  
  componentDidMount() {
    console.log('COMit mounted');
    this.props.updateCompo("commitment")    
    //this.props.fetchUserData("commitments", "GET");
  }
  
  render() {
    const data = this.props.data; 
    if (data) {
      return (
        <div className="commitments">
          <Section 
            component={ this.props.component }
            data={this.state.singleData}
          />
          <h2>Financial commitment : Total amount</h2>
          <ul onClick={this.getSingleData} >
            {
              [...data].map((k,v)=>{
                this.state.value.push(parseInt(k.amount));
                return (
                  <li id={k.id} key={"commit" + v}> {k.commitment_name}: £  - {k.amount}</li>             
                );
              })
            }
          </ul>
          <h1>Total: £  - <strong>{this.valueHandler()}</strong> </h1>
          <button onClick={this.renderForm} className="btn-create">+</button>
          { 
            this.state.formOpen ?
              <Form 
                submitHandler={ this.submitHandler }
                component={ this.props.component }
              />
            : null
          }
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}     

export default Commitments;  
