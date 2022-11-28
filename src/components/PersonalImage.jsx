import React from "react";
import "@styles/personalImage.css";

const PersonalImage = () => {
    return (
        <figure className="personalImage mx-auto max-w-7xl px-4 sm:px-6lg:px-8">
            <img className="personalImage__img" src="https://i.ibb.co/Mpnx5tw/personal-Image.jpg" alt="Image of Alejandro" />
        </figure>
    );
}

export default PersonalImage;