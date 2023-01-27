import React from "react";

import Header from "@containers/Header";
import Footer from "@containers/Footer";

import AppContext from "@context/AppContext";

import "@styles/layout.css";

const Layout = ({children}) => {
    const {title} = React.useContext(AppContext);
    return (
        <div className="layout">
            <Header />

            <div className="bg-white layout__second">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">                
                    <section className="category" id="category">
                        {children}
                    </section>        
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Layout;