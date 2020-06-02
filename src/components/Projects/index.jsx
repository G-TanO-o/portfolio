import React, { useState, useEffect } from 'react';
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
    const {uiStore} = useStores(); 

    // const menuId = "main-menu";

    uiStore.setCurrentPage("work");

      
        
    return useObserver( () => {

        const loadDetail = (workId) => {
            console.log('dit is de test', workId)
            console.log(workId);
            const work = store.dataStore.selectWorkById(workId);
            console.log('work', work);

            store.dataStore.setHoverWork(work);            
        };

        const hoverWork = store.dataStore.hoverWork;
        console.log(hoverWork);

        return(

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
                        <NavLink to={`${ROUTES.projectDetail.to}${work.id}`}  key={work.id} className={`${styles.li_link}`}  onMouseEnter={() => loadDetail(work.id)}
                        >
                             <li  className={`${styles.li_list}`} work={work}>{work.title}</li>
                        </NavLink>
                   
                    ))}
                </ul>

                


{console.log(hoverWork)};

{(hoverWork !== undefined) ? 
                <div className={`${styles.content_hover}`}>

                <p className={`${styles.preview_title}`}>{hoverWork.title}</p>
                <div className={`${styles.content_prev_tex_img}`}>
                    <p className={`${styles.content_prev_tex}`}>{hoverWork.uitleg}</p>
                    <img className={`${styles.preview_img}`} src={`${hoverWork.images.preview}`} alt=""/>
                </div>

                <NavLink to={`${ROUTES.projectDetail.to}${hoverWork.id}`}>
                    <img className={`${styles.arrow_to}`} src={"../assets/img/back_arrow.svg"} alt=""/>
                </NavLink>
                </div>

:  <div className={`${styles.content_hover}`}>

<p className={`${styles.preview_title}`}>Title</p>
<div className={`${styles.content_prev_tex_img}`}>
    <p className={`${styles.content_prev_tex}`}>All of this text is editable. Simply click anywhere in the paragraph or heading. All of this text is editable. Simply click anywhere in the paragraph or heading</p>
    <img className={`${styles.preview_img}`} src={"../assets/img/appnormal_mac.png"} alt=""/>
</div>

<NavLink to={ROUTES.projectDetail.to}>
    <img className={`${styles.arrow_to}`} src={"../assets/img/back_arrow.svg"} alt=""/>
</NavLink>
</div>}

                       
                        

            </div>
            <div className={`${styles.foot}`}>
                <h1>foot</h1>
            </div>

            {/* <Contact/> */}
        </div>
            
           
        </>)
   } )
    
}

export default Projects;