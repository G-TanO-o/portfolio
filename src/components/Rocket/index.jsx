import React from "react"
import { useObserver } from "mobx-react-lite";

import styles from "../Rocket/rocket.module.css";



const Rocket = () => {

    return useObserver( () => 
        <>
            <article>
                <div>
                    <p className={`${styles.rocket}`}>
                        <div className={`${styles.rocket_center}`}>
          <div>INT. KITCHEN, FAR^MHOUSE - MORNI</div>
         <div>Cooper pours it hi/¨\mself coffee as he</div>
        <div>Donald puts gr/==\its on the table</div>
        <div>TOM, oi Cooper’s|---|fifteen-year-old I</div>
        <div>son, stuffs his fa|---|ce. Murph, wet..</div>
        <div>hair, towel arou|---|nd neck, plays-, </div>
       <div>with pieces /____\of a MODEL</div>
       <div>(a lunar lander). |-----|DONALD Not at</div>
       <div>Murph. MURPH .|-----| Dad, can you fix </div>
       <div>COOPER (,takes |-----|pieces, frowning</div>
       <div>What’d you d|-----|to my lander?</div>      
      <div>MURPH Wasn’t /|o|o.|\meTOM Lemme</div>
     <div>guess - your gh/ll|ii|iii|ll\ost?. MURPH It</div>
    <div>knoccked it, /_|_.|.__|__\off my shelf.</div>
       <div>It keeps knockin/_\/_\g books off. TOM</div>
       <div>There’s no s######uch things as</div>
      <div>ghosts, dum########b-ass - 4. COp</div>
       <div>Hey - MURP##########H I looked it </div>
        <div>it’s called a ########### poltergeist</div>
        <div>TOM Dad, ############tell her it.</div>
         <div>COOPER ,#############Murph, you </div>
         <div>###############</div>
         <div>#################</div>
         <div>###################</div>
         <div>######################</div>
         <div>#########################</div>
         <div>############################</div>
         <div>#############################</div>
         </div>
                    </p>
                    <p className={`${styles.explain}`}>Dit zijn de eertse paar paginas van het script van de beste film ooit gemaakt (2020).<br></br>
                    INTERSTELLAR</p>
                </div>
            </article>
        </>
    )
    
}

export default Rocket;