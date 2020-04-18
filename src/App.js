import React from 'react';

import './App.css';

// zorgt ddat als er iets moet aanpassen dit kan gebeuren in de return
import { useObserver } from 'mobx-react-lite'; 

import {ROUTES} from "./consts";
import { Switch, Route, Redirect } from "react-router-dom";

import Feed from './components/Feed';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import Menu from './components/Menu';



function App() {
  return (
    <>
      <Switch>
          <Route path={ROUTES.projectDetail.path}>
            <ProjectDetail />
          </Route>
          <Route path={ROUTES.contact}>
            <Contact />
          </Route>
          <Route path={ROUTES.about}>
            <About />
          </Route>
          <Route path={ROUTES.projects}>
            <Projects />
          </Route>
          <Route path={ROUTES.menu}>
            <Menu />
          </Route>
          <Route path={ROUTES.feed} exact>
            <Feed />
          </Route>

      </Switch>
    </>
  );
}

export default App;
