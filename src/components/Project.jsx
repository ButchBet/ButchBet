import React from "react";

import "@styles/project.css";

import github from "@images/github.svg";
import live from "@images/internet.png";
import image from "@images/JavaScript Practice/main.png";

const Project = ({project}) => {
    return (
        <div className="project">
            <h2 className="project__title">{project.title}</h2>
            
            <section className="project__images" title="project title">
                <img src={project.images[0]} className="project__img" alt="Image of the product" id="image" />
                
                <div className="project__move">
                
                <div className="project__left" id="left">&lt;</div>
            
                <div className="project__right" id="right">&gt;</div>
                </div>
            </section>
            
            <p className="project__description">{project.description}</p>
            
            <section className="project__choose">
                <figure className="icons">
                
                <a href={project.github} className="icon__access" target="_blank">
                    <img src={github} alt="GitHub icon" title="Go to check the code" className="icons__img" />
                </a>
                
                </figure>
            
                <figure className="icons">
                    <a href={project.live} className="icon__access" target="_blank">
                        <img src={live} alt="internet icon" title="Go to check the in live" className="icons__img" />
                    </a>
                </figure>
            </section>
        </div>
    )
}

export default Project;