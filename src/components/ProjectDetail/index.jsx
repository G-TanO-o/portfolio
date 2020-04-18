import React from "react"
import { useObserver } from "mobx-react-lite";


import Nav from "../Nav";
import styles from "../ProjectDetail/projectdetail.module.css";


import { useParams } from "react-router-dom";
import {useStores} from "../../hooks";
import {ROUTES} from "../../consts";
import Footer from "../Footer";




const ProjectDetail = () => {

    const { id } = useParams();    
    const {dataStore} = useStores();
    console.log('dit is de datastore', dataStore);

    
    
    console.log("dit is het id", id);
    // console.log(work);
    
    
    
    return useObserver( () => {

        const work = dataStore.selectWorkById(id);
        console.log("dit is work", work);
        
    

    return (
        <>
            <Nav/>
            {/* <article>
                <h2 className={`${styles.title}`}>Dilemmapp</h2>
                <p className={`${styles.uitleg}`}>A designe and Developed Webapp that helps you with opening your thirt eye</p>
                <div className={`${styles.header_img_container}`}>
                <img className={`${styles.img_header}`} src={"../assets/img/mac_bodhi.png"} alt=""/>
                <span className={styles.opvul_img} ></span>
                </div>
                <p className={`${styles.about}`}>About</p>
                <div className={`${styles.content_backcolor}`}>
                    <div className={`${styles.content}`}>
                        <p className={`${styles.intro_vet}`}>All of this text is editable. Simply click anywhere in the paragraph or heading and start typing. </p>
                        <p className={`${styles.intro_deel1}`}>You can copy and paste your<span className={`${styles.underline}`}> own content </span> in to see what it looks like with these font combinations. You can copy and paste your own content in to see what it looks like with these font combinations.</p>
                
                        <img className={`${styles.img_content}`} src={"../assets/img/iphone_lig.png"} alt=""/>
                        <p className={`${styles.intro_deel2}`}>All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. You can copy and paste your own content in to see what it<span className={`${styles.underline}`}> looks like </span> with these font combinations.You can copy and paste your own content in to see what it looks like with these font combinations. You can copy and paste your own.</p>
                     </div>
                     </div>
                     <img className={`${styles.img_allPics}`} src={"../assets/img/all_screens.png"} alt=""/>
                     <span className={`${styles.line}`}></span>
                     <section className={`${styles.info}`}>
                        <div className={`${styles.info_section}`}>
                            <p className={`${styles.info_title}`}>Client</p>
                            <p className={`${styles.info_text}`}>Devine</p>
                        </div>
                        <div className={`${styles.info_section}`}>
                            <p className={`${styles.info_title}`}>Team</p>
                            <p className={`${styles.info_text}`}>Gwen and Myself</p>
                        </div>
                        <div className={`${styles.info_section}`}>
                            <p className={`${styles.info_title}`}>Year</p>
                            <p className={`${styles.info_text}`}>2020</p>
                        </div>
                        <div className={`${styles.info_section}`}>
                            <p className={`${styles.info_title}`}>Tools</p>
                            <p className={`${styles.info_text}`}>Adobe Photoship</p>
                            <p className={`${styles.info_text}`}>Adobe Illustrator</p>
                            <p className={`${styles.info_text}`}>Figma</p>
                            
                            
                            
                        </div>
                    </section>
                
            </article> */}

            <article>
                <h2 className={`${styles.title}`}>{work.title}</h2>
                <p className={`${styles.uitleg}`}>{work.uitleg}</p>
                <div className={`${styles.header_img_container}`}>
                <img className={`${styles.img_header}`} src={"../assets/img/mac_bodhi.png"} alt=""/>
                <span className={styles.opvul_img} ></span>
                </div>
                <p className={`${styles.about}`}>About</p>
                <div className={`${styles.content_backcolor}`}>
                    <div className={`${styles.content}`}>
                        <p className={`${styles.intro_vet}`}>
                        {work.opdracht}</p>
                        <p className={`${styles.intro_deel1}`}>{work.workproces}</p>
                        {/* <span className={`${styles.underline}`}> own content </span> */}
                        <img className={`${styles.img_content}`} src={"../assets/img/iphone_lig.png"} alt=""/>
                        <p className={`${styles.intro_deel2}`}>{work.workproces}</p>
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

            {/* <article>
               
                    <section>
                        <div>
                            <p>Client</p>
                            <p>{work.client}</p>
                        </div>
                        <div>
                            <p>Team</p>
                            <p>{work.team}</p>
                        </div>
                        <div>
                            <p>Year</p>
                            <p>{work.year}</p>
                        </div>
                        <div>
                            <p>Tools</p>
                            {work.tools.map(tool => (
                            <p key={tool}>{tool}</p>
                            ))}
                            
                            
                         </div>
                    </section>
                </div>
            </article>  */}
            
        </>
    )
    }
    )
    
}

export default ProjectDetail;