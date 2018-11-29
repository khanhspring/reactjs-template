import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {UserActions} from "../../containers/user/UserActions";
export default class PrivateLayout extends Component {

    render() {
        const Component = this.props.component;
        const route = this.props.route;
        const user = this.props.user;
        const userActions = this.props.userActions;

        return (
            <div>
                <header className="navbar navbar-expand navbar-dark bg-dark flex-column flex-md-row bd-navbar">
                    <a className="navbar-brand mr-0 mr-md-2" href="/" aria-label="Bootstrap">
                        ADMIN
                    </a>

                    <div className="navbar-nav-scroll">
                        <ul className="navbar-nav bd-navbar-nav flex-row">
                            <li className="nav-item">
                                <Link to='/admin' className="nav-link">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/user' className="nav-link">User</Link>
                            </li>
                        </ul>
                    </div>

                    <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                        <li className="nav-item">
                            <Link to='/admin' className="nav-link">{user.name}</Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-info my-2 my-sm-0" type="submit" onClick={() => {userActions.logout()}}>Logout</button>
                        </li>
                    </ul>
                </header>

                <div className="container-fluid admin-page-container">
                    <div className="row">
                        <div className="col-2 admin-page-sidebar">
                            <div>
                            </div>
                        </div>
                        <div className="col-10 admin-page-workspace">
                            <div>
                                <Component route={route}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}