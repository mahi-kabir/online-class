import React from 'react';
import updated from './updated.PNG'
import './Header.css'
const Header = () => {
    return (
        <div className =' header'>
            <img src={updated}  className = 'a' alt="" srcset=""/>
            <h1 className = 'a'>This is a collection of courses</h1>
            <nav>
                <a href="/shop">Courses</a>
                <a href="/review">Review orders</a>
                <a href="/manage">Manage Orders</a>
            </nav>
        </div>
    );
};

export default Header;