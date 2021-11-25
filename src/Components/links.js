
import React, {useEffect,useState} from "react";
import Linkform from "./linkform";

import {db} from '../firebase'


const Links=()=>{

    const [Links,setLinks] = useState([]);

    const addoredit=async (linkObject)=>{
        await db.collection('Desaparecidos').doc().set(linkObject);
        console.log('Nueva Tarea Agregada');
    }

    const Eliminar = async id =>{
    if(window.confirm('Estas seguro de querer eliminar esta ficha')){
        await db.collection('Desaparecidos').doc(id).delete();
        console.log('ficha Eliminada')
    }
    };

    const getLinks = async ()=>{
        db.collection('Desaparecidos').onSnapshot((querySnapshot)=>{
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(),id:doc.id});
            });
            setLinks(docs);
        });
       
    };

    useEffect(()=>{
     getLinks();
      },[]);

    return <div>
        <div className="col-md-8 p-2" >
            <Linkform  addoredit={addoredit}/>  
        </div>
        
        <div className="col-md-8 p-2">
            {Links.map(link => (
                <div className ="card mb-2" key = {link.id}>
                    <div className ="card-body">
                    <div className ="d-flex justify-content-between">
                        <i className = "material-icons text-danger" onClick= {() => Eliminar(link.id)}>close</i>
                        <h4>{link.Nombre}</h4>
                    </div>
                      <p>{link.Edad}</p>
                      <p>{link.Descripcion}</p>
                      <p>{link.Telefono} </p>
                    </div>
                </div>
            ))}
        </div>

    </div>;
}

export default Links;