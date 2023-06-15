import { useEffect } from "react";
import React from 'react'
import Aos from "aos";
import 'aos/dist/aos.css';
const ProjectItem = ({ image, title, link, skill1, skill2, skill3, skill4 }) => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="project-container" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
            <div className="image-wrapper">
                <img src={image} alt="" aria-hidden="true"></img>


                <div className="project-info">
                    <span>{title}</span>
                    <ul>
                        <li>{skill1}</li>
                        <li>{skill2}</li>
                        <li>{skill3}</li>
                        <li>{skill4}</li>
                    </ul>
                </div>
            </div>


            <div className="view-wrapper">
                <a href={link} target="_blank" >View <ion-icon name="arrow-forward-circle-outline"></ion-icon></a>
            </div>
        </div>
    )
}

export default ProjectItem