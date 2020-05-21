// import React from "react"
import React, { useState } from 'react';

import { useObserver } from "mobx-react-lite";

import styles from "../Nav/nav.module.css";
import Menu from "../Menu";
// import { Link } from "react-router-dom";
// import { ROUTES } from "../../consts";
import Hamburger from "../Hamburger";
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../consts';



const Nav = ({color}) => {

    const [open, setOpen] = useState(false);
    const menuId = "main-menu";
    console.log(color);
    

    return useObserver( () => 
        <>
            <nav className={`${styles.nav}`}>
                <div className={`${styles.overflow_menu}`}>
                    <Menu open={open} setOpen={setOpen} id={menuId} />
                </div>
                <div className={`${styles.nav_click} ${styles.grid_container}`}>
                    {/* { if(page != home) (
                        <h1>Home</h1>
                    )else (

                    )
                    } */}
                    {/* {
                    if(page === detail) (
                        
                    ) else (
                        <h1 className={`${styles.header}`}>work</h1>
                    )
                    } */}

                        <NavLink to={ROUTES.projects}>
                            <img className={`${styles.arrow_back}`} src={"../assets/img/arrow_back_white.svg"} alt=""/>
                        </NavLink>
                    <div className={`${styles.hamburger}`}>
                        <Hamburger color={color} open={open} setOpen={setOpen} aria-controls={menuId}/>
                    </div>
                </div>
            </nav>

            {/* <div className={`${styles.nav_back}`}>
               <img className={`${styles.nav_back_arrow}`} src={"../assets/img/arrow_back.svg"} alt=""/>
               <img className={`${styles.nav_back_line}`} src={"../assets/img/line_back.svg"} alt=""/>
           </div> */}
        </>
    )
    
}

export default Nav;