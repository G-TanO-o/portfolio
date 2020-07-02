import React from "react"
import { useObserver } from "mobx-react-lite";


import { Link } from "react-router-dom";

import { NavLink} from "react-router-dom";

import {ROUTES} from "../../consts";

import styles from "../Home/home.module.css";
import { useStores } from "../../hooks";



const Home = () => {
    return useObserver( () => 
        <>
            <article className={`${styles.home_content}`}>
                {/* <div className={`${styles.video_overflow}`}> */}
                <video className={`${styles.blob}`} autoPlay muted loop src={"../assets/img/blob.mp4"} width="2000"></video>
                {/* </div> */}
            
            <div className={`${styles.content}`}>
                <h1 className={`${styles.hi}`}>Hi,</h1>
                <p className={`${styles.name}`}>My name is Gaetan</p>
                <p className={`${styles.text}`}>I’m a Deviner<br></br>
                    Go ahead and look<br></br> wath I have made
                </p>

                <NavLink to={ROUTES.projects}>
                    <img className={`${styles.arrow_long}`} src={"../assets/img/arrow_long.png"} alt=""/>
                </NavLink>

            </div>
               
                
            </article>
        </>
    )
    
}

export default Home;