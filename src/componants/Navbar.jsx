import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "../styles/Navbar.module.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);
    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsSubMenuOpen(false);
    };

    const getLinkClass = (path) =>
        location.pathname.startsWith(path) ? `${Nav.active}` : "";

    return (
        <nav className={Nav.navbar}>
            <div className={Nav.navbar_brand}>
                <Link to="/" onClick={closeMenu}>
                    <img
                        src="src/assets/Recrutory Logo 2 (1).png"
                        alt="Logo"
                        style={{ width: "200px" }}
                    />
                </Link>
            </div>

            <div
                className={`${Nav.navbar_links} ${isMenuOpen ? `${Nav.open}` : ""}`}
            >
                <Link to="/" className={getLinkClass("/")} onClick={closeMenu}>
                    Home
                </Link>
                <Link
                    to="/product"
                    className={getLinkClass("/product")}
                    onClick={closeMenu}
                >
                    <img
                        src="src/assets/QuriocityProduct.png"
                        alt="Product"
                        style={{ width: "80px", height: "auto" }}
                    />
                </Link>
                <div className={Nav.navbar_dropdown}>

                    <Link to="/globalinsights" className={`${Nav.dropdown_toggle} ${getLinkClass(
                        "/globalinsights"
                    )}`}
                        onClick={toggleSubMenu} >
                        Global Insights
                    </Link>
                    <div
                        className={`${Nav.submenu} ${isSubMenuOpen ? `${Nav.open}` : ""
                            }`}
                    >
                        <Link
                            to="/trends"
                            className={getLinkClass("/globalinsights/trends")}
                            onClick={closeMenu}
                        >
                            Trends
                        </Link>
                        <Link
                            to="/industries"
                            className={getLinkClass("/globalinsights/industries")}
                            onClick={closeMenu}
                        >
                            Industries
                        </Link>
                    </div>
                </div>
                <Link to="/blogs" className={getLinkClass("/blogs")} onClick={closeMenu}>
                    Blogs
                </Link>
            </div>

            <button className={Nav.navbar_toggle} onClick={toggleMenu}>
                ☰
            </button>
        </nav>
    );
};

export default Navbar;
