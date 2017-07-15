import React, {Component} from "react";

class ForgottenPassword extends{
	render(){
		return(
			<div id="ForgottenPassword">
				<form class="forgotten-password" action="ssc/password" method="post">
                	<input type="email" name="email" placeholder="Email Address" className="frm-ctn-input" id="email" required />
                	<input type="submit" name="submit" className="submit" value="Recover Password" id="submit">
                	<p className="p"><a href="#">Back to Login Page</a></p>
          		</form>
			</div>
		)
	}
}
export default ForgottenPassword;
