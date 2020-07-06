import React from "react"
import { useObserver } from "mobx-react-lite";

import styles from "../Footer/footer.module.css";



const Footer = () => {

    return useObserver( () => 
        <>
            <footer className={`${styles.footer}`}>
                <div className={`${styles.footer_wrap}`}>
                    <p className={`${styles.youlike}`}>You like what you see?</p>
                    {/* <p className={`${styles.text}`}>I would like to work together</p> */}
                    <button className={`${styles.button_contactMe}`}>
                        Send me a mail <img className={`${styles.button_img}`} src="/assets/img/arrow_next.svg" alt=""/>
                    </button>
                    {/* <div className={`${styles.social}`}>
                        <img src={"../assets/img/instagram.png"} alt=""/>
                        <img src={"../assets/img/facebook.png"} alt=""/>
                        <img src={"../assets/img/twitter.png"} alt=""/>
                        <img src={"../assets/img/linkedin.png"} alt=""/>
                        <img src={"../assets/img/rocket.png"} alt=""/>
                    </div> */}
                </div>
            </footer>
            
        </>
    )
    
}

export default Footer;