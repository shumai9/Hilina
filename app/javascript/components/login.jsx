import React from 'react'
import './login.scss'



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleLogin = (e) => {
    let self = this
    let data = {
      user: {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      }
    }
    e.preventDefault();
    fetch('/users/sign_in', {
      method: "POST", 
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json; charset=UTF-8', mode: 'cors' },
      credentials: 'include'
    }).then(res => res.json()).then((response) => {        
      if(response.email){
        self.props.changePage("delete");
        self.props.updateCurrentUser(response.email);
      } else {
        alert('Sign in was not succesful', response.errors);
      }
    }).catch(function(error){
      
    })
  }

  render(){
    return(
      <div className="form form-login">
        <h2>Login</h2>
        <form  onSubmit={this.handleLogin} >
          <div className="form-field">
            <label name="email">Email :</label>
            <input value={this.state.email} onChange={this.handleChange}
            type="text" id="email" name="email" placeholder="Email"/>
          </div>
          <br/>
          <div className="form-field">           
            <label name="email"> Password :</label>
            <input value={this.state.password} onChange={this.handleChange}
            type="password" id="password" name="password" placeholder=""/>
          </div>
          <br/>          
            <button className="btn-login">Login</button>
        </form>
        <br/>
          <button className="btn-new" onClick={
            () => this.props.changePage("signup")
            }> No account? Signup </button>
      </div>
    )
  }
}




export default Login;


