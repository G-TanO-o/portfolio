import React from "react"
import { useObserver } from "mobx-react-lite";

import { Link } from "react-router-dom";

import { useStores} from "../../hooks";

import styles from "./feed.module.css";

import Nav from "../Nav";
import Home from "../Home";

//useStore is miss niet nodig. check later


const Feed = () => {

    return useObserver( () => 
        <> 
            <Nav/>
            <Home/>
        </>
    )
    
}

export default Feed;