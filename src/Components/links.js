
import React, {useEffect,useState} from "react";
import { toast } from "react-toastify";
import Linkform from "./linkform";

import {db} from '../firebase';


const Links=()=>{

    const [Links,setLinks] = useState([]);
    const [currentId, setCurrentId] = useState('');

    const addoredit=async (linkObject)=>{
        try {
            if (currentId === "") {
              await db.collection("Desaparecidos").doc().set(linkObject);
              toast("Añadido con exito", {
                type: "success",
              });
            } else {
              await db.collection("Desaparecidos").doc(currentId).update(linkObject);
              toast("Actualizado con exito", {
                type: "info",
              });
              setCurrentId("");
            }
          } catch (error) {
            console.error(error);
          }
        };
    

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
        <Linkform {...{ addoredit, currentId, Links }} /> 
        </div>
        
        <div className="col-md-8 p-2">
            {Links.map(link => (
                <div className ="card mb-2" key = {link.id}>
                    <div className ="card-body">
                    <div className ="d-flex justify-content-between">
                    <h3>{link.Nombre}</h3>
                        <div>
                        <i className = "material-icons text-danger" onClick= {() => Eliminar(link.id)}>close</i>
                        <i className = "material-icons" onClick= {() => setCurrentId(link.id)} >create</i>
                        </div>
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