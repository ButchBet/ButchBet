import React from "react";

const useChangeImage = () => {
    const goLeft = (images, index, setIndex) => {
        console.log(index)

        if(index === 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(index - 1);
        }

        console.log(index)
    }

    const goRight = (images, index, setIndex) => {
        console.log(index)

        if(index === images.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
        
        console.log(index)
    }

    return {
        goLeft,
        goRight
    }
}

export default useChangeImage;