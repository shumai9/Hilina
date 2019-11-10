import React from 'react';
import Form from './form';
import Section from './section';


class Assets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false
    }
  }
  valueHandler = () =>{
    const ary = [];
    this.props.data.map( (k,v) => {
      ary.push(k.amount)
    });
    //this.setState({ value: ary })
    return this.props.sumData(ary)
  }
  renderForm = () => {
    this.setState({formOpen: !this.state.formOpen});
  }
  submitHandler = (data) =>{
    data['user_id'] = this.props.data[0].user_id;  
    this.props.fetchUserData("assets","POST", data);
    this.renderForm()
    console.log("Create", data)
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
      })) : console.log("Error")
  }
  componentDidMount() {
    console.log('asset mounted')
    this.props.updateCompo("asset")
    //this.props.fetchUserData("assets", "GET");
  }
  render(props) {
    const data = this.props.data;
    const sum = this.props.sumData;
    console.log("ASSEt");
    if (this.props.data) {
      return (
        <div className="assets">
          <Section 
            component={ this.props.component }
            data={this.state.singleData}
          />
          <h2>Financial Assets: :Total amount </h2>
          <table>
            <tbody>
            <tr >
            {
              [...data].map((k,v)=>{
                let thead = Object.keys(k);
                return (
                  <th key={"th-" + v}> {thead[v+2]}</th>
                );
              })
            }
            </tr>
            <tr >
              {
                [...data].map((k,v)=>{
                  let tdata = Object.values(k);
                  return (
                    <th key={"th-" + v}> {tdata[v+2]}</th>
                  );
                })
              }
            </tr>
            </tbody>
          </table>
          <ul onClick={this.getSingleData}>
            {
              [...data].map((k,v)=>{
                return (
                  <li id={k.id} key={`${k.id}`}>  {k.asset_name} : £  {k.amount}</li>
                );
              })
            }
          </ul>
          <h1>Total:  <strong> £{this.valueHandler()}</strong></h1>
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


export default Assets;  
