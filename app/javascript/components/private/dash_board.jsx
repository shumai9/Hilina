import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Assets from './assets';
import Commitments from './commitments';
import Networth from './networth';
import Login from '../login';
import Signup from '../signup';
import Form from './form';
import Section from './section';
import EditForm from './edit_section';
import {authPage,mainContent, dashbord, links, flexChild, addIcon} from '../../style/style.module.css'
class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      form_open: false,
      edit: false,
      component: null,
      section_on: false
    }    
  }
  loadedComponent = (name) =>{
    this.setState({
      component: name,
      singleData: null,
      section_on: false
    })
  }
  closeSection=()=>{
    this.setState({
      section_on: false
    })
  }
  renderForm = () => {
    this.setState({formOpen: !this.state.formOpen});
  }
  renderEditor=()=>{
    this.setState({edit: !this.state.edit});
  }
  selectedItem =(data, id)=>{
    return data.filter(item => item.id == id)[0]
  }
  getSingleData = (e) => {
    const itemId = parseInt(e.target.id);
    const data = this.props.data;
    if (this.state.component === "asset"){
      this.setState({
        singleData: [...data.asset].filter(item => item.id == itemId)[0],
        section_on: true
      })
    }
    if (this.state.component == "commitment"){
      this.setState({
        singleData: [ ...data.commit].filter(item => item.id == itemId)[0],
        section_on: true
      })
    }
    //this.props.fetchUserData(`assets/${id}`, "GET");         
  }
  updateUid=(uid)=>{ 
    this.setState({uid: uid})
  }
  submitHandler = (form_data) =>{
    console.log(this.props.data.net["user_id"])
    const endPoint = this.state.component + 's';
    const uId = this.props.data.net["user_id"];
    form_data["user_id"] = uId;   
    this.props.createUserData(endPoint, form_data);
    this.renderForm()
    console.log("Create", form_data)
  }
  updateHandler =(data)=>{
    const endPoint = this.state.component + 's';
    this.props.updateUserData(endPoint, data.id, data);
    this.renderEditor();
  }
  removeHandler=()=>{
    const itemId = this.state.singleData.id;
    const item = document.getElementById(itemId);
    const endPoint = this.state.component + 's';
    item.remove()
    this.setState({singleData: null})
    console.log(endPoint)
    this.props.removeUserData(endPoint, itemId)
  }
  sumData = (value) =>{
    const reducer = (accumulator, currentValue) =>
     accumulator + currentValue;
    const total  = value.reduce(reducer);
    return total 
  }
  getUserToken =() =>{
    return sessionStorage.getItem('token');
  }
  dashBoardCleaner=()=>{
    this.setState({});
    console.log("CLEANER", this.state)
  }
  handleStyleChange = (e)=>{
    const sign = document.getElementById("signup");
    const login = document.getElementById("login");
    e.target.id == "signup" ? ( 
      (sign.style["border-bottom"] = "solid 8px #ffa500") & 
      (login.style["border-bottom"] = "hidden")
    ) : (
      (sign.style["border-bottom"] = "hidden") & 
      (login.style["border-bottom"] = "solid 8px #ffa500")
    )
  }
  componentDidMount(){
    //this.props.currentUser ? this.props.getUserData() : console.log("skiped")
  }
  render() {
    const fetchUserData     = this.props.fetchUserData;
    const submitHandler     = this.submitHandler;
    const data              = this.props.data;
    const currentUser       = this.props.currentUser;
    const toggleLogin       = this.props.toggleLogin;
    const updateCurrentUser = this.props.updateCurrentUser;
    const signedIn          = this.props.signedIn;
    const getNetworth       = this.props.networthCalc;
    const getUserData       = this.props.getUserData;
    const removeData        = this.removeData;
    const createUserData    = this.props.createUserData;
    const updateUserData    = this.props.updateUserData;
    const removeUserData    = this.props.removeUserData;
    const closeSection      = this.closeSection;
    const updateUid         = this.updateUid;
    // const edData = {
    //   ...this.state.singleData, 
    //   [this.state.singleData.acquired]: this.state.singleData.acquired.toISOString(),
    //   [this.state.singleData.ceased]: this.state.singleData.ceased.toISOString()
    // }
    // this.state.singleData ? console.log (edData) : null
    return (
      <div className={mainContent}>
        {
          currentUser ? (
          <div className={dashbord}>
              {
                this.state.section_on ?
                <Section 
                  component={ this.state.component }
                  data={this.state.singleData}
                  removeHandler={ this.removeHandler }
                  renderEditor={ this.renderEditor }
                  updateHandler = {this.updateHandler}
                  closeSection= { this.closeSection }
                />
                : null
              }
              {
                this.state.edit ?
                  <EditForm 
                    data= {this.state.singleData}
                    updateHandler={ this.updateHandler }
                    component={ this.state.component }
                    edit = { this.state.edit }
                    renderEditor={ this.renderEditor }
                  />
                : null
              }
        
              <Route exact path="/assets" 
                render={
                  (props)=> <Assets { ...props }
                    data={ data.asset }
                    token={ this.getUserToken }
                    currentUser={ currentUser }
                    sumData={ this.sumData }
                    loadedComponent={ this.loadedComponent }
                    component={ this.state.compo }
                    removeData={ removeData }
                    fetchUserData={ fetchUserData }
                    createUserData={ createUserData }
                    updateUserData={ updateUserData }
                    removeUserData={ removeUserData }
                    closeSection= { this.closeSection }
                    getSingleData={ this.getSingleData }
                    renderForm={ this.renderForm}
                  />
                }
              />
              <Route  path="/commits" 
                render={
                  (props)=> <Commitments { ...props}
                    data={ data.commit }
                    token={this.getUserToken}
                    currentUser={currentUser}
                    sumData={this.sumData}
                    loadedComponent={ this.loadedComponent }
                    component={ this.state.component }
                    fetchUserData={ fetchUserData }
                    createUserData={ createUserData }
                    updateUserData={ updateUserData }
                    removeUserData={ removeUserData }
                    closeSection= { this.closeSection }
                    getSingleData={ this.getSingleData }
                    renderForm={ this.renderForm}
                  />
                } 
              />
              <Route  path="/networth" 
                render={
                  (props)=> <Networth { ...props}
                    data={ data }
                    fetchUserData={ fetchUserData }
                    token={this.getUserToken}
                    currentUser={currentUser}
                    getNetworth={getNetworth}
                    loadedComponent={ this.loadedComponent }
                  />
                } 
              />
            
            { 
              this.state.formOpen ?
                <Form 
                  submitHandler={ this.submitHandler }
                  component={ this.state.component }
                  renderForm = {this.renderForm}
                />
              : 
              this.state.component !== 'networth' ?  
                <i 
                  onClick={this.renderForm}
                  className={addIcon}></i> 
              : null 
            }
          </div>           
          ) : (
          <div className={authPage}>
            <div className={links} >
              <Link 
                onMouseDown={this.handleStyleChange}
                className={flexChild}
                id="signup"
                to={"/signup"}> Sign up </Link>
              <Link 
                onMouseDown={this.handleStyleChange}
                className={flexChild}
                id="login"
                to={"/auth/login"}> Login </Link>
            </div>               
            <Route exact path="/signup"
              render={
                (props)=> <Signup 
                  { ...props } 
                  toggleLogin       = { toggleLogin }
                  updateCurrentUser = { updateCurrentUser }
                  updateUid   = { updateUid }
                />
              }
            />
            <Route  path="/auth/login" 
              render={
                (props)=> <Login { ...props} 
                  updateCurrentUser={ updateCurrentUser } 
                  toggleLogin = { toggleLogin }
                  currentUser = { currentUser }
                  getUserData = { getUserData }
                  updateUid   = { updateUid }
                />
              } 
            /> 
          </div> 
          )
        }
      </div>
    );    
  } 
}


export default DashBoard;  
