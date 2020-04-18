import React from "react"
import { useObserver } from "mobx-react-lite";

import { bool, func } from 'prop-types';



const Hamburger = ({ open, setOpen, ...props }) => {

    const isExpanded = open ? true : false;

    return useObserver( () => 
        <>
            <section aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
                <div>xxxx</div>
                <div>yyyy</div>
                <div>zzzz</div>
            </section>
        </>
    )
    
}

Hamburger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };
  

export default Hamburger;