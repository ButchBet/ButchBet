import React from "react";
import "@styles/personalImage.css";

const PersonalImage = () => {
    return (
        <figure className="personalImage mx-auto max-w-7xl px-4 sm:px-6lg:px-8">
            <img className="personalImage__img" src="https://i.postimg.cc/KYzBGybD/photo-2023-02-01-16-57-46.jpg" alt="Image of Alejandro" />
        </figure>
    );
}

export default PersonalImage;