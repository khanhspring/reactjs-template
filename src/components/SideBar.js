import React, { Component } from 'react';
import {Link} from "react-router-dom";

class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <nav className="sidebar-nav">
                    <ul>
                        <li>
                            <Link to='/admin/posts' className="nav-link">Post</Link>
                        </li>
                        <li>
                            <Link to='/admin/posts' className="nav-link">Category</Link>
                        </li>
                        <li>
                            <Link to='/admin/posts' className="nav-link">Page</Link>
                        </li>
                        <li>
                            <Link to='/admin/posts' className="nav-link">User</Link>
                        </li>
                        <li>
                            <Link to='/admin/posts' className="nav-link">System</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default SideBar;