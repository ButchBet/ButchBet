import React from "react";

import "@styles/projects.css";

const Projects = () => {
    return (
        
        <section className="category__item category--projects" id="projects">
            <app-project filereference="./assets/server/json/projects.json" value={1} />
            <app-project filereference="./assets/server/json/projects.json" value={2} />
            <app-project filereference="./assets/server/json/projects.json" value={3} />
            <app-project filereference="./assets/server/json/projects.json" value={4} />
            <app-project filereference="./assets/server/json/projects.json" value={5} />
            <app-project filereference="./assets/server/json/projects.json" value={6} />
            <app-project filereference="./assets/server/json/projects.json" value={7} />
            <app-project filereference="./assets/server/json/projects.json" value={8} />
            <app-project filereference="./assets/server/json/projects.json" value={9} />
            <app-project filereference="./assets/server/json/projects.json" value={10} />
            <app-project filereference="./assets/server/json/projects.json" value={11} />
            <app-project filereference="./assets/server/json/projects.json" value={12} />
        </section>
    )
}

export default Projects;