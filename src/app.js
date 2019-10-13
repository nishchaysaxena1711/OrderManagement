import React from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';
import App from './containers/App.jsx';

console.log(validator.isEmail('test'));

ReactDOM.render(
	<App/>, 
	document.getElementById('app')
);