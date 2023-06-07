import React from 'react'

const ProjectItem = ({ image, title, link, skill1, skill2, skill3, skill4 }) => {
    return (
        <div className="project-container">
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