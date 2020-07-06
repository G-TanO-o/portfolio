import React from "react"
import { useObserver } from "mobx-react-lite";
import { NavLink} from "react-router-dom";
import {ROUTES} from "../../consts";
import styles from "../Home/home.module.css";

const Home = () => {
    return useObserver( () => 
        <>
            <article className={`${styles.home_content}`}>
                {/* <div className={`${styles.video_overflow}`}> */}
                {/* </div> */}
            
            <div className={`${styles.content}`}>
                {/* <h1 className={`${styles.name}`}>Gaetan Ferhah</h1> */}
                <div className={`${styles.content_hi}`}>
                    <video className={`${styles.blob}`} autoPlay muted loop src={"../assets/img/blob.mp4"} width="2000"></video>
                </div>
                <div className={`${styles.text_wrap}`}>
                <p className={`${styles.gaetan}`}>Gaetan</p>
                <p className={`${styles.text}`}>I’m a Deviner
                    Go ahead and look wath I have made
                </p>
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