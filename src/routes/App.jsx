import React from "react";
import {BrowserRouter, Swtich, Route} from "react-router-dom";

import About from "@pages/About";
import Projects from "@pages/Projects";
import Contact from "@pages/Contact";
import NotFound from "@pages/NotFound";


import Layout from "@containers/Layout";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Swtich>
                    <Route exact path="/" component={About} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                    <Route path="*" component={NotFound} />
                </Swith>
            </Layout>
        </BrowserRouter>
    )
}