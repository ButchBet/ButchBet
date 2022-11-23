import React from "react";

import PersonalImage from "@components/PersonalImage";
import Presentation from "@components/Presentation";
import Navigator from "@components/Navigator";

import "@styles/header.css";

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
                            <Navigator />
                        </div>
                    </div>

                    <Presentation />                    
                </div>
            </div>

            <PersonalImage />
        </div>
    )
}

export default Header;