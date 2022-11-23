import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Layout from "@containers/Layout";

import About from "@pages/About";
import Projects from "@pages/Projects";
import Contact from "@pages/Contact";
import NotFound from "@pages/NotFound";


import "@styles/index.css";


const App = () => {
    return (
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
    )
}

export default App;