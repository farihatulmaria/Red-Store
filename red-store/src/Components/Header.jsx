import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.png';
const Header = () => {
    const menuItems = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={"/products"}>Products</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
        <li><NavLink to={"/profile"}>Profile</NavLink></li>
        <li><NavLink to={"/cart"}><FontAwesomeIcon icon={faShoppingBag} /></NavLink></li>
    </>
    return (
        <header className='my-3 mx-4'>
            <nav className="navbar bg-base-100 items-center">
                <div className="navbar-start">
                    <a href="/" className="btn btn-ghost normal-case text-xl">
                        <img src={logo} alt="" width={'200px'}/>
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-primary text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {menuItems}
                        </ul>
                    </div>
                    
                </div>
            </nav>  
        </header>
    );
};

export default Header;