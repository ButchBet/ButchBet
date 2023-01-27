import React from "react";

import PersonalImage from "@components/PersonalImage";
import Presentation from "@components/Presentation";
import Navigator from "@components/Navigator";

import "@styles/header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header__first relative pt-6 px-4 sm:px-6 lg:px-8">
                <Navigator />
            </div>

            <div className="headerPresentation lg:px-8">
                <div className="headerPresentation__first">
                    <Presentation />                    
                </div>
                
                <PersonalImage />
            </div>
        </div>
    )
}

export default Header;