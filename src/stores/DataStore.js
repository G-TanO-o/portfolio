import {observable, action, decorate, configure} from 'mobx';
import Work from '../models/Work';

configure({enforceActions: 'observed'}); // plaats je best in de index.js of store.js ; wanneer je meerdere store.js hebt moet je in index.js zetten

class DataStore {

  constructor() {
    this.works = [];
    this.currentProfiel = undefined;
    this.hoverWork = undefined;
    this.loading = false;
  }

  
  selectWorkById = (id) => {
    if(this.works.length === 0){
    }
    return this.works.find(work => work.id === id);
  }

 
  loadData = async () => {
    this.setLoading(true);
    const response = await fetch("/data.json");
    const jsonData = await response.json();
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
