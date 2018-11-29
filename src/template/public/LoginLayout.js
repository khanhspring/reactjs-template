import React, { Component } from 'react';

export default class LoginLayout extends Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;
        const user  = this.props.user;
        return (
            <div className="login-wrap">
                <Component route={route}/>
            </div>
        );
    }
}