import { useEffect } from 'react';
import React from 'react'
import Aos from "aos";
import 'aos/dist/aos.css';
const Skills = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <>
            <div id="skills-section" className='skills-wrapper'>

                <h1 data-aos="fade-down"><span>.</span>skills</h1>
                <ul className='skills-list'>
                    <li data-aos="fade-up" key="html">Html</li>
                    <li data-aos="fade-up" key="react">React Javascript</li>
                    <li data-aos="fade-up" key="js">JavaScript</li>
                    <li data-aos="fade-up" key="bootstrap">Bootstrap 5</li>
                    <li data-aos="fade-up" key="scss">SCSS - CSS Preprocessor</li>
                    <li data-aos="fade-up" key="css">Cascading Stylesheet</li>
                    <li data-aos="fade-up" key="git">Git/GitHub</li>
                    <li data-aos="fade-up" key="npm">npm</li>
                </ul>

                <ul className="skill-images">
                    <li data-aos="fade-down" data-aos-delay="500" key="html"><ion-icon name="logo-html5"></ion-icon></li>
                    <li data-aos="fade-down" data-aos-delay="600" key="react"><ion-icon name="logo-react"></ion-icon></li>
                    <li data-aos="fade-down" data-aos-delay="700" key="js"><ion-icon name="logo-javascript"></ion-icon></li>
                    <li data-aos="fade-down" data-aos-delay="800" key="css"><ion-icon name="logo-css3"></ion-icon></li>
                    <li data-aos="fade-down" data-aos-delay="900" key="scss"><ion-icon name="logo-sass"></ion-icon></li>
                    <li data-aos="fade-down" data-aos-delay="1000" key="git"><ion-icon name="logo-github"></ion-icon></li>
                    <li data-aos="fade-down" data-aos-delay="1100" key="npm"><ion-icon name="logo-npm"></ion-icon></li>
                </ul>

            </div>


        </>
    )
}

export default Skills