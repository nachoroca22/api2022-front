import * as React from 'react';
import { Button,Card,FormControl,Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/system';
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import About from "../../../Components/landing/about/About"
import Cards from "../Cards/Cards";
import { obtenerMateriasFiltro } from '../../../Services/clases';
import {obtenerClasesFiltradas} from "../../../Services/clases"

const tipoClaseFilter = [
  
    {"id":1,
    "nombre": "Grupal"
    },
    {"id":2,
    "nombre": "Individual"
    }
  ]
const frecuenciaFilter = [
       
    {"id":1,
    "nombre": "Unica"
    },
    {"id":2,
    "nombre": "Semanal"
    },
    {"id":3,
    "nombre":"Mensual"      
    }
]
const calificacionFilter = [
    {"id":0,
    "nombre": 0
    }, 
    {"id":1,
    "nombre": 1
    },
    {"id":2,
    "nombre": 2
    },
    {"id":3,
    "nombre": 3      
    },
    {"id":4,
    "nombre": 4
    },
    {"id":5,
    "nombre": 5
    } 
]  

export default function Filtro() {
  const {materia,tipoclase,frecuencia,calificacion} = useParams()
  const [paginado, setPaginado] = React.useState(0)
  const[ dataFiltros, setDataFiltros]= React.useState({
    materia: undefined,
    calificacion: "3",
    frecuencia: "Unica",
    tipoClase: "Individual",
  })
  const [mensajeMasClases,setMensajeMasClases]=React.useState("");
  const [clasesFiltradas, setClasesFiltradas] = React.useState([]);
  const [materiasFiltro, setMateriasFiltro]=React.useState([]);
  const [submitted, setSubmitted] = React.useState(false);
  const [viewAbout, setViewAbout] = React.useState(false);
  const [viewBotonMasClases, setBotonMasClases] = React.useState(false);
  const [viewMensajeBusquedaVacia, setMensajeBusquedaVacia] = React.useState("");

  
/*   const cargarMasClases = () => {
    setClase({
        dataFiltros
        paginado: clase.paginado+2});
    
    obtenerComentariosByClase(clase)
    .then((response) => {

        for (var i=0; i<response.data.length; i++){
            const newComentario = {
                _id: response.data[i]._id, 
                alumno: response.data[i].alumno, 
                calificacion_alumno:response.data[i].calificacion_alumno, 
                comentario:response.data[i].comentario,
            }
            setComentarios([...comentarios,newComentario])

        }
        
    })
}
 */


  const recargarMateriasFiltro = () => {
    obtenerMateriasFiltro(dataFiltros)
    .then((response) => {
      setMateriasFiltro(response.data)
    })
  }

  
  const botonMasClases = () => {
    setMensajeMasClases("Se cargaron todas las clases disponibles.")

  }
  const recargarClasesFiltradas = () => {
    obtenerClasesFiltradas(dataFiltros,paginado)
      .then((response) => {
        response.data.length === 0 ? setViewAbout(false) : setViewAbout(true) 
        response.data.length === 0 ? setMensajeBusquedaVacia("No se encontraron resultados para los filtros ingresados.") : setMensajeBusquedaVacia("") 
        setClasesFiltradas(response.data)
        setMensajeMasClases("")
        if ( response.data.length >0){
          setBotonMasClases(true)
          setPaginado(paginado+2)
        }
   })};
  
  const handleInputChange = (event) => {
    setDataFiltros({
        ...dataFiltros,
        [event.target.name] : event.target.value
    })
    
  }
  if (submitted === false){
    setSubmitted(true)
    recargarMateriasFiltro();
  }



  return (
        <Container> 
          <Card style={{borderColor:"transparent" ,backgroundColor:'transparent'}}>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1} marginTop={2}>
              <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
                  <FormControl sx={{width:'70%'}}> 
                    <InputLabel style={{color:"#10223D"}}> Materias </InputLabel>
                      <Select 
                        required
                        defaultValue=""
                        name="materia"  
                        value={dataFiltros.materia}  
                        sx={{marginTop:"15px", height:"50px",borderRadius:"15px",borderColor:"#10223D", border: "1px solid #10223D", color: "#10223D", "& .MuiSvgIcon-root": {color: "#10223D",},}}
                        onChange={handleInputChange}
                      >
                        
                        {materiasFiltro.map((elemento) => (<MenuItem value={elemento} key={elemento}> {elemento} </MenuItem>
                      ))}
                      </Select>
                  </FormControl>
                </Grid> 

                <Grid  item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
                  <FormControl sx={{width:'70%'}}> 
                    <InputLabel style={{color:"#10223D"}}> Tipo de Clase </InputLabel>
                      <Select 
                        defaultValue=""
                        name="tipoClase"
                        value={dataFiltros.tipoClase}                      
                        sx={{marginTop:"15px",height:"50px", borderRadius:"15px",borderColor:"#10223D", border: "1px solid #10223D", color: "#10223D", "& .MuiSvgIcon-root": {color: "#10223D",},}}
                        onChange={handleInputChange}
                      >
                        {tipoClaseFilter.map((elemento) => (<MenuItem value={elemento.nombre} key={elemento.id}> {elemento.nombre} </MenuItem>
                      ))}
                      </Select>
                  </FormControl>
                </Grid> 

                <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
                  <FormControl sx={{width:'70%'}}> 
                    <InputLabel style={{color:"#10223D"}}> Frecuencia </InputLabel>
                      <Select 
                        defaultValue=""
                        name="frecuencia"
                        value={dataFiltros.frecuencia}                     
                        sx={{marginTop:"15px",height:"50px",borderRadius:"15px",borderColor:"#10223D", border: "1px solid #10223D", color: "#10223D", "& .MuiSvgIcon-root": {color: "#10223D",},}}
                        onChange={handleInputChange}
                      >
                        
                        {frecuenciaFilter.map((elemento) => (<MenuItem value={elemento.nombre} key={elemento.id}> {elemento.nombre} </MenuItem>
                      ))}
                      </Select>
                  </FormControl>
                </Grid> 

              <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
                <FormControl sx={{width:'70%'}}> 
                  <InputLabel style={{color:"#10223D"}}> Calificacion </InputLabel>
                    <Select 
                      defaultValue=""
                      name="calificacion" 
                      value={dataFiltros.calificacion}                    
                      sx={{marginTop:"15px",height:"50px",borderRadius:"15px",border: "1px solid #10223D",borderColor:"#10223D" ,color: "#10223D", "& .MuiSvgIcon-root": {color: "#10223D",},}}
                      onChange={handleInputChange}
                    >
                      
                      {calificacionFilter.map((elemento) => (<MenuItem value={elemento.nombre} key={elemento.id}> {elemento.nombre} </MenuItem>
                    ))}
                    </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} container marginTop={3} marginBottom={3} direction="row" justifyContent="center" alignItems="center">
              <Button 
                onClick={recargarClasesFiltradas}
                variant='outlined' 
                style={{borderRadius:"15px",borderColor:'#10223D',textTransform:'initial',fontSize: 20,border:"1px solid", color:'#10223D'}}            
                >
                  Buscar</Button> 
              </Grid>
            </Grid>
          </Card>
          <Cards
            clases={clasesFiltradas}
        ></Cards> 
         {viewAbout ? undefined : 
         <Grid container alignContent="center" justifyContent="center">
          <Grid >
            <InputLabel sx={{marginTop:"80px",color:"#10223D", fontSize:"25px"}}> {viewMensajeBusquedaVacia} </InputLabel> 
          </Grid>
            <Grid item sx={{marginTop:"150px",marginBottom:"300px"}}>
              <About sx={{marginTop: "20px"}}></About>
            </Grid>
           
          </Grid>
        }
        {viewBotonMasClases ? 
        <Grid container justifyContent="center" textAlign="center" direction="row">
            <Grid item xs={12} sm={12} md={12} lg={12} >
              <InputLabel sx={{marginTop:"35px",color:"#10223D", fontSize:"25px"}}> {mensajeMasClases} </InputLabel> 
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <LoadingButton variant="contained" onClick={botonMasClases} size='large' sx={{borderRadius:"10px",marginTop:"20px" }}> + clases</LoadingButton>
            </Grid>
          </Grid> : false}
        </Container>  
  
  );
};