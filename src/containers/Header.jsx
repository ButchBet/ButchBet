import React from "react";

import PersonalImage from "@components/PersonalImage";

const Header = () => {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    
                    <div>
                        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
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
                        </div>
                    </div>
                    
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Alejandro Salazar</span>
                            <span className="block xl:inline twitterUserName">@JustButchBet</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 category__text">
                            I am a web developer, self-learning oriented. I think that taking ownership of our learning is crucial and I share the idea with Jim Rohn: formal education will give you a way to make a living. Self-education will make you a fortune.</p>
                        </div>
                    </main>
                </div>
            </div>

            <PersonalImage />
        </div>
    )
}

export default Header;