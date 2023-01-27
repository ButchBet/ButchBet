import React from "react";

const useGetProjects = (API, setMethod) => {
    let req = new XMLHttpRequest();

    req.responseType = "json";

    req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {    
        const data = [];
        
        const jsonFile = req.response.record;
            
        for(let key in jsonFile) {
        data.push(jsonFile[key]);
        }

        data.sort((a, b) => a.id - b.id);
        
        setMethod(data);
    }
    };

    req.open("GET", API, true);
    req.setRequestHeader("X-Master-Key", "$2b$10$ALSeOGKYcSgxnYzrmo9vEeyKHBzUwRTSK2z06jrr6Rl9m3rjp3U7W");
    req.send();
}

export default useGetProjects;