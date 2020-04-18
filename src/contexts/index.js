import { createContext } from "react";
import DataStore from "../stores/DataStore";


const store = {
    dataStore: new DataStore(),
};

store.dataStore.loadData();
window.store = store;
console.log(store);



export const storesContext = createContext(store);
 