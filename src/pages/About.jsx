import React from "react";

import Header from "@containers/Header";

import "@styles/about.css";

import pdf from "@pdf/CV_Alejandro_Salazar.pdf";

const About = () => {
    return (
        <section className="category__item category--about" id="about">            
            <h2 className="category__title">Can I help you?</h2>
            
            <p className="category__text">If you need to mock up, style, add interactivity, or create a front-end for your website, you've come to a good place.</p>
            
            <h2 className="category__title">A few words about me</h2>
            
            <p className="category__text">Like all creatives, I am always thinking about the best way to improve a website, constantly learning about topics that are eating away at my head and excited to generate knowledge on my own.</p>
            
            <p className="category__text">When I'm not reading, I'm elbowing. And when I'm not jogging, I'm spending time with loved ones or working out.</p>
            
            <div className="pdfContainer">
                <button className="pdfContainer__button" id="cvButton"><a href={pdf} target="_blank">Check CV</a></button>
            {/* <iframe class="pdfContainer__pdf hidden" id="pdfJsViewer" src="./assets/pdf/CV_Alejandro_Salazar.pdf" title="webviewer" frameborder="0"></iframe> */}
            </div>
        </section>
    )
}

export default About;