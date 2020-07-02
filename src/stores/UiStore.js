import { decorate, observable, action, configure } from "mobx";
configure({enforceActions: 'observed'});

class UiStore {
  constructor() {
    this.currentPage = "";
  }

  setCurrentPage = page => {
    this.currentPage = page;
  };
}

decorate(UiStore, {
  currentPage: observable,
  setCurrentPage: action
});

export default UiStore;
