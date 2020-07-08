import React from "react"
import { useObserver } from "mobx-react-lite";
import styles from "./about.module.css";

import Nav from "../Nav";
import Footer from "../Footer";

const About = () => {
    return useObserver( () => 
        <>
            <Nav/>
            <video className={`${styles.blob}`} playsinline loop muted autoplay src={"/assets/img/blob.mp4"}></video>
            <article className={`${styles.about}`}>
                <div className={`${styles.content}`}>
                    <h2 className={`${styles.title}`}>Hi,</h2>
                    <p className={`${styles.intro}`}>My name is <span className={`${styles.name_vet}`}>Gaetan Ferhah</span>, I’m a last year student <a href={"https://www.devine.be/"} className={`${styles.devine}`}>Devine</a> at the Howest University College-KASK</p>
                    <div className={`${styles.img_container}`}>
                    <span className={`${styles.border}`}></span>
                    <img className={`${styles.img}`} src={"/assets/img/me.png"} alt="me (Gaetan Ferhah)"/>
                    <span className={`${styles.back}`}></span>
                    </div>
                    <p className={`${styles.text}`}>The option to study something with design seemed almost neutral to me since I've studied multi media design in high school and always had an interest in visual things. I like to think of myself as a visual thinker, ideas come to me as images. I always can think of a picture, how something would look before the words appear in my head.</p>
                    <p className={`${styles.text}`}>In 2017 I started my adventure in Devine and now we are here, only one internship and a bachelor thesis away from graduating. During the past three years I have learned a lot about design and development. </p>
                    <p className={`${styles.text}`}>I've learned a lot about design, this in various ways. From creating digital designs for multiple platforms, making animations to storyboarding and motion videos. Escpecially the motion graphics-part interests me. I find it amazing that motion has the ability to make your designs come alive. To create a whole world starting starting with a static design.</p>
                    <p className={`${styles.text}`}>On the development side, I have learned to work with HTML, CSS, Javascript, PHP, SQL and React. Some big words that basically mean that I can make (responvive) websites, digital platforms and (web) apps. I’m still learning a lot and I’m very eager to learn more about development.</p>
                    <p className={`${styles.text}`}>But I have to admit, my pasion is more on the design side.</p>
                </div>
            </article>
            <Footer />
        </>
    )
    
}

export default About;