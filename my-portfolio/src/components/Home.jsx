import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import '../styles/index.css'


const Home = () => {


    const textRef = useRef(null);
    useEffect(() => {

        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: -100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.25,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 100%',
                }
            }
        )



    }, [])
    return (
        <div id="home-section" className="home-wrapper" ref={textRef}>
            <div className="intro-wrapper" >
                <h1>FRONTEND <ion-icon name="code-outline"></ion-icon> <span >DEVELOPER</span> </h1>
                <button aria-label="download-cv">DOWNLOAD CV <ion-icon name="code-download-outline"></ion-icon></button>
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