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
  }

  

  selectWorkById = (id) => {
    if(this.works.length === 0){
      console.log('niets in de store');
    }
    return this.works.find(work => work.id === id);
  }

 
  loadData = async () => {
    // this.setLoading(true);
    const response = await fetch("./data.json");
    const jsonData = await response.json();

    // 1 per 1
    jsonData.forEach(this.addWork);

    // this.setLoading(false);
  };

  addWork = jsonWork => {
    this.works.push(new Work(jsonWork));
  };

 
}

decorate(DataStore, {
  works: observable,
  addWork: action
});

export default DataStore;
