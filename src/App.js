import React,{useEffect} from "react";
import './App.css';
import Links from "./Components/links";
import {db} from './firebase'

function App() {
  
  const getDesaparecidos = async ()=>{
    const querySnapShot= await db.collection('Desaparecidos').get();
    querySnapShot.forEach(doc=>{
      console.log(doc.data( ))
    })
   }
  useEffect(()=>{
    getDesaparecidos();
},[]);
  return (
    <div className="container p-4">
      <div className="row">
      <Links/>
      </div>
    </div>
    );
}

export default App;