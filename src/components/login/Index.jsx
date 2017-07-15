import React, {Component} from "react";
import LoginForm from "./LoginForm.jsx";
//import ForgottenPassword from "./ForgottenPassword.jsx";

class LoginPage extends Component{
	render(){
		return(
			<div className="login" align="center">
				<LoginForm />
				
			</div>
		)
	}
}
export default LoginPage;