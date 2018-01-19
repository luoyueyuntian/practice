import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router';

import Dashboard from './component/dashboard';
import CrisisManage from './component/crisis-manage';
import HeroManage from './component/hero-manage';
import MessageCenter from './component/message-center';

import './admin.css';

export default class Admin extends Component {
    render() {
        const { isLogin } = this.props;
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