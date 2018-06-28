import React from 'react'
import './signup.scss'


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
    let self = this
    e.preventDefault();
    let data = { user:{ 
      first_name: document.getElementById('first_name').value,
      last_name: document.getElementById('last_name').value,
      birth_date: document.getElementById('birth_date').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
      }
    };

    if(this.state.value === '' ){
      alert("Please type in details to register");

    } else { 

    console.log(this.state.value);
      fetch('/users', {
        method: "POST", 
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json; charset=UTF-8', mode: 'cors' },
        credentials: 'include'    
      })
      .then((res)=> res.json())
      .then((result) =>{ 
        if (result.status == 'ok') {
          self.props.updateCurrentUser(email);
          self.props.changePage("delete");
        }else{ console.log(result.errors)}
        })
      .catch(function(error){
        console.log(data)
      })
    }
  }

  
  render() {
    return (
      <div className="form form-signup">
        <a href="#" onClick={() => this.props.changePage("home")}>Home</a> 
        <h1>Sign-up</h1>
        <form onSubmit={this.handleSignup}>
          <div className="form-field ">
            <label>First name :
              <input value={this.state.first_name} onChange={this.handleChange}
              type="text" id="first_name" name="first_name" placeholder="First name"/>
            </label>
          </div><br />
          <div className="form-field">   
            <label>Last name :
            <input className="border" value={this.state.last_name} onChange={this.handleChange}
              type="text" id="last_name" name="last_name" placeholder="Lastname"/>
          </label>
          </div><br />
          <div className="form-field">     
            <label >Birth date :
            <input className="border" value={this.state.birth_date} onChange={this.handleChange}
              type="date" id="birth_date" name="birth_date" placeholder="Birth date"/>
          </label>
          </div><br />
          <div className="form-field">     
            <label>Email :
            <input className="border" value={this.state.email} onChange={this.handleChange}
              type="text" id="email" name="email" placeholder="Email"/>
          </label>
          </div><br />
          <div className="form-field">  
            <label >Password :
            <input className="border" value={this.state.password} onChange={this.handleChange}
              type="password" id="password" name="password" placeholder="Password"/>
          </label>
          </div><br />          
          <div className="form-field">     
            <label >Confirm password :
            <input className="border" value={this.state.password_confirmation} onChange={this.handleChange}
            type="password" id="password_confirmation" name="password_confirmation" placeholder="Retype paswword"/>
          </label>
          </div><br />
            <button className="btn-signup" onChange={this.handleSignup}>Create Account</button>
          <br/>
           <a href="#" onClick={() => this.props.changePage("login")}>Already have an account?</a> 
        </form>
        <br/>
         
      </div>
    );
  };
};

export default Signup