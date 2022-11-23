import React from "react";

import ContactInfo from "@components/ContactInfo";
import Social from "@components/Social";

import "@styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <ContactInfo />

            <Social />
        </footer>
    )
}

export default Footer;