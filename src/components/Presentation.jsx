import React from "react";
import "@styles/presentation.css";

const Presentation = () => {
    return (
        <main className="main mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="main__first">
                <h1 className="name text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Alejandro Salazar</span>
                   
                    <span className="block xl:inline twitterUserName">@JustButchBet</span>
                </h1>
                
                <p className="presentation__text mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 category__text">
                    I am a web developer, self-learning oriented. I think that taking ownership of our learning is crucial and I share the idea with Jim Rohn: formal education will give you a way to make a living. Self-education will make you a fortune.
                </p>
            </div>
        </main>
    )
}

export default Presentation;