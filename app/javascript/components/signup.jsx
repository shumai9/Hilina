import React from 'react'

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: ''};
   
    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.errorHander  = this.errorHander.bind(this);
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  errorHander = (e) =>{
    e.preventDefault();
  }

  handleSignup =(e) => {
    e.preventDefault();
    let data = {
      user:{ 
        user_name: document.getElementById('user_name').value,
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      }
    };
    let pswd = document.getElementById('password_confirmation').value

    if(this.state.value === '' ){
      alert("Please type in details to register");
    } else {
      console.log(this.state.value);
      if(pswd === data.user.password ){
        fetch('/signup', {
          method: "POST", 
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json; charset=UTF-8', mode: 'cors' },
          credentials: 'include'    
        })
        .then((res)=> res.json())
        .then((result) =>{ 
          if (result.status == '200') {
            self.props.updateCurrentUser(email);
          }else{ console.log(result.errors)}
          })
        .catch(function(error){
          console.log(data)
        })    
      }
    }
  }
  
  render() {
    return (
      <div className="form form-signup">
        <form className="form-field " 
          onSubmit={this.handleSignup} >     
          <label>User Name 
            <input value={this.state.user_name} 
              onChange={this.handleChange}
              type="text" id="user_name" 
              name="user_name" 
              placeholder="User name"
            />
          </label>
            <label>First name 
              <input value={this.state.first_name} 
              onChange={this.handleChange}
              type="text" id="first_name" 
              name="first_name" 
              placeholder="First name"
            />
            </label>   
            <label>Last name</label>     
              <input value={this.state.last_name} 
                onChange={this.handleChange}
                type="text" id="last_name" 
                name="last_name" 
                placeholder="Last name"
              />
          <label>Email 
            <input className="border"
              value={this.state.email} 
              onChange={this.handleChange}
              type="text" id="email" name="email" 
              placeholder="Email"
            />
          </label>  
          <label >Password 
            <input value={this.state.password} 
              onChange={this.handleChange}
              type="password"
              id="password" 
              name="password"
              placeholder="Password"
            />
          </label>               
          <label >Confirm password 
            <input value={ this.state.password_confirmation }
              onChange={ this.handleChange }
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              placeholder="Retype password"
            />
          </label>
            <button className="btn-signup"
              onChange={this.handleSignup}>
               Create Account
            </button>
        </form> 
      </div>        
    );
  };
};

export default Signup