import React from "react"
import { useObserver } from "mobx-react-lite";
import Nav from "../Nav";
import styles from "../ProjectDetail/projectdetail.module.css";
import { useParams } from "react-router-dom";
import {useStores} from "../../hooks";
import { Picture } from "react-responsive-picture";
import Footer from "../Footer";
import Filmpje from "../Filmpje";

const ProjectDetail = () => {

    const { id } = useParams();    
    const {dataStore, uiStore} = useStores();

    uiStore.setCurrentPage("ProjectDetail")
    
    return useObserver( () => {
    
    const work = dataStore.selectWorkById(id);
        return(       
        <>
            <div className={`${styles.nav}`}>
            <video autoPlay muted playsInline loop className={`${styles.blob}`} width="2000">
                <source src={"/assets/img/blob.mp4"} type="video/mp4" />
            </video>
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
                        <img className={`${styles.header_img_full_width_left}`} src={work.images.headerL} alt=""/>
                        <img className={`${styles.header_img_full_width_mid}`} src={work.images.headerM} alt=""/>
                        <img className={`${styles.header_img_full_width_right}`} src={work.images.headerR} alt=""/>
                    </div>

                    <Picture className={`${styles.img_header}`}
                        sources = {[                    
                            {
                                srcSet:work.images.headerM,
                                media: "(min-width: 599px)",
                                type: "image/jpg"
                            },
                            {
                                srcSet:work.images.headerM,
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
                            <div className={`${styles.content_color}`}>
                                <div className={`${styles.content_pos_text}`}>
                                    <p className={`${styles.intro_vet}`}>
                                    {work.opdracht}</p>
                                    <p className={`${styles.intro_deel1}`}>{work.workproces}</p>
                                    {/* <span className={`${styles.underline}`}> own content </span> */}
                                </div>
                                {/* <img className={`${styles.img_content}`} src={work.images.headerM} alt=""/> */}
                            </div>
                        </div>
                        <div className={`${styles.filmpje}`}>
                        {work.filmpje !== undefined ?
                            <Filmpje />
                        : <div className={styles.img_list_none}></div>
                        }
                        </div>
                        
                        <div className={`${styles.all_img}`}>
                            {work.screensM.length > 1 || work.screensD.length > 1 ?
                                <p className={`${styles.screen_title}`}>Some more screens</p>
                            : <div className={styles.img_list_none} ></div>
                            }
                            
                            {work.screensM.length > 1 ?
                            <div className={`${styles.screen}`}>
                                {work.screensM.map(screen => (
                                    <img className={styles.img_list} src={`/assets/img/projects/${screen}`} alt="" key={screen}></img>
                                ))}
                            </div>
                            : <div className={styles.img_list_none} ></div>
                        }
                           {work.screensD.length > 1 ? 
                            <div className={`${styles.screen}`}>
                            {work.screensD.map(screen => (
                            <img className={styles.img_list} src={`/assets/img/projects/${screen}`} alt="" key={screen}></img>
                        ))}
                            </div>
                            : <div></div>
                        }
                        
                        </div>
                     </div>
                </div>
                    {/* {work.allScreens.map(screen => (
                        <img className={`${styles.img}`} src={screen} alt={screen}/>
                      */}
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
                <Footer />
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