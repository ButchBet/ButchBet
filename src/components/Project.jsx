import React from "react";

import ProjectContext from "@context/ProjectContext";

import "@styles/project.css";

import github from "@images/github.svg";
import live from "@images/internet.png";
import html5 from "@images/html5.png";
import css from "@images/css3.png";
import javascript from "@images/javascript.png";
import bootstrap from "@images/bootstrap.png";
import webcomponents from "@images/webcomponents.png";
import reactjs from "@images/reactjs.png";
import webpack from "@images/webpack.png";

const Project = ({project}) => {
    const {goLeft, goRight} = React.useContext(ProjectContext);

    const [index, setIndex] = React.useState(0);

    // function setImage(name) {
    //     switch (name) {
    //         case "html5":
    //                 console.log("Html5 earned.")
    //                 return html5;
    //             break;

    //         // case "html5":
    //         //         return html5;
    //         //     break;
        
    //         default:
    //             break;
    //     }
    // }

    return (
        <div className="project">
            <h2 className="project__title">{project.title}</h2>
            
            <section className="project__images" title="project title">
                <img src={project.images[index]} className="project__img" alt="Image of the product" id="image" />
                
                <div className="project__move">
                
                    <div className="project__left" id="left" onClick={() => goLeft(project.images, index, setIndex)} >&lt;</div>
                
                    <div className="project__right" id="right" onClick={() => goRight(project.images, index, setIndex)} >&gt;</div>
                </div>
            </section>
            
            <p className="project__description">{project.description}</p>

            <section className="technologies">
                {
                    project.technologies.map((technology) => {
                        return (<img src={
                            technology.toLowerCase() === "html"
                            ? html5
                            : technology.toLowerCase() === "css"
                            ? css
                            : technology.toLowerCase() === "javascript"
                            ? javascript
                            : technology.toLowerCase() === "bootstrap"
                            ? bootstrap
                            : technology.toLowerCase() === "webcomponents"
                            ? webcomponents
                            : technology.toLowerCase() === "reactjs"
                            ? reactjs
                            : technology.toLowerCase() === "webpack"
                            ? webpack
                            : "Error"
                        } alt={`${technology} Icon`} className="technologies__item"  key={`item__${technology.toLowerCase()}`} title={technology} />)
                    })
                }
            </section>
            
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