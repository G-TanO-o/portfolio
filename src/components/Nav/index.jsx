// import React from "react"
import React, { useState, useRef } from 'react';

import { useObserver } from "mobx-react-lite";

import styles from "../Nav/nav.module.css";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";
import Hamburger from "../Hamburger";





const Nav = () => {

    const [open, setOpen] = useState(false);
    const menuId = "main-menu";

    return useObserver( () => 
        <>
            <div>
            <nav className={`${styles.nav}`}>
                <div className={`${styles.overflow_menu}`}>
                    <Menu open={open} setOpen={setOpen} id={menuId} />
                </div>
                <div className={`${styles.nav_click}`}>
                <h1>Home</h1>
                <Hamburger open={open} setOpen={setOpen} aria-controls={menuId}/>
                </div>
            </nav>
            </div>

            <div className={`${styles.nav_back}`}>
               <img className={`${styles.nav_back_arrow}`} src={"../assets/img/arrow_back.svg"} alt=""/>
               <img className={`${styles.nav_back_line}`} src={"../assets/img/line_back.svg"} alt=""/>
           </div>
        </>
    )
    
}

export default Nav;