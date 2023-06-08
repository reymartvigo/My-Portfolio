import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Skills = () => {

    const componentRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(
                            entry.target,
                            { opacity: 0, x: -100 },
                            {
                                opacity: 1,
                                x: 0,
                                delay: 0.25,
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
            <div id="skills-section" className='skills-wrapper' ref={componentRef}>

                <h1><span>.</span>skills</h1>
                <ul className='skills-list'>
                    <li key="html">Html</li>
                    <li key="react">React Javascript</li>
                    <li key="js">JavaScript</li>
                    <li key="bootstrap">Bootstrap 5</li>
                    <li key="scss">SCSS - CSS Preprocessor</li>
                    <li key="css">Cascading Stylesheet</li>
                    <li key="git">Git/GitHub</li>
                    <li key="npm">npm</li>
                </ul>

                <ul className="skill-images">
                    <li key="html"><ion-icon name="logo-html5"></ion-icon></li>
                    <li key="react"><ion-icon name="logo-react"></ion-icon></li>
                    <li key="js"><ion-icon name="logo-javascript"></ion-icon></li>
                    <li key="css"><ion-icon name="logo-css3"></ion-icon></li>
                    <li key="scss"><ion-icon name="logo-sass"></ion-icon></li>
                    <li key="git"><ion-icon name="logo-github"></ion-icon></li>
                    <li key="npm"><ion-icon name="logo-npm"></ion-icon></li>
                </ul>

            </div>


        </>
    )
}

export default Skills