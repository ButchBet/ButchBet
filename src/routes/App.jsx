import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Layout from "@containers/Layout";

import About from "@pages/About";
import Projects from "@pages/Projects";
import Contact from "@pages/Contact";
import NotFound from "@pages/NotFound";

import AppContext from "@context/AppContext";

import useInitialState from "@hooks/useInitialState";

import "@styles/index.css";


const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/contact" component={Contact} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;