import React from "react";

import Project from "@components/Project";

import useGetProjects from "@hooks/useGetProjects";

import "@styles/projects.css";

const Projects = () => {
    const API = "https://api.jsonbin.io/v3/b/637ddfa70e6a79321e528058";

    const projects = [];

    let req = new XMLHttpRequest();

    req.responseType = "json";

    req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {    
        const data = [];
        
        const jsonFile = req.response.record;
            
        for(let key in jsonFile) {
        data.push(jsonFile[key]);
        }
        
        projects = data;
    }
    };

    req.open("GET", API, true);
    req.setRequestHeader("X-Master-Key", "$2b$10$ALSeOGKYcSgxnYzrmo9vEeyKHBzUwRTSK2z06jrr6Rl9m3rjp3U7W");
    req.send();

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