import React from 'react';
import { useObserver } from "mobx-react-lite";
import Nav from "../Nav";
import styles from "./projects.module.css";
import { useStores } from "../../hooks";
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../consts';



const Projects = () => {
    const store = useStores(); 
        
    return useObserver( () => {

        const loadDetail = (workId) => {
            const work = store.dataStore.selectWorkById(workId);

            store.dataStore.setHoverWork(work);            
        };

        const hoverWork = store.dataStore.hoverWork;

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
                <video autoPlay muted playsInline loop className={`${styles.blob}`} width="2000">
                    <source src={"/assets/img/blob.mp4"} type="video/mp4" />
                </video>
                <ul className={`${styles.ul_list}`}>
                    {store.dataStore.works.map(work => (
                        <NavLink to={`${ROUTES.projectDetail.to}${work.id}`}  key={work.id} className={`${styles.li_link}`}  onMouseEnter={() => loadDetail(work.id)}
                        >
                             <li  className={`${styles.li_list}`} work={work}>{work.title}</li>
                        </NavLink>
                    ))}
                </ul>
                {(hoverWork !== undefined) ? 
                <div className={`${styles.content_hover}`}>
                <div className={`${styles.content_wrap}`}>
                    <div className={`${styles.text}`}>
                        <p className={`${styles.preview_title}`}>{hoverWork.title}</p>
                        <p className={`${styles.intro}`}>{hoverWork.uitleg}</p>
                        <p className={`${styles.uitleg}`}>{hoverWork.opdracht}</p>
                    </div>

                    <img className={`${styles.img}`} src={`${hoverWork.images.headerM}`} alt=""/>
                 </div> 
                <NavLink to={`${ROUTES.projectDetail.to}${hoverWork.id}`}>
                    <img className={`${styles.arrow_to}`} src={"/assets/img/back_arrow.svg"} alt="arrow"/>
                </NavLink>
                </div>
                :  <div className={`${styles.content_hover}`}>
                <div className={`${styles.content_wrap}`}>
                    <div className={`${styles.text}`}>
                        <p className={`${styles.preview_title}`}>Hover on a project</p>
                        <p className={`${styles.intro}`}>Then you will see some info</p>
                    </div>
                </div>
                    </div>}
            </div>
            <div className={`${styles.foot}`}>
            <a href = "mailto: ferhahgaetan@gmail.com" className={`${styles.button_contactMe}`}>
                        Send me a mail<img className={`${styles.button_img}`} src="/assets/img/arrow_next.svg" alt=""/>
                    </a>
            </div>
        </div>
        </>)
   } )
    
}

export default Projects;