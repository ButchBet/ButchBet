import React from "react";

import Project from "@components/Project";

import "@styles/projects.css";

const Projects = () => {
    const project = {
        title: "JavaScript Practice",
        description: "This project was done to complete a course in Platzi, specifically the old JavaScript practical course. It is based on 4 modules: one of geometric shapes, another on percentages and discounts, another on the mean, median and mode and finally one on the mean and 10% of wages. This project was made with HTML, CSS, JavaScript, Bootstrap and web components.",
        id: 2,
        github: "https://github.com/ButchBet/JavaScript-Practice",
        live: "https://butchbet.github.io/JavaScript-Practice",
        images: [
            "@images/JavaScript Practice/main.png",
            // "@images/JavaScript Practice/geometricShapes1.png",
            // "@images/JavaScript Practice/geometricShapes2.png",
            // "@images/JavaScript Practice/geometricShapes3.png",
            // "@images/JavaScript Practice/geometricShapes4.png",
            // "@images/JavaScript Practice/medianMeanAndMode1.png",
            // "@images/JavaScript Practice/medianMeanAndMode2.png",
            // "@images/JavaScript Practice/salaryAnalysis1.png",
            // "@images/JavaScript Practice/salaryAnalysis2.png",
            // "@images/JavaScript Practice/salaryAnalysis3.png",
            // "@images/JavaScript Practice/salaryAnalysis4.png",
            // "@images/JavaScript Practice/percentagesAndDiscounts1.png",
            // "@images/JavaScript Practice/percentagesAndDiscounts2.png",
            // "@images/JavaScript Practice/percentagesAndDiscounts3.png",
            // "@images/JavaScript Practice/percentagesAndDiscounts4.png"
        ]
    }

    return (
        <section className="category__item category--projects" id="projects">
            <Project key={project.id} project={project} />
        </section>
    )
}

export default Projects;