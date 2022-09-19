import * as React from 'react';
import { Button,Card,FormControl,Grid, InputLabel, MenuItem, Select } from '@mui/material';
import data from "../../../data/filtros.json"
import { Container } from '@mui/system';
import { useState } from 'react';
import {
  Link as RouterLink,
} from 'react-router-dom';

const materias = data[0]["Materias"]
const tipoClase = data[1]["tipoClase"]
const frecuencia = data[2]["frecuencia"]
const calificacion = data[3]["Calificacion"]  

export default function Cover() {

  const [formMateria,setMateria] = useState('Todas')
  const [formCalificacion,setCalificacion] = useState('Todas')
  const [formFrecuencia,setFrecuencia] = useState('Todas')
  const [formTipoDeClase,setTipoDeClase] = useState('Todas')

  const handleOnchangeMateria = (event: SelectChangeEven) => {
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
  }  

  return (
        <Container> 
          <Card style={{borderColor:"transparent" ,backgroundColor:'transparent'}}>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1} marginTop={2}>
              <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
                  <FormControl sx={{width:'70%'}}> 
                    <InputLabel style={{color:"#d6533c"}}> Materias </InputLabel>
                      <Select 
                        defaultValue=""
                        name="formMateria"  
                        value={formMateria}  
                        sx={{marginTop:"15px", height:"50px",borderRadius:"15px",borderColor:"#d6533c", border: "1px solid #d6533c", color: "#d6533c", "& .MuiSvgIcon-root": {color: "#d6533c",},}}
                        onChange={handleOnchangeMateria}
                      >
                        
                        {materias.map((elemento) => (<MenuItem value={elemento.nombre} key={elemento.id}> {elemento.nombre} </MenuItem>
                      ))}
                      </Select>
                  </FormControl>
                </Grid> 


                <Grid  item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
                  <FormControl sx={{width:'70%'}}> 
                    <InputLabel style={{color:"#d6533c"}}> Tipo de Clase </InputLabel>
                      <Select 
                        defaultValue=""
                        name="formTipoDeClase"
                        value={formTipoDeClase}                      
                        sx={{marginTop:"15px",height:"50px", borderRadius:"15px",borderColor:"#d6533c", border: "1px solid #d6533c", color: "#d6533c", "& .MuiSvgIcon-root": {color: "#d6533c",},}}
                        onChange={handleOnchangeTipoDeClase}
                      >
                        
                        {tipoClase.map((elemento) => (<MenuItem value={elemento.nombre} key={elemento.id}> {elemento.nombre} </MenuItem>
                      ))}
                      </Select>
                  </FormControl>
                </Grid> 

                <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
                  <FormControl sx={{width:'70%'}}> 
                    <InputLabel style={{color:"#d6533c"}}> Frecuencia </InputLabel>
                      <Select 
                        defaultValue=""
                        name="formFrecuencia"
                        value={formFrecuencia}                     
                        sx={{marginTop:"15px",height:"50px",borderRadius:"15px",borderColor:"#d6533c", border: "1px solid #d6533c", color: "#d6533c", "& .MuiSvgIcon-root": {color: "#d6533c",},}}
                        onChange={handleOnchangeFrecuencia}
                      >
                        
                        {frecuencia.map((elemento) => (<MenuItem value={elemento.nombre} key={elemento.id}> {elemento.nombre} </MenuItem>
                      ))}
                      </Select>
                  </FormControl>
                </Grid> 

              <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
                <FormControl sx={{width:'70%'}}> 
                  <InputLabel style={{color:"#d6533c"}}> Calificacion </InputLabel>
                    <Select 
                      defaultValue=""
                      name="formCalificacion"
                      
                      value={formCalificacion}                    
                      sx={{marginTop:"15px",height:"50px",borderRadius:"15px",border: "1px solid #d6533c",borderColor:"#d6533c" ,color: "#d6533c", "& .MuiSvgIcon-root": {color: "#d6533c",},}}
                      onChange={handleOnchangeCalificacion}
                    >
                      
                      {calificacion.map((elemento) => (<MenuItem value={elemento.nombre} key={elemento.id}> {elemento.nombre} </MenuItem>
                    ))}
                    </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} container marginTop={3} marginBottom={3} direction="row" justifyContent="center" alignItems="center">
              <Button 
                component={RouterLink} to={`/busqueda/${formMateria}/${formTipoDeClase}/${formFrecuencia}/${formCalificacion}`}
                variant='outlined' 
                style={{borderRadius:"15px",borderColor:'#d6533c',textTransform:'initial',fontSize: 20, color:'#d6533c'}}            
                >
                  Buscar</Button> 
              </Grid>
            </Grid>
          </Card>
        </Container>      

  );
};