import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Layout from "@containers/Layout";

import About from "@pages/About";
import Projects from "@pages/Projects";
import Contact from "@pages/Contact";
import NotFound from "@pages/NotFound";

import AppContext from "@context/AppContext";
import ProjectContext from "@context/ProjectContext";

import useInitialState from "@hooks/useInitialState";
import useChangeImage from "@hooks/useChangeImage";

import "@styles/index.css";


const App = () => {
    const initialState = useInitialState();
    const changeImage = useChangeImage();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={About} />

                        <Route exact path="/about" component={About} />
                        
                        <ProjectContext.Provider value={changeImage}>
                            <Route exact path="/projects" component={Projects} />
                        </ProjectContext.Provider>

                        <Route exact path="/contact" component={Contact} />
                        
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;