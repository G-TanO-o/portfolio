import {observable, decorate, computed, action, configure} from 'mobx';

configure({enforceActions: 'observed'});

class Profiel {

  constructor(naam) {
    this.naam = naam; 
    this.favorieten = [];
  }

  
addToFav(dilemma) {
    return this.favorieten.push(dilemma)
  }

}

decorate(Profiel, {
  naam: observable,
  favorieten: observable,
  addToFav: action,
});

export default Profiel;
