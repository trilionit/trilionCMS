import React, {Component} from 'react';
import LoginPage from "./login/Index.jsx";
import "../css/style.css";
class MainLayout extends Component {
	render(){
		return(
		<div className="container">
			<LoginPage />
		</div>

		);
	}
}
export default MainLayout;