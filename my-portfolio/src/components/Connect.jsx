import { useEffect } from 'react';

import React from 'react'
import Text from './Text';
import Aos from "aos";
import 'aos/dist/aos.css';
const Connect = () => {

    useEffect(() => {
        Aos.init
    }, [])

    return (
        <footer id="connect-section" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <h1>LET'S CONNECT</h1>

            <div className="connect-wrapper">
                <div className="connect">
                    <span>linkedIn</span>
                    <span key="linkedIn"><a href="https://www.linkedin.com/in/reymart-vigo/" target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a></span>

                </div>

                <div className="connect">
                    <span>github</span>
                    <span key="github"><a href="https://github.com/reymartvigo" target='_blank'><ion-icon name="logo-github"></ion-icon></a></span>

                </div>

                <div className="connect">
                    <span>twitter</span>
                    <span key="twitter"><a href="https://twitter.com/reymart_vigo" target='_blank'><ion-icon name="logo-twitter"></ion-icon></a></span>
                </div>
            </div>

            <div className="credits-to-owner">
                <p><span>&#169;</span> 2023, .karim ghamlouch portfolio</p>
                <p>Designed by <span className="designer">.karim</span></p>
            </div>

            <Text />
        </footer >
    )
}

export default Connect