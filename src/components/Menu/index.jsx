import React from "react"
import { useObserver } from "mobx-react-lite";

import styles from "../Menu/menu.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";




const Menu = ({ open, setOpen, ...props }) => {

    console.log(open);
    
    
    const onClickClose = () => {
        setOpen(false); 
        console.log(open);
              }


    return useObserver( () => 
        <> 

        
            <div className={`${styles.menu} ${open === true ? "open" : "closed"}`}>
                <div className={`${styles.menu_click}`}>
                    <h1 className={`${styles.title}`}>Menu</h1>
                    <span onClick={e => onClickClose()}>X</span>
                </div>
                <div className={`${styles.wrap}`}>
                    <nav className={`${styles.nav_menu}`}>
                        <ul>
                            <Link className={`${styles.link}`} to={ROUTES.feed}>
                            <li className={`${styles.active}`}>Home</li>
                            </Link>
                            <Link className={`${styles.link}`} to={ROUTES.projects}>
                            <li className={`${styles.active}`}>Projects</li>
                            </Link>
                            <Link className={`${styles.link}`} to={ROUTES.about}>
                            <li className={`${styles.active}`}>About me</li>
                            </Link>
                            <Link className={`${styles.link}`} to={ROUTES.contact}>
                            <li className={`${styles.active}`}>Contact</li>
                            </Link>
                        </ul>
                    </nav>
                    <div className={`${styles.social}`}>

                        <div className={`${styles.social_box}`}>
                            <a href="../"><img src={"../assets/img/instagram.png"} alt=""/></a>
                            <a href="../"><img src={"../assets/img/facebook.png"} alt=""/></a>
                            <a href="../"><img src={"../assets/img/twitter.png"} alt=""/></a>
                            <a href="../"><img src={"../assets/img/linkedin.png"} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
    
}

export default Menu;