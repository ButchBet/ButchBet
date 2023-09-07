import React from "react";

import "@styles/about.css";

import pdf from "@pdf/CV_Alejandro_Salazar.pdf";

const About = () => {
    return (
        <div className="aboutContainer">
            {/* <h2 className="text-2xl font-extrabold tracking-tight text-gray-900" id="categoryTitle">About</h2> */}

            <section className="category__item category--about" id="about">            
                <h2 className="category__title">Can I help you?</h2>
                
                <p className="category__text">If you need assistance with level 1 tech support tasks or want to design, style, add interactivity, or create a frontend for your website, you've come to the right place. I'm here to provide comprehensive solutions for your technical challenges and frontend development needs.</p>
                
                <h2 className="category__title">A few words about me</h2>
                
                <p className="category__text">Like all creatives, I am always thinking about learning in a deeper way, constantly learning about topics that are eating away at my head and excited to generate knowledge on my own.</p>
                
                <p className="category__text">Apart from web development, I like the field of tech support. I found it working in my last job, trying to find the best way to improve people's lives, with quick solutions and assertive answers.</p>
                
                <p className="category__text">When I'm not reading, I'm elbowing. And when I'm not jogging, I'm spending time with loved ones or working out.</p>
                
                <div className="pdfContainer">
                    <button className="pdfContainer__button" id="cvButton"><a href={pdf} target="_blank">Check CV</a></button>
                {/* <iframe class="pdfContainer__pdf hidden" id="pdfJsViewer" src="./assets/pdf/CV_Alejandro_Salazar.pdf" title="webviewer" frameborder="0"></iframe> */}
                </div>
            </section>
        </div>
    )
}

export default About;