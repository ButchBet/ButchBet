import React from "react";
import "@styles/personalImage.css";

const PersonalImage = () => {
    return (
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://i.ibb.co/Mpnx5tw/personal-Image.jpg" alt="Image of Alejandro" />
        </div>
    );
}

export default PersonalImage;