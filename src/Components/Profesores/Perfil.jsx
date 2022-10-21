import * as React from 'react';
import {TextField, Container, FormControl, MenuItem,Select, Grid, Typography, Card, CardMedia} from '@mui/material';
import foto from "../media/foto.jpg"
import { LoadingButton } from '@mui/lab'
import { obtenerProfesor } from "../../Services/profesores";

export default function Perfil() {
    const token = sessionStorage.getItem("token")
    const id = sessionStorage.getItem("id")
    const [profesor, setProfesor] = React.useState(null);
    const [id_user,setIdUser] = React.useState(null);


    const recargarProfesor = () => {
        console.log("OYEEEEE",id)
        obtenerProfesor(id)
          .then((response) => {
            setProfesor(response?.status === 200 ? response.data.docs : []);
          }) 

      };
    
    if (profesor === null) {
        recargarProfesor();
      }
    
    return (
        
        <Container> 
                <Grid container direction="row" justifyContent="center" alignItems="center" marginTop={1}>   
                    <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center" marginBottom="30px">
                        <Typography color="#10223D" variant="h4" noWrap component="div" >
                            Hola *Nombre Profesor*!
                            
                        </Typography>
                    </Grid>
                    
                    <Grid container xs={12} sm={12} md={12} lg={12} marginBottom={5}  justifyContent="center" justifyItems="center">
                        <Card style={{borderRadius:"20px"}}>
                            <CardMedia
                                component="img"
                                style={{
                                    paddingTop:"2px",
                                    width: "auto",
                                    maxHeight: "200px",
                                    borderRadius:"20px"
                                }}
                                image={foto}
                            >
                            </CardMedia>    
                        </Card>
                    </Grid>
                    <Card 
                        style={{borderColor:"#FFC2B4",
                                backgroundColor:'transparent', 
                                width:"50%", 
                                padding:"20px",
                                border: "1px solid #10223D",
                                borderRadius:"20px"}}>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            
                            <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"93%"}}>
                                    <TextField label="Nombre" id="Nombre"></TextField>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"93%"}}>
                                    <TextField label="Apellido" id="Apellido"></TextField>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"95%"}}>
                                    <Select>
                                        <MenuItem value={10}>Femenino</MenuItem>
                                        <MenuItem value={20}>Masculino</MenuItem>
                                        <MenuItem value={30}>No binario</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"95%"}}>
                                <TextField  id="date" type="date"></TextField>
                                </FormControl>
                            </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={12} lg={12} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"96%"}}>
                                    <TextField label="Nueva password" id="Password" type="password"></TextField>
                                </FormControl>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid container  xs={12} sm={12} md={12} lg={12} direction="row" justifyContent="center" alignItems="center" marginTop="15px">
                            <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center" alignItems="center">
                                <FormControl  sx={{color:"#d6533c", minWidth:"96%"}}>
                                    <TextField label="Email" id="Email"></TextField>
                                </FormControl>
                            </Grid>
                            <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center" alignItems="center" marginTop="15px">
                                <FormControl  sx={{color:"#d6533c", minWidth:"96%"}}>
                                    <TextField label="Estudios" id="Estudios" multiline minRows={3} maxRows={20}></TextField>
                                </FormControl>
                            </Grid>
                            <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center" alignItems="center" marginTop="15px">
                                <FormControl  sx={{color:"#d6533c", minWidth:"96%"}}>
                                    <TextField label="Presentacion" id="Presentacion" multiline minRows={3} maxRows={20}></TextField>
                                </FormControl>
                            </Grid>
                            <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center">
                                <LoadingButton variant="contained" sx={{borderRadius:"10px",marginTop:"15px" }}> Actualizar</LoadingButton> 
                            </Grid>
                        </Grid>    
                    </Card>
                </Grid>
        </Container>  
    );

}
