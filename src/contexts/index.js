import { createContext } from "react";
import { configure } from "mobx";
import DataStore from "../stores/DataStore";

configure({ enforceActions: "observed" });



const store = {
    dataStore: new DataStore(),
};

store.dataStore.loadData();
window.store = store;
console.log(store);



export const storesContext = createContext(store);
 