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
    e.preventDefault();
    let self = this
    let data = {
      user: {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      }
    }
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
        alert('Invalid email or password', response.errors);
      }
    }).catch(function(error){})
  }

  render(){
    return(
      <div className="form form-login">
        <form onSubmit = { this.handleLogin }>
          <span className = "form-field">
              <input value = { this.state.email }
                  onChange = { this.handleChange }
                type="text" id="email" name="email" placeholder="Email"/>
          </span>
          <span className="form-field">
              <input value = { this.state.password }
                onChange = { this.handleChange } 
              type="password" id="password" name="password" placeholder="password"/>
          </span>
            <button className="btn-login"> Login </button>
        </form>
      </div>
    )
  }
}




export default Login;


