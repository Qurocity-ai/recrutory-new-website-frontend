import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from '../styles/Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const getLinkClass = (path) =>
        location.pathname === path ? `${Nav.active}` : '';

    return (
        <nav className={Nav.navbar}>
            <div className={Nav.navbar_brand}>
                <Link to="/">
                    <img src="src/assets/LogoQuriocity.jpg" alt="Logo" />
                </Link>
            </div>

            <div className={`${Nav.navbar_links} ${isMenuOpen ? `${Nav.open}` : ''}`}>
                <Link to="/" className={getLinkClass('/')}>Home</Link>
                <Link to="/product" className={getLinkClass('/product')}>
                    <img src="src/assets/QuriocityProduct.png" alt="Product" />
                </Link>
                <Link to="/globalinsights" className={getLinkClass('/globalinsights')}>Global</Link>
                <Link to="/blogs" className={getLinkClass('/blogs')}>Blogs</Link>
            </div>
            <button className={Nav.navbar_toggle} onClick={toggleMenu}>
                ☰
            </button>
        </nav>
    );
};

export default Navbar;
