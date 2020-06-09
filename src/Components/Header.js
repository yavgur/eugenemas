import React, {useEffect} from 'react'
import Material from 'materialize-css'
import '../styles/style.css'

const Header = () => {
    useEffect(() => {
        Material.AutoInit();
    })
    return (
        <header>
            <nav className="nav-wrapper transparent">
                <div className="container">
                    <a href="/" className="brand-logo" id="logo" >Eugene Islamic Center</a>
                    <a href="#!" data-target="mobile-nav" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down" id="menu-items">
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
            </nav>
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
