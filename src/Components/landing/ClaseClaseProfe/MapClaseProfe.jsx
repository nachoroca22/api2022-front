import React from "react";
import CardClaseProfe from "./CardClaseProfe.jsx";
import  Navbar from "../navBar/NavBar.jsx";
import { useParams } from 'react-router-dom';
import { Grid } from "@mui/material";
import { obtenerClaseFull } from "../../../Services/clases";
import { obtenerAlumno} from "../../../Services/alumnos";


function ClaseProfe(){

    const [submitted, setSubmitted] = React.useState(false);
    const id_alumno = localStorage.getItem("id")
    const [alumno, setAlumno] = React.useState({
        id_alumno: null,
        apellido_alumno: "",
        name_alumno: "",
        usuario_alumno: "",
        rol: "",
        telefono_alumno: "",
        estado_alumno: null,
        fechaNac_alumno: "",  
        genero_alumno: "",
        nivel_primaria: "", 
        nivel_secundaria: "",    
        nivel_terciario: "",    
        nivel_universitario: "",
    });
    const [clase, setClase] = React.useState({
        apellido: null,
        name: null,
        calificacion: null,
        costo: null,
        descripcion: null,
        duracion: null,
        id_clase: null,
        id_user: null,
        materia: null,
        tipoClase: null,
        presentacion: null,
        estudios: null,
        usuario: null,
        frecuencia: null,
    });

    let {id}  = useParams();
    
    const recargarAlumno = () => {
        obtenerAlumno(id_alumno)
          .then((response) => {
            setAlumno( 
                {id_alumno: response.data.id_alumno,
                apellido_alumno: response.data.apellido_alumno,
                name_alumno: response.data.name_alumno,
                usuario_alumno: response.data.usuario_alumno,
                telefono_alumno: response.data.telefono_alumno,
                rol: response.data.rol,
                estado_alumno: response.data.estado_alumno,
                fechaNac_alumno: response.data.fechaNac_alumno,
                genero_alumno: response.data.genero_alumno,
                nivel_primaria: response.data.nivel_primaria,  
                nivel_secundaria: response.data.nivel_secundaria,
                nivel_terciario: response.data.nivel_terciario,
                nivel_universitario: response.data.nivel_universitario,
            }); 
        })         
      };
    

    const cargarClase = () => {
        obtenerClaseFull(id)
          .then((response) => {
            setClase({
                apellido: response.data.apellido,
                name: response.data.name,
                calificacion: response.data.calificacion,
                costo: response.data.costo,
                descripcion: response.data.descripcion,
                duracion: response.data.duracion,
                id_clase: response.data.id_clase,
                id_user: response.data.id_user,
                materia: response.data.materia,
                tipoClase: response.data.tipoClase,
                presentacion: response.data.presentacion,
                estudios: response.data.estudios,
                frecuencia: response.data.frecuencia,
                usuario: response.data.usuario,
        
            })
        })
    };
    if (submitted === false){
        setSubmitted(true)
        cargarClase();    
        recargarAlumno();
    }
    return(
        <React.Fragment>
        <Navbar></Navbar>
        <Grid sx={{marginTop:"80px",backgroundColor:'#F2EDDB', minHeight:"950px", paddingTop:"20px"}}>
            <CardClaseProfe
            datosclase ={clase}
            datosalumno ={alumno}
            >
            </CardClaseProfe>
        </Grid>
        </React.Fragment>
    ) 
}
export default ClaseProfe