import React from 'react'

const Skills = () => {
    return (
        <>
            <div className='skills-wrapper'>

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