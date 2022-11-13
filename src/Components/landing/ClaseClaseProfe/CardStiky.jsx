import * as React from 'react';
import {Paper, Grid, Typography, Card, CardMedia, Modal} from '@mui/material';
import { LoadingButton } from '@mui/lab'
import foto from '../../media/foto.jpg'
import Rating from '@mui/material/Rating';
import ModalNuevaContratacion from "../../Common/ModalContrataciones/ModalNuevaContratacion"
import { useState } from 'react';
import { obtenerAlumno} from "../../../Services/alumnos";


export default function CardSticky (props,children){
  
    const [viewBotonContratar,setViewBotonContratar] = useState(false);
    const [submitted, setSubmitted] = React.useState(false);
    const [mensaje, setMensaje] = React.useState("Registrate o inicia sesion para contratar la clase.");     
    const [isOpenModalNuevaContratacion, setIsOpenModalNuevaContratacion] = useState(false);
    const openModalNuevaContratacion = () =>{setIsOpenModalNuevaContratacion(true)};
    const closeModalNuevaContratacion = () =>{setIsOpenModalNuevaContratacion(false)}; 
  
    if(submitted === false){
        const token = localStorage.getItem("token")
        const rol = localStorage.getItem("rol")
        if (token !== null && rol === "Alumno"){
            setViewBotonContratar(true)
            setSubmitted(true)
        }
    } 
    
    return(

                <Grid container position="fixed" top="120px" xs={12} sm={12} md={12} lg={4}>
                        <Paper elevation={10} sx={{alignItems:"center",maxWidth:"200px", width:"200px",backgroundColor:"#F2EDDB",borderRadius:"20px", marginLeft:"25px",padding:2}}>
                            <Grid container alignItems="center" justifyItems="center" justifyContent="center" textAlign="center">
                                <CardMedia 
                                    component="img"
                                    style={{
                                        border: "1.5px solid #10223D",
                                        width: "180px",
                                        borderRadius:"15px",
                                        maxHeight: "250px",
                                                
                                    }}
                                    display="flex"
                                    image={foto}
                                    alt="foto pefil"       
                                /> 
                                <Typography variant='h6' sx={{color:"#10223D",textAlign:"center",fontWeight:600, marginTop:"10px" ,marginBottom:"1px"}}>
                                    {props.profesor}
                                </Typography> 
                                <Rating readOnly value={props.calificacion} precision={0.5} size="medium" sx={{marginTop:"5px", paddingBottom:"5px"}}></Rating>
                                <Grid container  alignItems="center" justifyItems="center" justifyContent="center" textAlign="center">
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <Typography variant='body2' sx={{color:"#10223D",textAlign:"center",fontWeight:600, marginTop:"1px"}}>
                                            Tarifa
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <Typography variant='h6' sx={{color:"#10223D",textAlign:"center",fontWeight:600, marginBottom:"10px"}}>
                                            ${props.costo}
                                        </Typography> 
                                    </Grid>                                  
                                </Grid>
                               {viewBotonContratar ?
                                <LoadingButton 
                                    onClick={openModalNuevaContratacion}
                                    variant="contained" 
                                    size='large' 
                                    sx={{borderRadius:"10px",marginBottom:"20px" }}
                                > Contratar
                                </LoadingButton>: mensaje}  
                                                           
                            </Grid>  
                            <Modal
                                open={isOpenModalNuevaContratacion}
                                onClose={closeModalNuevaContratacion}
                                materia= {props.materia}
                                id_clase = {props.id_clase}
                                id_user = {props.id_user}
                                apellido= {props.apellido}
                                name= {props.name}
                                tipoClase= {props.tipoClase}
                                frecuencia= {props.frecuencia}
                                duracion= {props.duracion}
                                costo= {props.costo}
                                usuario={props.usuario}
                                apellido_alumno={props.apellido_alumno}
                                name_alumno={props.name_alumno}
                                id_alumno={props.id_alumno}
                                telefono_alumno={props.telefono_alumno}
                                usuario_alumno={props.usuario_alumno}
                            >
                                <ModalNuevaContratacion
                                    materia= {props.materia}
                                    id_clase = {props.id_clase}
                                    id_user = {props.id_user}
                                    apellido= {props.apellido}
                                    name= {props.name}
                                    tipoClase= {props.tipoClase}
                                    frecuencia= {props.frecuencia}
                                    duracion= {props.duracion}
                                    costo= {props.costo}
                                    usuario={props.usuario}
                                    apellido_alumno={props.apellido_alumno}
                                    name_alumno={props.name_alumno}
                                    id_alumno={props.id_alumno}
                                    telefono_alumno={props.telefono_alumno}
                                    usuario_alumno={props.usuario_alumno}
                                    open={isOpenModalNuevaContratacion}
                                    onClose={closeModalNuevaContratacion}
                                ></ModalNuevaContratacion> 

                            </Modal>
                                                                              
                        </Paper>                  
                </Grid>
    )};
