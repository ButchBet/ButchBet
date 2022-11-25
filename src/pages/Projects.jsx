import React from "react";

import Project from "@components/Project";

import useGetProjects from "@hooks/useGetProjects";
import useChangeImage from "@hooks/useChangeImage";

import projectsFromServer from "@server/json/projects.json";

import ProjectContext from "@context/ProjectContext";


import "@styles/projects.css";

const Projects = () => {
    const changeImage = useChangeImage();

    const projects = [];
    
    for(let key in projectsFromServer) {
        projects.push(projectsFromServer[key]);
    }

    projects.sort((a, b) => a.id - b.id);
    return (
        
        <ProjectContext.Provider value={changeImage}>
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900" id="categoryTitle">Projects</h2>
            
            <section className="category__item category--projects" id="projects">
                {projects.map((project) => {
                    return (
                        <Project key={project.id} project={project} />
                    )
                })}
            </section>
        </ProjectContext.Provider>
    )
}

export default Projects;