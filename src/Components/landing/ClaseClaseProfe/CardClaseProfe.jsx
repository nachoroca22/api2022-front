import * as React from 'react';
import {Container, Box, Paper, Grid, Typography, Card, CardMedia, InputLabel} from '@mui/material';
import CardSticky from './CardStiky';
import CommentBox from './CommentBox';
import data from "../../../data/contrataciones.json"
import Footer from "../../Common/FooterGeneral/Footer"
import { useParams } from 'react-router-dom';
import { obtenerComentariosByClase } from '../../../Services/contrataciones';

const contrataciones = data

export default function CardClaseProfe (props){

    let {id}  = useParams();
    const [mensajeSinComentarios, setMensajeSinComentarios] = React.useState("");
    const [comentarios, setComentarios] = React.useState([])
    const [submitted,setSubmitted] = React.useState(false);
    const [clase, setClase] = React.useState({
        id_clase: id,
        paginado: null,
    })

    if (submitted === false){
        setSubmitted(true)
        obtenerComentariosByClase(clase)
        .then((response) => {
            if (response.data.length === 0){
                setMensajeSinComentarios("La clase aún no recibió comentarios.")
            }else{
                setComentarios(response.data)
            }  
        })
    }

    return( 
        <React.Fragment>

        <CardSticky 
            id_user = {props.datosclase.id_user}
            id_clase = {props.datosclase.id_clase}
            tipoClase = {props.datosclase.tipoClase}
            materia = {props.datosclase.materia}
            frecuencia = {props.datosclase.frecuencia}
            duracion = {props.datosclase.duracion}
            name={props.datosclase.name}
            apellido = {props.datosclase.apellido}
            calificacion={props.datosclase.calificacion}
            costo={props.datosclase.costo}
            usuario={props.datosclase.usuario}
            apellido_alumno={props.datosalumno.apellido_alumno}
            name_alumno={props.datosalumno.name_alumno}
            id_alumno={props.datosalumno.id_alumno}
            telefono_alumno={props.datosalumno.telefono_alumno}
            usuario_alumno={props.datosalumno.usuario_alumno}
        >
        </CardSticky>
        <Container  >
            <Grid container  justifyContent="end">
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
                    <Grid container alignItems="center" justifyContent="center">
                        <InputLabel style={{color:"#10223D", fontSize:"25px"}}> {mensajeSinComentarios} </InputLabel> 
                    </Grid>
                    {comentarios.map(comentario => (<CommentBox key={comentario._id} 
                        alumno_nombre={comentario.alumno}
                        calificacion={comentario.calificacion_alumno}
                        comentarios={comentario.comentario}
                        ></CommentBox>))
                    } 
                </Grid>
            </Grid> 
            <Footer></Footer>  
        </Container>
        
        </React.Fragment>

        )
};


