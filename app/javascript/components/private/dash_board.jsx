import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Assets from './assets';
import Commitments from './commitments';
import Networth from './networth';
import Logout from './logout';
import Login from '../login';
import Signup from '../signup';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      compo: null
    }    
  }
  updateCompo = (stuff) =>{
    this.setState({
      compo: stuff
    })
  }
  showMessage =(result)=>{
    console.log(result.message)
    this.setState({message: result.message})
  }
  
  sumData = (value) =>{
    const reducer = (accumulator, currentValue) =>
     accumulator + currentValue;
    const total  = value.reduce(reducer);
    return total 
  }

  networthCalc = () =>{
    const net = { assetTotal: [], commitTotal: []}
    if (this.state.asset && this.state.commits){
      this.state.asset.map((k, v) =>{
        net.assetTotal.push(k.amount)
      });
      this.state.commits.map((k, v) =>{
        net.commitTotal.push(k.amount)
      });
      console.log(net.assetTotal,net.commitTotal)
      return this.sumData( net.assetTotal) - this.sumData( net.commitTotal)
    }
    return false
  }
  getUserToken =() =>{
    return sessionStorage.getItem('token');
  }
  dashBoardCleaner=()=>{
    this.setState({});
    console.log("CLEANER", this.state)
  }
  handleChange = (e)=>{
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
  submitHandler = (data) =>{
    data['user_id'] = this.props.data[0].user_id;  
    this.fetchUserData("assets","POST", data);
    this.renderForm()
    console.log("Create", data)
  }
  renderForm = () => {
    this.setState({formOpen: !this.state.formOpen});
  }
  componentDidMount(){
    //this.props.currentUser ? this.props.getUserData() : console.log("skiped")
  }
  render() {
    const fetchUserData = this.props.fetchUserData;
    const submitHandler = this.submitHandler;
    const data = this.props.data;
    const currentUser= this.props.currentUser;
    const toggleLogin = this.props.toggleLogin;
    const updateCurrentUser = this.props.updateCurrentUser;
    const signedIn = this.props.signedIn;
    const getNetworth = this.networthCalc;
    const getUserData = this.props.getUserData;
    
    return (
      <div className='dashboard'>
        {
          currentUser ? (
          <div className="user_board">
            <Logout
              signedIn = { signedIn }
              toggleLogin={ toggleLogin }
              updateCurrentUser = { updateCurrentUser }
              user={ currentUser }
            />          
            <Switch>
              <Route exact path="/assets" 
                render={
                  (props)=> <Assets { ...props }
                    data={ data.asset }
                    fetchUserData={ fetchUserData }
                    token={ this.getUserToken }
                    currentUser={ currentUser }
                    sumData={ this.sumData }
                    updateCompo={ this.updateCompo }
                    component={ this.state.compo }
                  />
                }
              />
              <Route  path="/commits" 
                render={
                  (props)=> <Commitments { ...props}
                    data={ data.commit }
                    fetchUserData={ fetchUserData }
                    token={this.getUserToken}
                    currentUser={currentUser}
                    sumData={this.sumData}
                    updateCompo={ this.updateCompo }
                    component={ this.state.compo }
                  />
                } 
              />
              <Route  path="/networth" 
                render={
                  (props)=> <Networth { ...props}
                    data={ data.net }
                    fetchUserData={ fetchUserData }
                    token={this.getUserToken}
                    currentUser={currentUser}
                    getNetworth={getNetworth}
                  />
                } 
              />
            </Switch>
          </div>           
          ) : (
          <div className="login_signup">
            <div className="links">
              <Link 
                onMouseDown={this.handleChange}
                id="signup"
                to={"/signup"}> Sign up </Link>
              <Link 
                onMouseDown={this.handleChange}
                id="login"
                to={"/auth/login"}> Login </Link>
            </div>               
            <Route exact path="/signup"
              render={
                (props)=> <Signup 
                  { ...props } 
                  toggleLogin={ toggleLogin }
                  updateCurrentUser={ updateCurrentUser }
                />
              }
            />
            <Route  path="/auth/login" 
              render={
                (props)=> <Login { ...props} 
                  updateCurrentUser={ updateCurrentUser } 
                  toggleLogin={ toggleLogin }
                  currentUser={ currentUser }
                  getUserData={ getUserData } 
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
