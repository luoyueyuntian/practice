import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Login from './component/login';
import * as action from './action';
import './login.css';

class LoginContainer extends Component {
  render() {
    const { loginStatus, login, logout } = this.props;
    return (<Login 
    	loginStatus={loginStatus}
    	login={login}
    	logout={logout}
    	/>);
  }
}

const mapStateToProps = (state, ownProps) => ({
  loginStatus: state.isLogin
})
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(action, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);