
import React from 'react'


import '../styles/index.css'

import CV from '../../public/Vigo, Reymart L. ( CV).pdf';
const Home = () => {

    return (
        <div id="home-section" className="home-wrapper" >
            <div className="intro-wrapper" >
                <h1>FRONTEND <span><ion-icon name="code-outline"></ion-icon>DEVELOPER</span> </h1>
                <a href={CV} target="_blank"> <button aria-label="download-cv">DOWNLOAD CV<ion-icon name="code-download-outline"></ion-icon></button>
                </a>
            </div>

            <div className="link-wrapper" >
                <ul>
                    <li key="linkedIn" ><a href="https://www.linkedin.com/in/reymart-vigo/" target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a></li>
                    <li key="github"><a href="https://github.com/reymartvigo" target='_blank'><ion-icon name="logo-github"></ion-icon></a></li>
                    <li key="twitter"><a href="https://twitter.com/reymart_vigo" target='_blank'><ion-icon name="logo-twitter"></ion-icon></a></li>
                </ul>

                <div className="arrow-wrapper">
                    <ion-icon name="arrow-down-outline"></ion-icon>
                </div>
            </div>
        </div>

    )
}

export default Home