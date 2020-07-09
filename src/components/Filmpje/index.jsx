import React from "react"
import { useObserver } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import {useStores} from "../../hooks";



const Filmpje = () => {
    const { id } = useParams();    
    const {dataStore} = useStores();
    const work = dataStore.selectWorkById(id);
    return useObserver( () => 
        <>
        <video src={`/assets/img/projects/${work.filmpje}`} width="960" height="540" controls alt="Video thats explains the app."></video>
        </>
    )
    
}

export default Filmpje;