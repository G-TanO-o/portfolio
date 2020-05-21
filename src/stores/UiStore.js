import { decorate, observable, action } from "mobx";


class UiStore {
  constructor() {
    this.currentPage = 'feed';
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
