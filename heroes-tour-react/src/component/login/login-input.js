import React, { Component } from 'react';

export default class LoginInput extends Component {
    render() {
        return (
            <ul className="login-container">
		        <li className="login-form">
		            <span className="login-label">Username:</span>
		            <input type="text" placeholder="please input you name" />
		        </li>
		        <li className="login-form">
		            <span className="login-label">Password:</span>
		            <input type="text" placeholder="please input password" />
		        </li>
		    </ul>
        );
    }
}