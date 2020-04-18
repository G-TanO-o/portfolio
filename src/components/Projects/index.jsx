import React from "react"
import { useObserver } from "mobx-react-lite";


import Nav from "../Nav";

import styles from "../Projects/projects.module.css";
import { useStores } from "../../hooks";

import WorkComponent from "../Work"
import Menu from "../Menu";
import Contact from "../Contact";






const Projects = () => {
    const store = useStores(); 

    return useObserver( () => 
        <>
            <Nav/>
            <article className={`${styles.ul_center}`}>
                <p className={`${styles.title}`}>Some of my work</p>
                <ul className={styles.ul_work}>

                    {/* <li className={`${styles.li_work}`}>
                        <div className={styles.img__wrap}>
                            <img src={require("../../assets/img/dilemma_test.png")} alt="" className={`${styles.work_imagePreview}`}>
                            </img>
                            <div className={styles.img__description}>
                            <p className={styles.img_title}>Dilemmas</p>
                            <p className={styles.img_text}>The newest React webapp that helps you with all your dilemmas</p>
                            </div>
                        </div>
                    </li> */}

                    

                    {store.dataStore.works.map(work => (
                    <WorkComponent key={work.id} work={work} />
                    ))}

                </ul>
            </article>
            {/* <Contact/> */}

           
        </>
    )
    
}

export default Projects;