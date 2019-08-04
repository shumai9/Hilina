import React from 'react'
import { BrowserRoute as Route, Redirect} from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  handleLogin = (e) => {  
    e.preventDefault();
    let data = {
      user: {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      }
    }
    console.log( data.user, "checked");

    fetch('/auth/login', {
      method: "POST", 
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json; charset=UTF-8', mode: 'cors' },
      credentials: 'include'
    })
    .then(response => response.json())
    .then((result) => {        
      if(result.auth_token) {        
        this.props.toggleLogin()
        this.props.updateCurrentUser(data.user.email, result.auth_token);        
        console.log('this is login', result.auth_token)          
      } else {
        console.warn('Invalid email or password', result.errors.message);
      }
    }).catch( e => { console.log('Login error',e)})
  } 

  render(){
    const currentUser = this.props.currentUser;    
    return(
      currentUser ? (
        <Redirect push={true} to="/user/dashboard"
          render={
            (props)=> 
            <Dashboard { ...props} 
              updateCurrentUser = { updateCurrentUser } 
              toggleLogin={toggleLogin}
              currentUser={currentUser}
              signedIn = {signedIn}
            />
          } 
        />
      ) : (
        <div className="form form-login">
        <form onSubmit = { this.handleLogin }>
          <span className = "form-field">
            <input type="text" id="email" name="email" placeholder="Email"/>          
            <input type="password" id="password" placeholder="Password"/>
          </span>
            <button className="btn-login"> Login </button>
        </form>
      </div> 
      )      
    )
  }
}

export default Login;


