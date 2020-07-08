import React from "react"
import { useObserver } from "mobx-react-lite";

import styles from "./footer.module.css";



const Footer = () => {

    return useObserver( () => 
        <>
            <footer className={`${styles.footer}`}>
                <div className={`${styles.footer_wrap}`}>
                    <p className={`${styles.youlike}`}>You like what you see?</p>
                    <button className={`${styles.button_contactMe}`}>
                        Send me a mail <img className={`${styles.button_img}`} src="/assets/img/arrow_next.svg" alt=""/>
                    </button>
                </div>
            </footer>
            
        </>
    )
    
}

export default Footer;