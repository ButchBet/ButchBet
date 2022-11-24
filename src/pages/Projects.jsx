import React from "react";

import Project from "@components/Project";

import useGetProjects from "@hooks/useGetProjects";

import projectsFromServer from "@server/json/projects.json";

import "@styles/projects.css";

const Projects = () => {
    const projects = [];
    
    for(let key in projectsFromServer) {
        projects.push(projectsFromServer[key]);
    }

    projects.sort((a, b) => a.id - b.id);

    console.log(projects);
    return (
        <section className="category__item category--projects" id="projects">
            {projects.map((project) => {
                return (
                    <Project key={project.id} project={project} />
                )
            })}
        </section>
    )
}

export default Projects;