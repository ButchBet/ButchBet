import React from "react";

import Header from "@containers/Header";

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header />

            {children}
        </div>
    )
}

export default Layout;