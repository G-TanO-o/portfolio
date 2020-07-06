import { createContext } from "react";
import DataStore from "../stores/DataStore";
import UiStore from "../stores/UiStore";

const store = {
    dataStore: new DataStore(),
    uiStore: new UiStore(),
};

store.dataStore.loadData();
window.store = store;
console.log(store);



export const storesContext = createContext(store);
 