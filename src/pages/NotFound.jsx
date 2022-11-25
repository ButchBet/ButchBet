import React from "react";

import "@styles/notFound.css";

import erro404 from "@images/404-error.svg"

const NotFound = () => {
    const [path, setPath] = React.useState("none");

    React.useEffect(() => {
        setPath(document.location.pathname);
    }, [])
    return (
        <div className="notFoundContainer">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900" id="categoryTitle">{path} not found</h2>
            
            <figure className="notFoundContainer__figure">
                <img src={erro404} alt="Error 404 image" className="notFoundContainer__img" />
            </figure>
        </div>
    )
}

export default NotFound;