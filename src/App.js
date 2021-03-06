import React from 'react';
import './App.css';
import {ROUTES} from "./consts";
import { Switch, Route } from "react-router-dom";
import 'mobx-react-lite/batchingForReactDom'
import Feed from './components/Feed';
import Projects from './components/Projects';
import About from './components/About';
import ProjectDetail from './components/ProjectDetail';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Switch>
          <Route path={ROUTES.projectDetail.path}>
            <ProjectDetail />
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
          <Route path="/" exact>
            <Feed />
          </Route>

      </Switch>
    </>
  );
}

export default App;
