import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

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
                    <li key="home"><span>.</span>Home</li>
                    <li key="about"><span>.</span>About</li>
                    <li key="skills"><span>.</span>Skills</li>
                    <li key="projects"><span>.</span>Projects</li>
                </ul>

            </div>
        </>
    )
}

export default MobileNav