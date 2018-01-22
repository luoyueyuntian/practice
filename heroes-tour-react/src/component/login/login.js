import React, { Component } from 'react';

import LoginInput from './login-input';

export default class Login extends Component {
    render() {
        const { loginStatus, displayLogIn, login, logout } = this.props;
        let LoginInputComponent = null;
        if (!loginStatus) {
            LoginInputComponent = <LoginInput />;
        }
        const logInTip = displayLogIn ? <div className="log_in_tip">Trying to log in ...</div> : '';
        return (<div>
    		{LoginInputComponent}
            {logInTip}
			<div>
			    <button className="login-btn" disabled={loginStatus} onClick={login}>Login</button>
			    <button className="login-btn" disabled={!loginStatus}onClick={logout}>Logout</button>
			</div>
		</div>);
    }
}