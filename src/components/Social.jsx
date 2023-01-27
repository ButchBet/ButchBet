import React from "react";

import "@styles/social.css";

import facebook from "@images/facebook.png";
import twitter from "@images/twitter.png";
import linkedin from "@images/linkedin.png";
import instagram from "@images/instagram.png";

const Social = () => {
    return (
        <ul className="footer__list footer--row">
            <li className="footer__item footer--lessWidth">
                <a href="https://www.facebook.com/kevin.salazar.50596013/" className="footer__access" target="_blank">
                    <img src={facebook} alt="Facebook Icon" className="footer__img" />
                </a>
            </li>
        
            <li className="footer__item footer--lessWidth">
                <a href="https://twitter.com/JustButchBet" className="footer__access" target="_blank">
                    <img src={twitter} alt="Twitter Icon" className="footer__img" />
                </a>
            </li>
        
            <li className="footer__item footer--lessWidth">
                <a href="https://www.linkedin.com/in/k-alejandro-salazar/" className="footer__access" target="_blank">
                    <img src={linkedin} alt="Linkedin Icon" className="footer__img" />
                </a>
            </li>
        
            <li className="footer__item footer--lessWidth">
                <a href="https://www.instagram.com/alejandro._.salaz.10/" className="footer__access" target="_blank">
                    <img src={instagram} alt="Instagram Icon" className="footer__img" />
                </a>
            </li>
        </ul>
    )
}

export default Social;