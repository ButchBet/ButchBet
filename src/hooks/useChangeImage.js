import React from "react";

const useChangeImage = () => {
    const goLeft = (images, index, setIndex) => {
        if(index === 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    const goRight = (images, index, setIndex) => {
        if(index === images.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    return {
        goLeft,
        goRight
    }
}

export default useChangeImage;