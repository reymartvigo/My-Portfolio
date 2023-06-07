import React from 'react'
import '../styles/index.css'
const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="intro-wrapper">
                <h1>FRONTEND <ion-icon name="code-outline"></ion-icon> <span>DEVELOPER</span> </h1>
                <button aria-label="download-cv">DOWNLOAD CV <ion-icon name="code-download-outline"></ion-icon></button>
            </div>

            <div className="link-wrapper">
                <ul>
                    <li key="linkedIn"><a href=""><ion-icon name="logo-linkedin"></ion-icon></a></li>
                    <li key="github"><a href=""><ion-icon name="logo-github"></ion-icon></a></li>
                    <li key="twitter"><a href=""><ion-icon name="logo-twitter"></ion-icon></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Home