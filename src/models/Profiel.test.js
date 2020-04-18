import Profiel from './Profiel';
import Dilemma from './Dilemma';
import DataStore from '../stores/DataStore';

test('Toevoegen aan favorieten', () => {
    const store = new DataStore();
    const profiel = new Profiel();
    store.addProfiel(profiel);

    const dilemma = new Dilemma({uitleg: 'frikandel of curryworst', keuze1: 'curryworst', keuze2: 'curryworst',thema: 'eten'});
    expect(profiel.favorieten.length).toBe(0);
    profiel.addToFav(dilemma);
    expect(profiel.favorieten.length).toBe(1);

});

