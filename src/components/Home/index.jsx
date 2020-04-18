import React from "react"
import { useObserver } from "mobx-react-lite";


import { Link } from "react-router-dom";

import { NavLink} from "react-router-dom";

import {ROUTES} from "../../consts";

import styles from "../Home/home.module.css";



const Home = () => {

    return useObserver( () => 
        <>
            <article className={`${styles.home}`}>
                <div className={`${styles.overflow}`}>
                    <p className={`${styles.title} ${styles.name} ${styles.blinking}`}>Gaetan Ferhah</p>
                    <div className={`${styles.dad}`}>
                        <p className={`${styles.title} ${styles.spatie_dev} ${styles.marginB03}`}>development</p>
                        <p className={`${styles.title} ${styles.spatie_animation} ${styles.center} ${styles.marginB03}`}>animation</p>
                        <p className={`${styles.title} ${styles.spatie_design} ${styles.center} ${styles.marginB03}`}>design</p>
                    </div>
                    <span className={`${styles.line}`}></span>
                    <span className={`${styles.line2}`}></span>
                </div>
                < NavLink 
                className={`${styles.link_projects}`}
                // activeClassName={styles.dilemma__menu__active}
                to={ROUTES.projects}>
                Projects
                <img className={`${styles.link_projects_arrow}`} src={ require("../../assets/img/arrow.svg")} alt="logo"></img>
                </NavLink>
                <p className={`${styles.side_portfolio}`}>Portfolio</p>
            </article>
        </>
    )
    
}

export default Home;