import React from 'react'



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
    let data = {
      user: {
        email: e.target.value,
        password: e.target.value
      }
    }
    e.preventDefault();
    fetch('api/v1/users/', {
      method: 'post',
      header: 'Content-Type: application/json',
      body: JSON.stringify(data),
      credentials: 'same-origin'
    })
    .then((response) =>{
      self.props.changePage("delete");
      self.props.updateCurrentUser(email);
    })
    .catch(function(error){
      console.log(error)
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
            <button >Submit</button>
        </form>
        <br/>
        <button onClick={() => this.props.changePage("signup")}>New here Signup</button>
      </div>
    )
  }
}

export default Login;


