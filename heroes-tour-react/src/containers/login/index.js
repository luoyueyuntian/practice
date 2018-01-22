import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Login } from '../../component';
import { login, logout } from '../../redux/action';
import './login.css';

class LoginContainer extends Component {
    render() {
        const { loginStatus, displayLogIn, login, logout } = this.props;
        return (<Login
            loginStatus={loginStatus}
            displayLogIn={displayLogIn}
            login={login}
            logout={logout}
            />);
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