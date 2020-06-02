import {observable, action, decorate, configure} from 'mobx';
// import Dilemma from '../models/Dilemma';
// import Profiel from '../models/Profiel';
// import { v4 as uuidv4 } from 'uuid';

import Work from '../models/Work';

configure({enforceActions: 'observed'}); // plaats je best in de index.js of store.js ; wanneer je meerdere store.js hebt moet je in index.js zetten

class DataStore {

  constructor() {
    this.works = [];
    this.currentProfiel = undefined;
    this.hoverWork = undefined;
    console.log('datastore, set: check', this.hoverWork);
    this.loading = false;
  }

  

  selectWorkById = (id) => {
    if(this.works.length === 0){
      console.log('niets in de store');
    }
    return this.works.find(work => work.id === id);
  }

 
  loadData = async () => {
    this.setLoading(true);
    const response = await fetch("/data.json");
    const jsonData = await response.json();
    console.log("jresponse", response);
    console.log("json data", jsonData);
    jsonData.forEach(this.addWork);

    this.setLoading(false);
  };

  addWork = jsonWork => {
    this.works.push(new Work(jsonWork));
  };

  setLoading = value => {
    this.loading = value;
  };

  setHoverWork = work => {
    console.log('datastore, set', work);
    this.hoverWork = work;
  };
 
}

decorate(DataStore, {
  works: observable,
  loading: observable,
  hoverWork: observable, 
  addWork: action,
  seed: action,
  setLoading: action,
  setHoverWork: action, 
});

export default DataStore;
