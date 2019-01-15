import React from 'react'
import { BrowserRouter as Redirect} from 'react-router-dom';



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      access: false
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  handleLogin = (e) => {  
    e.preventDefault();
    let data = {
      user: {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
      }
    }
  
    console.log( this.state.value, "checked");
    
    fetch('/users/sign_in', {
      method: "POST", 
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json; charset=UTF-8', mode: 'cors' },
      credentials: 'include'
      })
      .then(res => res.json()).then((response) => {        
        if(response.email === this.state.value) {
          this.setState({access: true})
          this.props.toggleLogin()
          this.props.updateCurrentUser(response.email);
          
          console.log('this is login', response.email)          
          } else {
          alert('Invalid email or password', response.errors);
        }
    }).catch( e => { console.log('Login error',e)})
  } 

  render(){
    if (this.state.access){
      //I needed to make the to an object this wasted me 5hour of debug
      return <Redirect to="/" push={true} />
    }
    return(
      <span className="form form-login">
        <form onSubmit = { this.handleLogin }>
          <span className = "form-field">
              <input value = { this.state.email }
                  onChange = { this.handleChange }
                type="text" id="email" name="email" placeholder="Email"/>
          
              <input value = { this.state.password } 
              type="password" id="password" name="password" placeholder="Password"/>
          </span>
            <button className="btn-login"> Login </button>
        </form>
      </span>
    )
  }
}

export default Login;


