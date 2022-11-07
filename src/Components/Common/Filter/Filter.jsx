import * as React from 'react';
import { Button,Card,FormControl,Grid, InputLabel, MenuItem, Select } from '@mui/material';
import data from "../../../data/filtros.json"
import { Container } from '@mui/system';
import { useState } from 'react';
import {Link as RouterLink,} from 'react-router-dom';
import Cards from "../Cards/Cards";
import { obtenerMateriasFiltro } from '../../../Services/clases';
import {obtenerClasesFiltradas} from "../../../Services/clases"

const tipoClase = [
    {"id":0,
    "nombre": "Todas"
    },        
    {"id":1,
    "nombre": "Grupal"
    },
    {"id":2,
    "nombre": "Individual"
    }
  ]
const frecuencia = [
    {"id":0,
    "nombre": "Todas"
    },        
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
const calificacion = [
    {"id":0,
    "nombre": "Todas"
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

  const[ dataFiltros, setDataFiltros]= React.useState({
    materia: undefined,
    calificacion: undefined,
    frecuencia: undefined,
    tipoClase: undefined,
  })
    


/*   const [formMateria,setMateria] = useState('Todas')
  const [formCalificacion,setCalificacion] = useState('Todas')
  const [formFrecuencia,setFrecuencia] = useState('Todas')
  const [formTipoDeClase,setTipoDeClase] = useState('Todas') */
  const [clasesFiltradas, setClasesFiltradas] = React.useState([]);
  const [materiasFiltro, setMateriasFiltro]=React.useState([]);
  const [submitted, setSubmitted] = React.useState(false);

  const recargarMateriasFiltro = () => {
    console.log("dataFiltros",dataFiltros)
    obtenerMateriasFiltro(dataFiltros)
    .then((response) => {
      setMateriasFiltro(response.data)
    })
    
  }

  if (submitted === false){
    setSubmitted(true)
    recargarMateriasFiltro();
  }

  const recargarClasesFiltradas = () => {
    obtenerClasesFiltradas(dataFiltros)
      .then((response) => {
        setClasesFiltradas(response.data)
   })};
  
  const handleInputChange = (event) => {
    console.log(event.target.value)
    console.log(dataFiltros)
    setDataFiltros({
        ...dataFiltros,
        [event.target.name] : event.target.value
    })
  }

 /*  const handleOnchangeMateria = (event: SelectChangeEven) => {
    setMateria(event.target.value);   
  }

  const handleOnchangeCalificacion = (event: SelectChangeEven) => {
    setCalificacion(event.target.value); 
  }

  const handleOnchangeFrecuencia = (event: SelectChangeEven) => {
    setFrecuencia(event.target.value); 
  }

  const handleOnchangeTipoDeClase = (event: SelectChangeEven) => {
    setTipoDeClase(event.target.value);  
  }   */


  return (
        <Container> 
          <Card style={{borderColor:"transparent" ,backgroundColor:'transparent'}}>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1} marginTop={2}>
              <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
                  <FormControl sx={{width:'70%'}}> 
                    <InputLabel style={{color:"#10223D"}}> Materias </InputLabel>
                      <Select 
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
                        
                        {tipoClase.map((elemento) => (<MenuItem value={elemento.nombre} key={elemento.id}> {elemento.nombre} </MenuItem>
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
                        
                        {frecuencia.map((elemento) => (<MenuItem value={elemento.nombre} key={elemento.id}> {elemento.nombre} </MenuItem>
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
                      
                      {calificacion.map((elemento) => (<MenuItem value={elemento.nombre} key={elemento.id}> {elemento.nombre} </MenuItem>
                    ))}
                    </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} container marginTop={3} marginBottom={3} direction="row" justifyContent="center" alignItems="center">
              <Button 
                onClick={recargarClasesFiltradas}
                component={RouterLink} to={`/busqueda/${dataFiltros.materia}/${dataFiltros.tipoClase}/${dataFiltros.frecuencia}/${dataFiltros.calificacion}`}
                variant='outlined' 
                style={{borderRadius:"15px",borderColor:'#10223D',textTransform:'initial',fontSize: 20, color:'#10223D'}}            
                >
                  Buscar</Button> 
              </Grid>
            </Grid>
          </Card>
          <Cards
            clases={clasesFiltradas}
            //filtros={dataFiltros}
            /* materia={formMateria}
            tipoClase={formTipoDeClase}
            frecuencia={formFrecuencia}
            calificacion={formCalificacion} */
        ></Cards> 
        </Container>  
  
  );
};