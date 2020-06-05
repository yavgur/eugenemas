import React, {useEffect} from 'react'
import Material from 'materialize-css'

const Header = () => {
    useEffect(() => {
        Material.AutoInit();
    })
    return (
        <header>
        <div className="navbar-fixed">
            <nav className="blue ligten-3">
                <div className="container">
                    <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Eugene Islamic Center</a>
                    <a href="#!" data-target="mobile-nav" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="#events">Events</a>
                        </li>
                        <li>
                            <a href="#about">About Us</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
            </div>
            <ul className="sidenav" id="mobile-nav">
            <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="#events">Events</a>
                        </li>
                        <li>
                            <a href="#about">About Us</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
            </ul>
        </header>
    )
}

export default Header
