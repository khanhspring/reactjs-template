import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import _ from 'lodash';

import PrivateLayout from './private/PrivateLayout';

import privateRoutes from './routes/privateRoutes';
import publicRoutes  from './routes/publicRoutes';
import sessionRoutes from './routes/sessionRoutes';

import { UserActions } from '../containers/user/UserActions';
import Login from '../containers/Login';
import NotFound from './public/NotFound';
import LoginLayout from "./public/LoginLayout";
import PublicLayout from "./public/PublicLayout";

class Template extends Component {

    constructor(props) {
        super(props);
        this.userActions = new UserActions(this.props.dispatch);
     }

    componentWillMount() {
        this.userActions.verify();
    }

    render() {
        const user = this.props.user;
        if (!user.verified) { return(<div>Loading...</div>); }
        return (
        <BrowserRouter>
            <Switch>

                { _.map(publicRoutes, (route, key) => {
                    const { component, path } = route;
                    return (
                        <Route
                            exact
                            path={path}
                            key={key}
                            render={ (route) => <PublicLayout component={component} route={route} user={user}/>}
                        />
                    )
                }) }

                { _.map(privateRoutes, (route, key) => {
                    const { component, path } = route;
                    return (
                        <Route
                            exact
                            path={path}
                            key={key}
                            render={ (route) =>
                                user.logged ? (
                                <PrivateLayout component={component} route={route} user={user} userActions={this.userActions} />
                                ) : (
                                <LoginLayout component={Login} route={route} user={user}/>
                                )
                            }
                        />
                    )
                }) }

                { _.map(sessionRoutes, (route, key) => {
                    const { component, path } = route;
                    return (
                        <Route
                            exact
                            path={path}
                            key={key}
                            render={ (route) =>
                                user.logged ? (
                                    <Redirect to="/admin"/>
                                ) : (
                                    <LoginLayout component={component} route={route} user={user}/>
                                )
                            }
                        />
                    )
                }) }

                <Route component={ NotFound } />
            </Switch>
        </BrowserRouter>
        );
    }
}

function mapStateToProps(state, props) { return { user: state } }
function mapDispatchToProps(dispatch) { return { dispatch }; }

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(Template);
