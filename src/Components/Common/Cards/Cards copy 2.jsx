import { Grid } from "@mui/material";
import React from "react";
import Card from "./Card.jsx"
import foto from "../../media/foto.jpg"
import data from "../../../data/clases.json"
import {obtenerClasesFiltradas} from "../../../Services/clases"


const Clases = data


export default function Cards(props){
    console.log(props)
    const [clasesFiltradas, setClasesFiltradas] = React.useState([]);
    const [submitted, setSubmitted] = React.useState(false);
  

    const recargarClasesFiltradas = () => {
        obtenerClasesFiltradas()
          .then((response) => {
            setClasesFiltradas(response.data)

       })};
    
    if (submitted === false){
        setSubmitted(true)
        recargarClasesFiltradas();
    } 

    
/*      const buscarPorFiltro = () => {
        var data = {
         frecuencia: formFrecuencia,
         materia: formMateria,
         calificacion:formCalificacion,
         tipoClase: formTipoDeClase,
        }
         console.log("anda",data)
       }  */

    return(
        <div>
            <Grid container spacing={2} backgroundColor='#F2EDDB' direction="row" justifyContent="space-evenly" alignItems="center">
                {clasesFiltradas.map((elemento) => (<Card key={elemento._id} 
                                    id={elemento.id_clase}
                                    foto={foto}
                                    profesor={elemento.name + " " + elemento.apellido}
                                    materia={elemento.materia}
                                    tipo={elemento.tipoClase}
                                    costo={elemento.costo}
                                    frecuencia={elemento.frecuencia}
                                    duracion={elemento.duracion}
                                    descripcion={elemento.descripcion}
                                    
                                ></Card>))}
              {/*  {(Clases.filter(materia => materia.materia == props.materia || props.materia=="Todas")
               .filter(tipo => tipo.tipo == props.tipo || props.tipo=="Todas")
               .filter(frecuencia => frecuencia.frecuencia == props.frecuencia || props.frecuencia=="Todas")
               .filter(calificacion => calificacion.calificacion == props.calificacion || props.calificacion=="Todas"))
               .map(clase=>(<Card key={Clases.id} 
                                id={clase.id}
                                foto={foto}
                                profesor={clase.profesor}
                                presentacion={clase.presentacion}
                                titulos={clase.titulos}
                                materia={clase.materia}
                                tipo={clase.tipo}
                                frecuencia={clase.frecuencia}
                                duracion={clase.duracion}
                                calificacion={clase.calificacion}
                                descripcion={clase.descripcion}
                                costo={clase.costo}
                            ></Card>))
                } */}
            </Grid>
        </div>
    )
}
