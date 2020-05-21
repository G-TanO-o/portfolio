import React from "react"
import { useObserver } from "mobx-react-lite";


// import Nav from "../Nav";
import styles from "../Projects/projects.module.css";
// import { useStores } from "../../hooks";
import {ROUTES} from "../../consts";
import { Link } from "react-router-dom";

// import image_path from './data.json';


const WorkComponent = ({work}) => {
    console.log(work);

    // const image_path = "../../assets/img/";
    


    return useObserver( () => 
        <>
           <Link to={`${ROUTES.projectDetail.to}${work.id}`}
            className={styles.work_meer}>
                 <li className={`${styles.li_work}`}>
                    <div className={styles.img__wrap}>
                        <img src={work.images.preview} alt="" className={`${styles.work_imagePreview}`}>
                        </img>
                        <div className={styles.img__description}>
                        <p className={styles.img_title}>{work.title}</p>
                        <p className={styles.img_text}>{work.uitleg}</p>
                        </div>
                    </div>
                </li>
           </Link> 
        </>
    )
    
}

export default WorkComponent;