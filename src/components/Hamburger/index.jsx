import React from "react"
import { useObserver } from "mobx-react-lite";

import { bool, func } from 'prop-types';



const Hamburger = ({ color, open, setOpen, ...props }) => {

    const isExpanded = open ? true : false;
    console.log(color);

    return useObserver( () => 
        <>
            <section aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
               
               {color === 'white' ? (<img src={"../assets/img/hamburger_white.png"} alt=""/>) : (<img src={"../assets/img/hamburger_black.png"} alt=""/>)}

            </section>
        </>
    )
    
}

Hamburger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };
  

export default Hamburger;