import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.css'
import { BrowserRouter } from "react-router-dom"
import DataStore from './stores/DataStore';

const store = new DataStore();

store.loadData();
console.log("dit is works from index.js", store.works);


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );

serviceWorker.unregister();
