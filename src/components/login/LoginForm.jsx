import React, {Component} from "react";

class LoginForm extends{
	render(){
		return(
			<div className="frm-ctn">
				<form action="ssc/login" className="sign-in" id="ta-login">
					<div id="errorHeadline"></div>
				</form>
			</div>
		)
	}
}
export default LoginForm;
