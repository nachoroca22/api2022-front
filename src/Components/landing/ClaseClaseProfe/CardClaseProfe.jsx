import * as React from 'react';
import { useState } from 'react';
import Footer from "../../Common/FooterGeneral/Footer";
import {Paper, Grid, Typography, CardMedia, Modal, Container, Box} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import ModalNuevaContratacion from "../../Common/ModalContrataciones/ModalNuevaContratacion"
import { useParams } from 'react-router-dom';

import Rating from '@mui/material/Rating';
import { obtenerComentariosByClase } from '../../../Services/contrataciones';



export default function CardClaseProfe (props){

    let {id}  = useParams();
    const [viewBotonContratar,setViewBotonContratar] = useState(false);
    const [comentarios, setComentarios] = React.useState([])
    const [submitted, setSubmitted] = React.useState(false);
    const [buscarComentarios, setBuscarComentarios] = React.useState(false);
    const [mensaje, setMensaje] = React.useState("Regístrate o inicia sesión como alumno para contratar la clase.");     
    const [isOpenModalNuevaContratacion, setIsOpenModalNuevaContratacion] = useState(false);
    const openModalNuevaContratacion = () =>{setIsOpenModalNuevaContratacion(true)};
    const closeModalNuevaContratacion = () =>{setIsOpenModalNuevaContratacion(false)}; 
    const [clase, setClase] = React.useState({
        id_clase: id,
        paginado: 0,
    })
    
    if(submitted === false){
        const token = localStorage.getItem("token")
        const rol = localStorage.getItem("rol")
        if (token !== null && rol === "Alumno"){
            setViewBotonContratar(true)
            setSubmitted(true)
        }
    } 

    if (buscarComentarios === false){
        setBuscarComentarios(true)
        obtenerComentariosByClase(clase)
        .then((response) => {
                 //console.log("tota",response.data[0].totalCount)
                //setTotalComentarios(response.data[0].totalCount)
                setComentarios(...comentarios,response.data)
                setClase({
                    id_clase: id,
                    paginado: clase.paginado+2});
        })

    }

    const cargarMasComentarios = () => {
        setClase({
            id_clase: id,
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

    return( 
        
        <React.Fragment>
        <Container>
            <Grid container justifyContent="center" alignItems="center">
                <Paper elevation={10} sx={{alignItems:"center",maxWidth:"600px", width:"600px",backgroundColor:"#F2EDDB",borderRadius:"20px",padding:2}}>
                    <Grid container alignItems="center" justifyItems="center" justifyContent="center" textAlign="center">
                        <Grid>
                            <CardMedia component="img"
                                style={{
                                    border: "1.5px solid #10223D",
                                    width: "180px",
                                    borderRadius:"15px",
                                    maxHeight: "250px",                
                                    }}
                                    //display="flex"
                                    image={props.datosclase.nombreImagen}
                                    alt="foto pefil"       
                            /> 
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" >
                        <Grid item  xs={12} sm={12} md={12} lg={12}>
                            <Typography variant='h6' sx={{color:"#10223D",textAlign:"center",fontWeight:600, marginTop:"10px" ,marginBottom:"1px"}}>
                                    {props.datosclase.name} {props.datosclase.apellido} 
                            </Typography> 
                        </Grid>
                        <Grid  container justifyContent="center">
                            <Rating readOnly value={props.datosclase.calificacion} size="medium" sx={{marginTop:"5px", paddingBottom:"5px"}}></Rating>
                        </Grid>
                        <Grid item  xs={12} sm={12} md={12} lg={12}>
                            <Typography variant='body2' sx={{color:"#10223D",textAlign:"center",fontWeight:600, marginTop:"1px"}}>
                                Tarifa
                            </Typography>
                            <Typography variant='h6' sx={{color:"#10223D",textAlign:"center",fontWeight:600, marginBottom:"10px"}}>
                                $ {props.datosclase.costo} 
                            </Typography> 
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
                </Paper>   
                <Modal
                                open={isOpenModalNuevaContratacion}
                                onClose={closeModalNuevaContratacion}
                                materia= {props.datosclase.materia}
                                id_clase = {props.datosclase.id_clase}
                                id_user = {props.datosclase.id_user}
                                apellido= {props.datosclase.apellido}
                                name= {props.datosclase.name}
                                tipoClase= {props.datosclase.tipoClase}
                                frecuencia= {props.datosclase.frecuencia}
                                duracion= {props.datosclase.duracion}
                                costo= {props.datosclase.costo}
                                usuario={props.datosclase.usuario}
                            >
                                <ModalNuevaContratacion
                                    materia= {props.datosclase.materia}
                                    id_clase = {props.datosclase.id_clase}
                                    id_user = {props.datosclase.id_user}
                                    apellido= {props.datosclase.apellido}
                                    name= {props.datosclase.name}
                                    tipoClase= {props.datosclase.tipoClase}
                                    frecuencia= {props.datosclase.frecuencia}
                                    duracion= {props.datosclase.duracion}
                                    costo= {props.datosclase.costo}
                                    usuario={props.datosclase.usuario}
                                    open={isOpenModalNuevaContratacion}
                                    onClose={closeModalNuevaContratacion}
                                ></ModalNuevaContratacion> 

                            </Modal>
            </Grid>

            <Grid container  justifyContent="center">
                <Grid item xs={6} sm={8} md={9} lg={10}></Grid>
                <Grid item xs={6} sm={8} md={9} lg={10}>
                    <Typography variant='h3' sx={{color:"#10223D",textAlign:"center",fontWeight:600, marginTop:"30px",padding:2 ,marginBottom:"1px"}}>
                        {props.datosclase.materia}
                    </Typography>  
                </Grid>
                <Grid item xs={6} sm={8} md={9} lg={10}></Grid>
                <Grid item xs={6} sm={8} md={9} lg={10}>
                                 
                </Grid>  
                <Grid item xs={6} sm={8} md={9} lg={10}></Grid>
                <Grid item xs={6} sm={8} md={9} lg={10}>
                    <Typography variant='h4' sx={{color:"#10223D",textAlign:"left",fontWeight:600, marginTop:"30px",padding:2 ,marginBottom:"1px"}}>
                        Acerca de la clase
                    </Typography>  
                    <Paper elevation={10} sx={{alignItems:"center",backgroundColor:"#d6533c",borderRadius:"20px", marginLeft:"10px",padding:2, marginTop:"20px"}}>
                        <Typography variant='h6' sx={{color:"#F2EDDB",textAlign:"left",fontWeight:600, marginTop:"10px"}}>
                            {props.datosclase.descripcion}
                        </Typography>  
                    </Paper>  
                    <Typography variant='h4' sx={{color:"#10223D",textAlign:"left",fontWeight:600, marginTop:"30px",padding:2 ,marginBottom:"1px"}}>
                        Sobre {props.datosclase.name}
                    </Typography> 
                    <Paper elevation={10} sx={{alignItems:"center",backgroundColor:"#d6533c",borderRadius:"20px", marginLeft:"10px",padding:2, marginTop:"20px"}}>
                        <Typography variant='h6' sx={{color:"#F2EDDB",textAlign:"left",fontWeight:600, marginTop:"10px"}}>
                            {props.datosclase.presentacion}
                        </Typography>  
                    </Paper> 
                    <Typography variant='h4' sx={{color:"#10223D",textAlign:"left",fontWeight:600, marginTop:"30px",padding:2 ,marginBottom:"1px"}}>
                        Estudios
                    </Typography> 
                    <Paper elevation={10} sx={{alignItems:"center",backgroundColor:"#d6533c",borderRadius:"20px", marginLeft:"10px",padding:2, marginTop:"20px"}}>
                        <Typography variant='h6' sx={{color:"#F2EDDB",textAlign:"left",fontWeight:600, marginTop:"10px"}}>
                            {props.datosclase.estudios}
                        </Typography>  
                    </Paper> 
                </Grid> 

                <Grid item xs={6} sm={8} md={9} lg={10}>
                    <Typography variant='h4' sx={{color:"#10223D",textAlign:"left",fontWeight:600, marginTop:"30px",padding:2 ,marginBottom:"1px"}}>
                        Opiniones
                    </Typography> 

                    
                    
                    {comentarios.map((elemento) => (<Grid key={elemento._id} >
                        <Box sx={{border: "1px double #d6533c", borderRadius:"20px", marginBottom:"15px", marginLeft:"10px",paddingLeft:"15px",paddingRight:"15px",paddingBottom:"15px"}}>
                            <Grid container>
                                <Grid item xs={6} sm={6} md={6} lg={6}>
                                    <Typography variant='h6' sx={{color:"#10223D",textAlign:"left",fontWeight:600, marginTop:"15px", marginBottom:"10px"}}>
                                        {elemento.alumno}
                                    </Typography>
                                </Grid>   
                                <Grid item textAlign="end" xs={6} sm={6} md={6} lg={6} sx={{paddingTop:"15px"}}>
                                    <Rating readOnly value={elemento.calificacion_alumno} precision={1} ></Rating>
                                </Grid>  
                            </Grid>     
                            <Typography variant='body' sx={{color:"#10223D",textAlign:"left",fontWeight:600}}>
                            {elemento.comentario}
                            </Typography>
                        </Box>     
                    </Grid>))}

                    <Grid container justifyContent="center">
                        <LoadingButton variant="contained"onClick={()=>cargarMasComentarios()} size='large' sx={{borderRadius:"10px",marginTop:"20px" }}> + comentarios</LoadingButton>
                    </Grid>
                </Grid>
            </Grid> 
            <Footer></Footer>  
        </Container>
        
        </React.Fragment>

        )
};


