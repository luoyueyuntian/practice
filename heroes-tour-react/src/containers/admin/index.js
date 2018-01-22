import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router';

import Dashboard from '../dashboard/dashboard';
import CrisisManage from '../crisis-manage/crisis-manage';
import HeroManage from '../hero-manage/hero-manage';
import MessageCenter from '../message-center/message-center';

import './admin.css';

class Admin extends Component {
    render() {
        return (
            <div>
        		<nav className="manage-nav-container">
        			<NavLink to="/admin/dashboard" activeClassName="active">Dashboard</NavLink>
					<NavLink to="/admin/crisis-manage" activeClassName="active">CrisisManage</NavLink>
					<NavLink to="/admin/hero-manage" activeClassName="active">HeroManage</NavLink>
					<NavLink to="/admin/message-center" activeClassName="active">MessageCenter</NavLink>
        		</nav>
        		<Switch>
	        		<Route path="/admin/dashboard" component={Dashboard} />
	                <Route path="/admin/crisis-manage" component={CrisisManage} />
	                <Route path="/admin/hero-manage" component={HeroManage} />
	                <Route path="/admin/message-center" component={MessageCenter} />
        			<Redirect extra to="/admin/dashboard" />
                </Switch>
        	</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    isLogin: state.isLogin
})
export default connect(mapStateToProps)(Admin);