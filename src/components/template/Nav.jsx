/* eslint-disable import/no-anonymous-default-export */
import './Nav.css';
import React from 'react';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home"></i> Home
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Users
            </a>
        </nav>
    </aside>