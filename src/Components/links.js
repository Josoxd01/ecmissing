import React, {useEffect} from "react";
import Linkform from "./linkform";
import {db} from '../firebase';


const links=()=>{

    const [links, setlinks]= userState([

    ])

    const anadirOEditarEnlace=async (linkObject)=>{
        await db.collection('links').doc().set(linkObject);
        console.log('Nueva Tarea Agregada')
    };

    const onDeleteLink = id =>{
        if(window.confirm('estas seguro de eliminar')){
            db.collection('links').doc(id).delete();
            console.log ('tack deleted')
    }
};
    const getlinks = async () => {
           db.conlletion('links').onSnapshot((querySnapshot) => {
               const docs = [];
                querySnapshot.forEach((doc) => {
                    console.log(doc.data());
                    console.log(doc.id)
                    docs.push({...doc.data(), id:doc.id});
                });
                setlinks(docs);
         });
        
    };

    useEffect(() => {
    getlinks();
    }, []);

    return (<div>
        <div className="col-md-4 p-2"> 
        <linkFrom addOrEditLink = {addOrEditLink} />
        </div>
        <div className = "col-md-8 p-2">
            {links.map(link => (
                <div className ="card.mb-1" key ={link.id}> 
                    <div className ="card-body">
                        <div className = "d-flex justify-content-between">
                        <h4>{link.name}</h4>
                        <i className = "material-icons text-danger" onClick ={() => onDeleteLink(link.id)}>
                            close</i>
                        </div>
                        <p>{link.descripcion}</p>
                        <a href={link.url} target="_blank" rel = "nooperner noreferrer">go to web side</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default links;