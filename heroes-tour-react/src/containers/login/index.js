import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { LoginInput } from '../../component';
import { login, logout } from '../../redux/action';
import './login.css';

class LoginContainer extends Component {
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

const mapStateToProps = (state, ownProps) => ({
    loginStatus: state.isLogin,
    displayLogIn: state.displayLogIn
})
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    login,
    logout
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);