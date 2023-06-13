import React from 'react'


import '../styles/index.css'


const Home = () => {

    const handleDownloadCV = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = '/public/Vigo, Reymart L. ( CV).pdf';
        downloadLink.click();
    }


    return (

        <div id="home-section" className="home-wrapper" >
            <div className="intro-wrapper" >
                <h1>FRONTEND <ion-icon name="code-outline"></ion-icon> <span >DEVELOPER</span> </h1>
                <button onClick={handleDownloadCV} aria-label="download-cv">DOWNLOAD CV<ion-icon name="code-download-outline"></ion-icon></button>
            </div>

            <div className="link-wrapper" >
                <ul>
                    <li key="linkedIn" ><a href="https://www.linkedin.com/in/reymart-vigo/" target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a></li>
                    <li key="github"><a href="https://github.com/reymartvigo" target='_blank'><ion-icon name="logo-github"></ion-icon></a></li>
                    <li key="twitter"><a href="https://twitter.com/reymart_vigo" target='_blank'><ion-icon name="logo-twitter"></ion-icon></a></li>
                </ul>
            </div>
        </div>

    )
}

export default Home