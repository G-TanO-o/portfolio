import React from "react"
import { useObserver } from "mobx-react-lite";

import styles from "../Menu/menu.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";

const Menu = ({ open, setOpen }) => {

    console.log(open);
    
    
    const onClickClose = () => {
        setOpen(false); 
        console.log(open);
              }


    return useObserver( () => 
        <> 

        
            <div className={`${styles.menu} ${open === true ? "open" : "closed"}`}>
            <video  className={`${styles.blob}`} autoPlay muted loop src={"../assets/img/blob.mp4"}></video>

                <div className={`${styles.menu_pos}`}>
                <div className={`${styles.menu_click}`}>
                    {/* <h1 className={`${styles.title}`}>Menu</h1> */}
                    <p className={`${styles.close}`} onClick={e => onClickClose()}>X <span className={`${styles.close_back}`}>X</span></p>
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
                </div>
                </div>
                
            </div>
           
        </>
    )
    
}

export default Menu;