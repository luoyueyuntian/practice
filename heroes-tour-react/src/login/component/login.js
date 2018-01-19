import React, { Component } from 'react';

import LoginInput from './login-input';

export default class Login extends Component {
    render() {
        const { loginStatus, login, logout } = this.props;
        let LoginInputComponent = null;
        if (!loginStatus) {
            LoginInputComponent = <LoginInput />;
        }
        return (<div>
    		{LoginInputComponent}
			<div>
			    <button className="login-btn" disabled={loginStatus} onClick={login}>Login</button>
			    <button className="login-btn" disabled={!loginStatus}onClick={logout}>Logout</button>
			</div>
		</div>);
    }
}