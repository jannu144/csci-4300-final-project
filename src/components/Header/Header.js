import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div className='header'>
            <div className="logo-container">
                <img src="/Users/sanjanas./Desktop/mr-bean-ss/mr-bean/public/logo/Mr.Bean.png" alt="Mr.Bean!"/>
            </div>
            <div className="links">
                <ul>
                    <li><Link exact to="Home">Home</Link></li>
                    <li><Link exact to="SignUp">SignUp</Link></li>
                    <li><Link exact to="Login">Login</Link></li>
                    <li><Link exact to="Card">Card</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
