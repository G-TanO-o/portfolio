import React from "react"
import { useObserver } from "mobx-react-lite";
import styles from "./feed.module.css";

import Nav from "../Nav";
import Home from "../Home";

const Feed = () => {

    return useObserver( () => 
        <> 
        <div className={`${styles.grid_container}`}>
            
            <div className={`${styles.nav}`}>
            <Nav color="black"/>
            </div>
            <div className={`${styles.content}`}> 
                <Home/>
            </div>     
        </div>
        </>
    )
    
}

export default Feed;