import DataStore from './DataStore';
import Dilemma from '../models/Dilemma';
import Profiel from '../models/Profiel';


test('Testen array dilemmas', () => {
  const store = new DataStore();
  const d = new Dilemma({uitleg: 'frikandel of curryworst', keuze1: 'curryworst', keuze2: 'curryworst',thema: 'eten'})
  store.addDilemma(d);
  expect(store.dilemmas.length).toBe(1);
});

test('testing seed', () => {
  const store = new DataStore();
  store.seedStore();
  expect(store.dilemmas.length).toBe(5);
  expect(store.dilemmas[0].thema).toBe('eten');
  expect(store.currentProfiel.naam).toBe('gaetan');

});

test('Dilemma must have some content', () => {
  expect(() => new Dilemma({uitleg:''})).toThrow();
  expect(() => new Dilemma({thema:''})).toThrow();
});

test('Adding a profile', () => {
  const store = new DataStore();
  const profiel = new Profiel(test);
  expect(store.currentProfiel).toBe(undefined);
  store.addProfiel(profiel);
  expect(store.currentProfiel).toBe(profiel);
});

test('Testing selectDetailById', () => {
  const store = new DataStore();
  store.addDilemma({uitleg: 'frikandel of curryworst', keuze1: 'curryworst', keuze2: 'curryworst',thema: 'eten'});
  const id = store.dilemmas[0].id; 
  console.log(id);
  
  expect(store.dilemmas[0].id).toBe(id);
  expect(store.selectDetailById(id)).toBe(store.dilemmas[0]);
});

test('Testing setters', () => {
  const store = new DataStore();

  store.setKeuze1('test 1');
  store.setKeuze2('test 2');
  store.setUitleg('dit is een test');
  store.setThema('eten');

  const keuze1 = store.keuze1;
  const keuze2 = store.keuze2;
  const uitleg = store.uitleg;
  const thema = store.state.thema; 
  

  store.addDilemma({thema: thema, uitleg: uitleg, keuze1: keuze1, keuze2: keuze2})

  expect(store.dilemmas[0].keuze1).toBe('test 1');
  expect(store.dilemmas[0].thema).toBe('eten');

  // store.addProfiel(profiel);
  // expect(store.currentProfiel).toBe(profiel);
});

