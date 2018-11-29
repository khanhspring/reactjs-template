import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserActions } from './UserActions';
import {Link} from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);
        this.action = new UserActions(this.props.dispatch);
        // This binding is necessary to make `this` work in the callback
        this.loginClick = this.loginClick.bind(this);
    }

    loginClick() {
        this.action.login();
    }

    render() {
        return(
            <div className="container">
                <div className="login-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.loginClick}>Login</button>
                    </form>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state, props) { return { user: state } }
function mapDispatchToProps(dispatch) { return { dispatch }; }

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
