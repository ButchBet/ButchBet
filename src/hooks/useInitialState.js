import React from "react";

const initialState = {
    products: [],
}

const useInititalState = () => {
    const [title, setTitle] = React.useState('About');
    return {
        title,
        setTitle
    };
}

export default useInititalState;