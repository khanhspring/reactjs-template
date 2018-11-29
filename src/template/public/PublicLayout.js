import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PublicLayout extends Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;
        const user  = this.props.user;
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link to='/' className="navbar-brand">React</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to='/' className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/blog' className="nav-link">Blog</Link>
                                </li>
                                { user.logged &&
                                <li className="nav-item">
                                    <Link to='/admin' className="nav-link">Admin</Link>
                                </li>
                                }
                                { !user.logged &&
                                <li className="nav-item">
                                    <Link to='/login' className="nav-link">Login</Link>
                                </li>
                                }
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <div className="main-wrap">
                    <Component route={route}/>
                </div>
                <footer>
                    <span>KhanhSpring - Copyright 2018</span>
                </footer>
            </div>
        );
    }
}