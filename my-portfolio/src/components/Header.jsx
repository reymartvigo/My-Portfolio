import React from 'react'
import { useState, useCallback } from 'react';

import '../styles/index.css';


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