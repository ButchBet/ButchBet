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
                I am a versatile tech support and software developer dedicated to providing effective solutions for your technical needs. In this constantly evolving technological landscape, I wholeheartedly embrace ongoing learning to provide you with comprehensive support. My goal is to not only resolve issues but also elevate your digital experiences, ensuring a seamless and enriched journey through the digital realm.
                </p>
            </div>
        </main>
    )
}

export default Presentation;