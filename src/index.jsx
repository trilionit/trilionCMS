import React from 'react';
import ReactDom from 'react-dom';

require('./css/style.css');
import App from './components/App.jsx';


	
ReactDom.render(
	<App />, document.getElementById('app')
);
