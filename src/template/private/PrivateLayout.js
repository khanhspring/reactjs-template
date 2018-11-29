import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideBar from "../../components/SideBar";

export default class PrivateLayout extends Component {

    render() {
        const Component = this.props.component;
        const route = this.props.route;
        const user = this.props.user;
        const userActions = this.props.userActions;

        return (
            <div>
                <header className="navbar navbar-expand navbar-dark bg-dark flex-column flex-md-row bd-navbar">
                    <Link to='/admin' className="navbar-brand mr-0 mr-md-2">
                        ADMIN
                    </Link>

                    <div className="navbar-nav-scroll">
                        <ul className="navbar-nav bd-navbar-nav flex-row">
                            <li className="nav-item">
                                <Link to='/admin' className="nav-link">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link">Home</Link>
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

                <div className="admin-page-container">
                    <div className="admin-page-sidebar">
                        <SideBar />
                    </div>
                    <div className="admin-page-workspace">
                        <Component route={route}/>
                    </div>
                </div>
            </div>
        );
    }
}