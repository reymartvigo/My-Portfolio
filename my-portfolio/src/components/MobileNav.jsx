import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-scroll';

const MobileNav = ({ closeMenu }) => {

    MobileNav.propTypes = {
        closeMenu: PropTypes.func.isRequired,
    };
    const handleCloseMenu = () => {
        closeMenu();
    }


    return (
        <>
            <div className="mobile-nav">
                <button onClick={handleCloseMenu} aria-label="menu-close"><ion-icon name="close-outline"></ion-icon></button>
                <ul>
                    <li key="home" >
                        <Link activeClass="active" to="home-section" spy={true} smooth={true} offset={10} duration={500} onClick={handleCloseMenu}>
                            <span>.</span>Home
                        </Link>
                    </li>
                    <li key="about">
                        <Link activeClass="active" to="about-section" spy={true} smooth={true} offset={10} duration={500} onClick={handleCloseMenu}>
                            <span>.</span>About  </Link>
                    </li>

                    <li key="skills">
                        <Link activeClass="active" to="skills-section" spy={true} smooth={true} offset={10} duration={500} onClick={handleCloseMenu}><span>.</span>Skills</Link>
                    </li>
                    <li key="projects">
                        <Link activeClass="active" to="projects-section" spy={true} smooth={true} offset={10} duration={500} onClick={handleCloseMenu}>
                            <span>.</span>Projects
                        </Link>

                    </li>
                    <li key="connect">
                        <Link activeClass="active" to="connect-section" spy={true} smooth={true} offset={10} duration={500} onClick={handleCloseMenu}>
                            <span>.</span>Connect
                        </Link>

                    </li>
                </ul>
            </div >
        </>
    )
}

export default MobileNav