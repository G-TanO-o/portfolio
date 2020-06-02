import React from "react"
import { useState, useEffect } from 'react';
import { useObserver } from "mobx-react-lite";


import Nav from "../Nav";
import styles from "../ProjectDetail/projectdetail.module.css";


import { useParams } from "react-router-dom";
import {useStores} from "../../hooks";
import { Picture } from "react-responsive-picture";
// import {ROUTES} from "../../consts";
// import Footer from "../Footer";



const ProjectDetail = () => {

    const { id } = useParams();    
    const {dataStore, uiStore} = useStores();
    console.log('dit is de datastore', dataStore);

    uiStore.setCurrentPage("ProjectDetail")
    
    console.log("dit is het id", id);
    // console.log(work);

    return useObserver( () => {
    
    const work = dataStore.selectWorkById(id);
    console.log("dit is work", work);
        return(       
        <>
            <div className={`${styles.nav}`}>
            <video  className={`${styles.blob}`} autoPlay muted loop src={"../assets/img/blob.mp4"}></video>

                <Nav color="white"/>
            </div>

        {dataStore.loading ? (
        <p className="songs__status">Loading</p>
        
        ) : work !== undefined ? (

            <article className={`${styles.content_detail}`}>
                <div className={`${styles.detail_headet_text}`}>
                    <h2 className={`${styles.title}`}>{work.title}</h2>
                    <p className={`${styles.uitleg}`}><span className={`${styles.uitleg_quote}`}>"</span>{work.uitleg}<span className={`${styles.uitleg_quote}`}>"</span></p>
                </div>
                <div className={`${styles.header_img_container}`}>

                    <div className={`${styles.header_img_full_width}`}>
                        <img className={`${styles.header_img_full_width_left}`} src={work.images.preview} alt=""/>
                        <img className={`${styles.header_img_full_width_mid}`} src={work.images.header} alt=""/>
                        <img className={`${styles.header_img_full_width_right}`} src={work.images.voorb} alt=""/>
                    </div>
                    <p> tezst voor git psuh</p>

                    <Picture className={`${styles.img_header}`}
                        sources = {[                    
                            {
                                srcSet:work.images.header,
                                media: "(min-width: 599px)",
                                type: "image/jpg"
                            },
                            {
                                srcSet:work.images.preview,
                                media: "(min-width: 375px)",
                                type: "image/jpg"
                            },
                        
                            {
                                srcSet: "path-to-desktop-image.webp",
                                type: "image/webp"
                            }
                        ]}
                    />
                    {/* <img className={`${styles.img_header}`} src={work.images.header} alt=""/> */}
                    <span className={styles.opvul_img} ></span>
                </div>
                {/* <p className={`${styles.about}`}>About</p> */}
                <div className={`${styles.content_backcolor}`}>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.content_pos}`}>
                            <div className={`${styles.content_pos_text}`}>
                                <p className={`${styles.intro_vet}`}>
                                {work.opdracht}</p>
                                <p className={`${styles.intro_deel1}`}>{work.workproces}</p>
                                {/* <span className={`${styles.underline}`}> own content </span> */}
                            </div>
                            <img className={`${styles.img_content}`} src={work.images.header} alt=""/>
                        </div>
                     </div>
                     </div>
                     <img className={`${styles.img_allPics}`} src={"../assets/img/all_screens.png"} alt=""/>
                     <span className={`${styles.line}`}></span>
                     <section className={`${styles.info}`}>
                        <div className={`${styles.info_section}`}>
                            <p className={`${styles.info_title}`}>Client</p>
                            <p className={`${styles.info_text}`}>{work.client}</p>
                        </div>
                        <div className={`${styles.info_section}`}>
                            <p className={`${styles.info_title}`}>Team</p>
                            <p className={`${styles.info_text}`}>{work.team}</p>
                        </div>
                        <div className={`${styles.info_section}`}>
                            <p className={`${styles.info_title}`}>Year</p>
                            <p className={`${styles.info_text}`}>{work.year}</p>
                        </div>
                        <div className={`${styles.info_section}`}>
                            <p className={`${styles.info_title}`}>Tools</p>
                            {work.tools.map(tool => (
                            <p className={`${styles.info_text}`} key={tool}>{tool}</p>
                            ))}
                           
                        </div>
                    </section>
                
            </article>
        ) : (
            <p className="songs__status">No project found</p>
            )}
            
        </>
        )
    }   
    )
    
}

export default ProjectDetail;