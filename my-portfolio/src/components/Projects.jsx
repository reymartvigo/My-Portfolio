import React from 'react'

import TodoImg from '../assets/react-todoapplication.netlify.app_.png';
import InteractiveCommentApp from '../assets/interactive-comment-section-reactjs.netlify.app_.png';
import CountdownTimer from '../assets/launch-countdowntimer.netlify.app_.png';
import AgeCalc from '../assets/age-calculator-application-frontend.netlify.app_.png';
import Calculator from '../assets/calculatorapplicationfrontend.netlify.app_.png';
import Advice from '../assets/advicegeneratorpage.netlify.app_.png'
import ProjectItem from './ProjectItem'
const Projects = () => {
    return (

        <div id="projects-section" className="projects-wrapper">
            <h1><span>.</span>Projects</h1>

            <div className="project">
                <ProjectItem
                    image={TodoImg}
                    title="Todo Application"
                    skill1="React + Vite"
                    skill2="Html"
                    skill3="Scss / Sass"
                    skill4="Mobile First"
                    link="https://react-todoapplication.netlify.app/"
                />

                <ProjectItem
                    image={InteractiveCommentApp}
                    title="Interactive Comment Section"
                    skill1="React + Vite"
                    skill2="Html"
                    skill3="Scss / Sass"
                    skill4="Mobile First"
                    link="https://interactive-comment-section-reactjs.netlify.app/"
                />

                <ProjectItem
                    image={CountdownTimer}
                    title="Launch Counter Timer"
                    skill1="React + Vite"
                    skill2="Html"
                    skill3="Scss / Sass"
                    skill4="Mobile First"
                    link="https://launch-countdowntimer.netlify.app//"
                />

                <ProjectItem
                    image={AgeCalc}
                    title="Age Calculator Application"
                    skill1="React + Vite"
                    skill2="Html"
                    skill3="Scss / Sass"
                    skill4="Mobile First"
                    link="https://age-calculator-application-frontend.netlify.app/"
                />

                <ProjectItem
                    image={Calculator}
                    title="Calculator Application"
                    skill1="JavaScript"
                    skill2="Html"
                    skill3="Scss / Sass"
                    skill4="Mobile First"
                    link="https://calculatorapplicationfrontend.netlify.app/"
                />

                <ProjectItem
                    image={Advice}
                    title="Advice Generator"
                    skill1="JavaScript"
                    skill2="Html"
                    skill3="Scss / Sass"
                    skill4="Mobile First"
                    link="https://advicegeneratorpage.netlify.app/"
                />

            </div>




        </div >

    )
}

export default Projects