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
            <Nav color="black"/>
            </div>
  
            

            <div className={`${styles.content}`}> 
                <Home/>
            </div>
            {/* <Footer /> */}
                
        </div>
        </>
    )
    
}

export default Feed;