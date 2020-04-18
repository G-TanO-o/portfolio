import React from "react"
import { useObserver } from "mobx-react-lite";

import styles from "../Contact/contact.module.css";


const Contact = () => {

    return useObserver( () => 
        <>
            <article className={`${styles.contact}`}>
                <p className={`${styles.contact_title}`}>Contact</p>
                <div className={`${styles.contact_border}`}>
                    <form action="" className={`${styles.form}`}>
                        <div className={`${styles.question}`}>
                            <label htmlFor="" className={`${styles.label}`}>What's your name again?</label>
                            <input type="text" className={`${styles.input_name}`} placeholder="Gaetan" required/>
                        </div>
                        <div className={`${styles.question}`}>
                            <label htmlFor="" className={`${styles.label}`}>What's up...</label>
                            <select name="" id="" className={`${styles.select}`} required>
                                <option lassName={`${styles.option}`} value="">¯\_(ツ)_/¯</option>
                                <option lassName={`${styles.option}`} value="work">Wanna work together?</option>
                                <option lassName={`${styles.option}`} value="">Love your work</option>
                                <option lassName={`${styles.option}`} value="joke">funny joke</option>
                                <option lassName={`${styles.option}`} value="quarantaine">Bored in quarantaine</option>
                            </select>
                        </div>
                        <div className={`${styles.question}`}>
                            <label htmlFor="" className={`${styles.label}`}>Tell me...</label>
                            <textarea type="text" rows="4" placeholder="Type here your very interesting secrets..." className={`${styles.textarea}`} required/>
                        </div>
                        <button className={`${styles.send}`}>
                            <p>send</p>
                        </button>
                    </form>
                    <div className={`${styles.intoche_wrap}`}>
                        <div className={`${styles.intoche}`}>
                            <img src={"../assets/img/hash.svg"} alt=""/>
                            <p>+32 (0)497 14 36 68</p>
                        </div>
                        <div className={`${styles.intoche}`}>
                            <img src={"../assets/img/mail.svg"} alt=""/>
                            <p>gaetan.ferhah@gmail.com</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
    
}

export default Contact;