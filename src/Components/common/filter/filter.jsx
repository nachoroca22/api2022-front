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
        <Container > 
          <Card style={{border: "1px solid white",backgroundColor:'transparent', borderRadius:"20px"}}>
            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1} marginTop={2}>
              <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
                  <FormControl sx={{width:'70%'}}> 
                    <InputLabel style={{color:"#ffffff"}}> Materias </InputLabel>
                      <Select 
                        defaultValue=""
                        name="formMateria"  
                        value={formMateria}  
                        sx={{marginTop:"15px", height:"50px",borderRadius:"15px",border: "1px solid white", color: "#ffffff", "& .MuiSvgIcon-root": {color: "white",},}}
                        onChange={handleOnchangeMateria}
                      >
                        
                        {materias.map((elemento) => (<MenuItem value={elemento.nombre} key={elemento.id}> {elemento.nombre} </MenuItem>
                      ))}
                      </Select>
                  </FormControl>
                </Grid> 


                <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
                  <FormControl sx={{width:'70%'}}> 
                    <InputLabel style={{color:"#ffffff"}}> Tipo de Clase </InputLabel>
                      <Select 
                        defaultValue=""
                        name="formTipoDeClase"
                        value={formTipoDeClase}                      
                        sx={{marginTop:"15px",height:"50px", borderRadius:"15px",border: "1px solid white", color: "#ffffff", "& .MuiSvgIcon-root": {color: "white",},}}
                        onChange={handleOnchangeTipoDeClase}
                      >
                        
                        {tipoClase.map((elemento) => (<MenuItem value={elemento.nombre} key={elemento.id}> {elemento.nombre} </MenuItem>
                      ))}
                      </Select>
                  </FormControl>
                </Grid> 

                <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
                  <FormControl sx={{width:'70%'}}> 
                    <InputLabel style={{color:"#ffffff"}}> Frecuencia </InputLabel>
                      <Select 
                        defaultValue=""
                        name="formFrecuencia"
                        value={formFrecuencia}                     
                        sx={{marginTop:"15px",height:"50px",borderRadius:"15px",border: "1px solid white", color: "#ffffff", "& .MuiSvgIcon-root": {color: "white",},}}
                        onChange={handleOnchangeFrecuencia}
                      >
                        
                        {frecuencia.map((elemento) => (<MenuItem value={elemento.nombre} key={elemento.id}> {elemento.nombre} </MenuItem>
                      ))}
                      </Select>
                  </FormControl>
                </Grid> 

              <Grid item xs={6} sm={6} md={3} lg={3} container direction="row" justifyContent="center" alignItems="center">
                <FormControl sx={{width:'70%'}}> 
                  <InputLabel style={{color:"#ffffff"}}> Calificacion </InputLabel>
                    <Select 
                      defaultValue=""
                      name="formCalificacion"
                      
                      value={formCalificacion}                    
                      sx={{marginTop:"15px",height:"50px",borderRadius:"15px",border: "1px solid white", color: "#ffffff", "& .MuiSvgIcon-root": {color: "white",},}}
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
                style={{borderRadius:"15px",borderColor:'#ffffff',textTransform:'initial',fontSize: 20, color:'white'}}            
                >
                  Buscar</Button> 
              </Grid>
            </Grid>
          </Card>
        </Container>      

  );
};