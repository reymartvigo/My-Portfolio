import React from 'react'
import '../styles/index.css';
import coding from '../assets/coding.png'


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const About = () => {

    const componentRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(
                            entry.target,
                            { opacity: 0, y: 100 },
                            {
                                opacity: 1,
                                y: 0,
                                delay: 1,
                                duration: 1,
                            }
                        );
                        observer.unobserve(entry.target); // Stop observing once the component is visible
                    }
                });
            },
            { threshold: 0.1 } // Adjust the threshold as per your requirements
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            observer.disconnect(); // Clean up the observer when the component unmounts
        };
    }, []);
    return (
        <>
            <div id="about-section" className='about-wrapper' ref={componentRef}>
                <h1><span>.</span>about</h1>

                <div className='profile-wrapper'>
                    <img src={coding} alt="" aria-hidden="true"></img>

                    <div className="about-link-wrapper">
                        <ul>
                            <li key="linkedIn"><a href="https://www.linkedin.com/in/reymart-vigo/" target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a></li>
                            <li key="github"><a href="https://github.com/reymartvigo" target='_blank'><ion-icon name="logo-github"></ion-icon></a></li>
                            <li key="twitter"><a href="https://twitter.com/reymart_vigo" target='_blank'><ion-icon name="logo-twitter"></ion-icon></a></li>
                        </ul>
                    </div>
                </div>

                <div className="info-wrapper">
                    <p>
                        Hi ! I'm <span>Reymart</span>,
                        I am a highly patient, passionate, and dedicated individual with a strong commitment to integrity and excellence. With a positive attitude and a solutions-oriented mindset, I consistently strive to overcome challenges and deliver optimal outcomes. As a student, I have gained valuable experiences in effectively managing time and successfully working under pressure to meet demanding academic requirements.
                    </p>

                    <p>
                        I have also obtained certifications in Responsive Web Design and JavaScript Algorithms and Data Structures, showcasing my dedication to expanding my knowledge and skills. Additionally, I possess a National Certificate 2 in Computer System Servicing and have completed the JobReady modules offered by the esteemed Wadhwani Foundation.
                    </p>

                    <p> I employ a systematic approach that involves thorough research, leveraging established best practices, and executing appropriate strategies. Although my professional accomplishments are currently in development, my robust educational background, certifications, and versatile skill set position me to make meaningful contributions within a professional environment.</p>
                </div>

                <div className='course-wrapper'>
                    <h3>COURSE : <span>BS INFORMATION TECHNOLOGY</span></h3>
                </div>

            </div >
        </>
    )
}

export default About