import React, { useEffect, useState } from "react";
import { db, st} from "../firebase";

const Linkform = (props) => {
    const [Imagen,setImagen]=useState('No generado');
    const initialStateValues = {
        Nombre: "",
        Edad: "",
        Telefono: "",
        Descripcion: "",
        ImagenUrl:"",
    };
    

    const [values, setValues] = useState(initialStateValues);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addoredit(values);
        setValues({ ...initialStateValues })
    };

    const getById = async (id) => {
        imprimir();
        const doc = await db.collection("Desaparecidos").doc(id).get();
        setValues({ ...doc.data() });
        
    };

    useEffect(() => {
        if (props.currentId === "") {
            setValues({ ...initialStateValues });
        } else {
            getById(props.currentId);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.currentId]);

    const CargarImagen = async(e) => {
        var imgURL = ""; 
        const archivo = e.target.files[0];
        const storageRef = st.ref();
        const archivoPath = storageRef.child(`/fotos/${archivo.name}`).put(archivo);
        await archivoPath.then(snapshot => {
            snapshot.ref.getDownloadURL().then(url => {
                imgURL = url;//this is the URL I use and it works 
                //for me it can be done also for video files
                console.log(imgURL);
                setImagen(imgURL);
                console.log("Enlace: "+Imagen);
            });
        });
       // await archivoPath.put(archivo);
        //const url="";
        //archivoPath. 

        /*console.log("archivo cargado:",archivo.name);
        const enlaceImg = await archivoPath.getDownloadURL;
        console.log("Enlace: "+enlaceImg);
        seturlimagen(enlaceImg);*/
    }

    /*const handleChange = e => {
        if (e.target.files[0]) {
        }
      };*/
      const imprimir=()=>{
          setImagen("No generado");
          console.log("ahh:"+Imagen);
      }


    return (
        <form className="card card-body" onSubmit={handleSubmit} >
            <div>
            <input type="file" onChange={CargarImagen} />
            </div>
            <text>link:{Imagen}</text>
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
            <div className="form-group">
                <textarea name="ImagenUrl" rows="1" className="form-control" placeholder="Copie el link generado" onChange={handleInputChange}
                    value={values.ImagenUrl}
                ></textarea>

            </div>
            <button className="btn btn-primary btn-block" >
                {props.currentId === "" ? "Guardar" : "Actualizar"}
            </button>
        </form>
    );
};
export default Linkform;