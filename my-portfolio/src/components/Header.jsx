import React from 'react'
import { useState, useCallback } from 'react';

import '../styles/index.css';

import { Link } from "react-scroll";


import MobileNav from './MobileNav';
const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const handleOpenMenu = useCallback(() => {
        setIsMenuOpen((prevState) => !prevState)
    }, []);



    return (
        <>
            <header>
                <h1><span>.</span>reymart</h1>

                <div className="menu-wrapper">
                    <button onClick={handleOpenMenu} aria-label="menu-open"><ion-icon name="menu-outline"></ion-icon></button>
                </div>

                <nav className="desktop-nav">
                    <ul>
                        <li>
                            <Link activeClass="active" to="home-section" spy={true} smooth={true} offset={10} duration={500}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="about-section" spy={true} smooth={true} offset={10} duration={500}>
                                About
                            </Link>
                        </li>

                        <li>
                            <Link activeClass="active" to="skills-section" spy={true} smooth={true} offset={10} duration={500}>
                                Skills
                            </Link>
                        </li>

                        <li>
                            <Link activeClass="active" to="projects-section" spy={true} smooth={true} offset={10} duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="connect-section" spy={true} smooth={true} offset={10} duration={500}>
                                Connect
                            </Link>
                        </li>
                    </ul>
                </nav>

                {isMenuOpen && (
                    <MobileNav
                        closeMenu={handleOpenMenu}
                    />
                )
                }
            </header>
        </>
    )
}

export default Header