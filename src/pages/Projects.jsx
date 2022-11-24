import React from "react";

import Project from "@components/Project";

import useGetProjects from "@hooks/useGetProjects";

import "@styles/projects.css";

const Projects = () => {
    const API = "https://api.jsonbin.io/v3/b/637ddfa70e6a79321e528058";


    const [projects, setProjects] = React.useState([]);

    useGetProjects(API, setProjects);

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