import React from "react"
import { useObserver } from "mobx-react-lite";

import styles from "../Footer/footer.module.css";



const Footer = () => {

    return useObserver( () => 
        <>
            <footer className={`${styles.footer}`}>
                <p className={`${styles.youlike}`}>You like?</p>
                <p className={`${styles.text}`}>I would like to work together</p>
                <button className={`${styles.button_contactMe}`}>
                    contact me
                </button>
                <div className={`${styles.social}`}>
                    <img src={"../assets/img/instagram.png"} alt=""/>
                    <img src={"../assets/img/facebook.png"} alt=""/>
                    <img src={"../assets/img/twitter.png"} alt=""/>
                    <img src={"../assets/img/linkedin.png"} alt=""/>
                    <img src={"../assets/img/rocket.png"} alt=""/>
                </div>
            </footer>
            
        </>
    )
    
}

export default Footer;