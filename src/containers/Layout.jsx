import React from "react";

import Header from "@containers/Header";

import Footer from "@containers/Footer";

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header />

        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900" id="categoryTitle">About</h2>
                
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