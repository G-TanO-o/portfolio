import React from "react"
import { useObserver } from "mobx-react-lite";

import styles from "../About/about.module.css";



import Nav from "../Nav";

import Footer from "../Footer";


const About = () => {

    return useObserver( () => 
        <>
            <Nav/>
            <article>
                <div>
                    <h2 className={`${styles.title}`}>Hi,</h2>
                    <p className={`${styles.intro}`}>My name is <span className={`${styles.name_vet}`}>Gaetan Ferhah</span>, I’m a last student at <a href={"https://www.devine.be/"} className={`${styles.devine}`}>Devine <img className={`${styles.vraagteken}`} src={"../assets/img/uitleg.svg"} alt=""/></a>, Howest KASK.</p>
                    <div className={`${styles.img_container}`}>
                    <span className={`${styles.border}`}></span>
                    <img className={`${styles.img}`} src={"../assets/img/me.png"} alt=""/>
                    <span className={`${styles.back}`}></span>
                    </div>
                    <p className={`${styles.text}`}>All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. You can copy and paste your own content in to see what it looks like with these font combinations.
                    You can copy and paste your own content in to see what it looks like.</p>
                    <p className={`${styles.interstellar}`}>BLACK. THE GENTLE SOUND OF WIND IN CORN
                    A row of books. From spaces between them, dust falls. ELDERLY FEMALE VOICE (V.O.) Sure. Dad was a farmer. BRIGHT CORN STALKS FILL THE FRAME, SWAYING IN THE BREEZE ELDERLY FEMALE VOICE (V.O.) Like everybody else back then. The wind is RISING, shaking the plants more FORCEFULLY ... Insert cut: a WOMAN in her eighties against a dark background. ELDERLY WOMAN Course, he didn’t start that way... The WIND IS HOWLING, SHRIEKING and we RIP INTO - EXT. THE STRATOSPHERE - DAY BURNING through the fringes of space - INT. COCKPIT - CONTINUOUS A young PILOT fights his BUFFETING craft - RADIO (O.S.) Computer says you’re too tight 
                    PILOT I got this - The Pilot grabs a panicked glance at his instruments - RADIO (O.S.) Crossing the Straights ... shutting it down, Cooper. Shutting it all down ... 2. PILOT NO! I need the power up - EXT. THE STRATOSPHERE - CONTINUOUS The BLACK and RED SKY starts SPINNING HORRIFYINGLY - INT. COCKPIT - DAY As the controls RIP themselves free, the pilot SHOUTS and we  CUT TO: INT. BEDROOM, FARMHOUSE - NIGHT A man WAKES, nightmare SWEATY. This is COOPER. YOUNG GIRL’S VOICE (O.S.) Dad? Dad? Cooper turns: in the doorway - his sleepy ten-year-old daughter. This is MURPH. COOPER Sorry. Go back to sleep. MURPH I thought you were the ghost. COOPER There’s no ghost, Murph. MURPH Grandpa says you can get ghosts. COOPER Maybe Grandpa’s a little too close to being one himself. Back to sleep. MURPH Were you dreaming about the crash? COOPER Back to sleep, Murph. Murph shuffles back out the door. Cooper moves to the window. DAWN breaks over an ENDLESS SEA OF CORN ... 3. ELDERLY FEMALE VOICE (V.O.) Corn, sure. But dust. In your ears, your mouth... INSERT CUT: AN OLD-TIMER IN CLOSE UP, WATERY-EYED, DESCRIBES DUST BOWL CONDITIONS. OLD-TIMER (V.O.) Dust just everywhere. Everywhere. EXT. COOPER’S FARM - MORNING An old man, handkerchief across his face, sweeps dust out of the door onto the porch. This is Grandpa 
                    </p> 
                    <p className={`${styles.interstellar}`}>(DONALD). INT. KITCHEN, FARMHOUSE - MORNING Cooper pours himself coffee as Donald puts grits on the table. TOM, Cooper’s fifteen-year-old son, stuffs his face. Murph, wet hair, towel around neck, plays with pieces of a MODEL (a lunar lander). DONALD Not at the table, Murph. MURPH Dad, can you fix this? COOPER (takes pieces, frowning) What’d you do to my lander? MURPH Wasn’t me. TOM Lemme guess - your ghost? MURPH It knocked it off my shelf. It keeps knocking books off. TOM There’s no such things as ghosts, dumb-ass - 4. COOPER (to Tom) Hey - MURPH I looked it up, it’s called a poltergeist. TOM Dad, tell her. COOPER Murph, you know that’s not
                    scientific. MURPH You say science is about admitting what we don’t know. DONALD She’s got you there.
                    COOPER (hands her pieces) Start looking after our stuff. Donald looks at Cooper, admonishing. Cooper shrugs. COOPER Fine. Murph, you wanna talk science, don’t just tell me you’re scared of some ghost - record the facts, analyze, present your conclusions. MURPH Sure. Cooper gets up, grabs his keys. DONALD Hold up. (Off look.) Parent-teacher conferences. ’Parent’ - not ’grandparent’.
                    </p>
                    <div className={`${styles.rocket}`}>
                        <div className={`${styles.rocket_center}`}>
          <div>^</div>
         <div>/¨\</div>
        <div>/==\</div>
        <div>|---|</div>
        <div>|---|</div>
        <div>|---|</div>
       <div>/____\</div>
       <div>|-----|</div>
       <div>|-----|</div>
       <div>|-----|</div>
       <div>|-----|</div>      
      <div>/|o|o.|\</div>
     <div>/ll|ii|iii|ll\</div>
    <div>/_|_.|.__|__\</div>
       <div>/_\/_\</div>
       <div>######</div>
      <div>########</div>
       <div>##########</div>
        <div>###########</div>
        <div>############</div>
         <div>#############</div>
         <div>###############</div>
         <div>#################</div>
         <div>###################</div>
         <div>######################</div>
         <div>#########################</div>
         <div>############################</div>
         <div>#############################</div>
         </div>
                    </div>
                    <p className={`${styles.explain}`}>Dit zijn de eertse paar paginas van het script van de beste film ooit gemaakt (2020).<br></br>
                    INTERSTELLAR</p>
                </div>
            </article>
            <Footer />
        </>
    )
    
}

export default About;