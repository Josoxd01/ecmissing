import React from "react";
import Linkform from "./linkform";

import {db} from '../firebase'


const links=()=>{

    const addoredit=async (linkObject)=>{
        await db.collection('Desaparecidos').doc().set(linkObject);
        console.log('Nueva Tarea Agregada')
    }

    return <div>
        <Linkform  addoredit={addoredit}/>
        <h1>links</h1>
    </div>;
}

export default links;