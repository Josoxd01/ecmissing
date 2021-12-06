import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import './App.css';
import Links from "./Components/links";

import Navbar from "./Components/Navegacion/Navbar";  
import Inicio from "./Components/Paginas/Inicio";



function App() {
  
  
  return (
    <div className="container p-4">
      <div className="row">
       <Router>
         <Navbar/>
         <Routes>
         <Route exact path="/links" element={<Links/>}/>
         <Route exact path="/Inicio" element={<Inicio/>}/>
         </Routes>
       </Router>  
       
     
      </div>
    </div>
    );
}

export default App;