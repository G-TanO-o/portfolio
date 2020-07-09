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
                <video autoPlay muted playsInline loop className={`${styles.blob}`} width="2000">
                    <source src={"/assets/img/blob.mp4"} type="video/mp4" />
                </video>                </div>
                <div className={`${styles.text_wrap}`}>
                <p className={`${styles.gaetan}`}>Gaetan</p>
                <p className={`${styles.text}`}>I’m a student Digital Design and Development.</p>
                <p className={`${styles.ferhah}`}>Ferhah</p>
                <NavLink to={ROUTES.projects}>
                    <img className={`${styles.arrow}`} src={"/assets/img/arrow_long.png"} alt="arrow"/>
                </NavLink>
                </div>
            </div>  
            </article>
        </>
    )
    
}

export default Home;