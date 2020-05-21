import React from "react"
import { useObserver } from "mobx-react-lite";

// import { Link } from "react-router-dom";

// import { useStores} from "../../hooks";

import styles from "./feed.module.css";

import Nav from "../Nav";
import Home from "../Home";
import Footer from "../Footer";

//useStore is miss niet nodig. check later


const Feed = () => {

    return useObserver( () => 
        <> 
        <div className={`${styles.grid_container}`}>
            
            <div className={`${styles.nav}`}>
            <Nav color="white"/>
            </div>
  
            

            <div className={`${styles.content}`}> 
                <Home/>
            </div>
            <div className={`${styles.footer}`}> 
                <h1>Contact</h1>
            </div>
                
        </div>
        </>
    )
    
}

export default Feed;