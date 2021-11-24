import React from "react";
import Linkform from "./linkform";

import {db} from '../firebase'


const links=()=>{

    const anadirOEditarEnlace=async (linkObject)=>{
        await db.collection('links').doc().set(linkObject);
        console.log('Nueva Tarea Agregada')
    }

    return <div>
        <linkform  anadirOEditarEnlace={anadirOEditarEnlace}/>
        <h1>links</h1>
    </div>;
}

export default links;