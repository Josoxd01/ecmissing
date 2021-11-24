import React, { useState } from "react";
const Linkform = (props) => { 

  const initialStateValues={
        Nombre: "",
        Edad: "",
        Telefono:"",
        Descripcion:"",
  };
    const [ values, setValues]= useState(initialStateValues);

    const handleInputChange=(e)=>{
        const {name, value}=e.target;
        setValues({...values, [name]:value})
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.addoredit(values);
        setValues({...initialStateValues})
    };

    return ( 
        <form className = "card card-body" onSubmit={handleSubmit} >
        <div className="form-group input-group">
            <div className="input-group-text bg-light">
                <i className="material-icons">create</i>
            </div>
            <input type="text" 
            className="form-control" 
            placeholder="Nombre y Apellido" 
            name="Nombre"
            onChange={handleInputChange}
            value={values.Nombre}
            />
        </div>

        <div className="form-group input-group">
            <div className="input-group-text bg-light">
                <i className="material-icons">accessibility</i>
            </div>

            <input type="text" className="form-control" name="Edad" placeholder="Edad del desaparecido" onChange={handleInputChange} 
            value={values.Edad}
            />
        </div>

        <div className="form-group input-group">
            <div className="input-group-text bg-light">
                <i className="material-icons">call</i>
            </div>

            <input type="text" className="form-control" name="Telefono" placeholder="Telefono de contacto" onChange={handleInputChange}
            value={values.Telefono}
            />
        </div>

        <div className="form-group">
            <textarea name="Descripcion" rows="3" className="form-control" placeholder="Escribir descripcion" onChange={handleInputChange}
            value={values.Descripcion}
            ></textarea>
            
        </div>
        <button className="btn btn-primary btn-block">Guardar</button>
        </form>
    );
};
export default Linkform;