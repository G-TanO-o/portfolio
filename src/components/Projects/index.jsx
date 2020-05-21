import React, { useState } from 'react';
import { useObserver } from "mobx-react-lite";


import Nav from "../Nav";

import styles from "../Projects/projects.module.css";
import { useStores } from "../../hooks";

import WorkComponent from "../Work"
import Hamburger from "../Hamburger";
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../consts';
// import Menu from "../Menu";
// import Contact from "../Contact";






const Projects = ({color}) => {
    const store = useStores(); 
    const [open, setOpen] = useState(false);
    const menuId = "main-menu";


    return useObserver( () => 
        <>
        <div className={`${styles.grid_container}`}>

            <div className={`${styles.header}`}>
            <Nav color="black"/>
            </div>
            <div className={`${styles.corner}`}>
            </div>
            <div className={`${styles.corner}`}>
            </div>
            <div className={`${styles.content}`}>
                <video  className={`${styles.blob}`} autoPlay muted loop src={"../assets/img/blob.mp4"}></video>
                <ul className={`${styles.ul_list}`}>
                    {store.dataStore.works.map(work => (
                        <NavLink to={`${ROUTES.projectDetail.to}${work.id}`} className={`${styles.li_link}`}>
                             <li className={`${styles.li_list}`} key={work.id} work={work}>{work.title}</li>
                        </NavLink>
                   
                    ))}
                </ul>
            </div>
            <div className={`${styles.foot}`}>
                <h1>foot</h1>
            </div>

            {/* <Contact/> */}
        </div>
            
           
        </>
    )
    
}

export default Projects;