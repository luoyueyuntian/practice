import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Hero, Crisis, Admin, Login, Compose } from './containers';

import { showContactPanel } from './redux/action';

class Home extends Component {
    render() {
        const { showContactPanel } = this.props;
        return (
          <Router>
            <div className="container">
              <h1>Hero tour</h1>
              <div className="main-nav-container">
                <nav className="nav-container">
                  <NavLink to="/hero" activeClassName="active">hero</NavLink>
                  <NavLink to="/crisis-center" activeClassName="active">crisis</NavLink>
                  <NavLink to="/admin" activeClassName="active">admin</NavLink>
                  <NavLink to="/login" activeClassName="active">login</NavLink>
                  <a onClick={showContactPanel}>Contact</a>
                </nav>
              </div>
              <div className="main">
                <Switch>
                    <Route path="/hero" component={Hero} />
                    <Route path="/crisis-center" component={Crisis} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/login" component={Login} />
                    <Route path="/compose" component={Compose} />
                    <Route exact path="/" component={Login} />
                  </Switch>
              </div>
              <div className="popup-container">
                <Compose />
              </div>
          </div>
          </Router>
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    router: state.router,
    showContact: state.showContact
})
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    showContactPanel
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);