import React from 'react'
import '../styles/index.css';
import coding from '../assets/coding.png'
const About = () => {
    return (
        <>
            <div className='about-wrapper'>
                <h1><span>.</span>about</h1>

                <div className='profile-wrapper'>
                    <img src={coding} alt="" aria-hidden="true"></img>

                    <div className="about-link-wrapper">
                        <ul>
                            <li key="linkedIn"><a href=""><ion-icon name="logo-linkedin"></ion-icon></a></li>
                            <li key="github"><a href=""><ion-icon name="logo-github"></ion-icon></a></li>
                            <li key="twitter"><a href=""><ion-icon name="logo-twitter"></ion-icon></a></li>
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