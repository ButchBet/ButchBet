import React from "react";

import "@styles/navigator.css";

const Navigator = () => {
    return (
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                    <span className="sr-only">Title</span>
        
                    <img className="h-8 w-auto sm:h-10" src="https://cdn-icons-png.flaticon.com/512/2115/2115955.png" />
                    </a>
                </div>
            </div>
            
            <div className="categorySelector md:block md:ml-10 md:pr-4 md:space-x-8">
                <a href="about" className="font-medium text-gray-500 hover:text-gray-900" id="aboutSelector">About</a>
                
                <a href="projects" className="font-medium text-gray-500 hover:text-gray-900" id="porjectsSelector">Projects</a>
                
                <a href="contact" className="font-medium text-gray-500 hover:text-gray-900" id="contactSelector">Contact</a>
            </div>
        </nav>
    )
}

export default Navigator;