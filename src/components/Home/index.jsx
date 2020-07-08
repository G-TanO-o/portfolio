import React from "react"
import { useObserver } from "mobx-react-lite";

import { NavLink} from "react-router-dom";

import {ROUTES} from "../../consts";

import styles from "./home.module.css";

const Home = () => {
    return useObserver( () => 
        <>
            <article className={`${styles.home_content}`}>

            <div className={`${styles.content}`}>
                <div>
                    <video className={`${styles.blob}`} autoPlay muted loop src={"/assets/img/blob.mp4"} width="2000"></video>
                </div>
                <div className={`${styles.text_wrap}`}>
                <p className={`${styles.gaetan}`}>Gaetan</p>
                <p className={`${styles.text}`}>I’m a student Digital Design and Development.</p>
                <p className={`${styles.ferhah}`}>Ferhah</p>
                <NavLink to={ROUTES.projects}>
                    <img className={`${styles.arrow}`} src={"/assets/img/arrow_long.png"} alt=""/>
                </NavLink>
                </div>
            </div>  
            </article>
        </>
    )
    
}

export default Home;