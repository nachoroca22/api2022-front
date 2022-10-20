import * as React from 'react';
import {TextField, Container, FormControl, MenuItem,Select, Grid, Typography, Card, CardMedia,InputLabel} from '@mui/material';
import foto from "../media/foto.jpg"
import { LoadingButton } from '@mui/lab'


export default function Perfil() {

    return (
        <Container> 
                <Grid container direction="row" justifyContent="center" alignItems="center" marginTop={1}>   
                    <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center" marginBottom="30px">
                        <Typography color="#10223D" variant="h4" noWrap component="div" >
                            Hola *Nombre Alumno*!
                        </Typography>
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
                                    <TextField size='small' label="Nombre" id="Nombre"></TextField>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"93%"}}>
                                    <TextField size='small' label="Apellido" id="Apellido"></TextField>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"95%"}}>
                                    <Select size='small'>
                                        <MenuItem value={10}>Femenino</MenuItem>
                                        <MenuItem value={20}>Masculino</MenuItem>
                                        <MenuItem value={30}>No binario</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"95%"}}>
                                <TextField size='small' id="date" type="date"></TextField>
                                </FormControl>
                            </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={12} lg={12} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"98%"}}>
                                    <TextField size='small' label="Nueva password" id="Password" type="password"></TextField>
                                </FormControl>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid container  xs={12} sm={12} md={12} lg={12} direction="row" justifyContent="center" alignItems="center" marginTop="15px">
                            <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center" alignItems="center">
                                <FormControl  sx={{color:"#d6533c", minWidth:"98%"}}>
                                    <TextField size='small' label="Email" id="Email"></TextField>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <InputLabel style={{color:"#10223D", marginTop:'10px', fontSize:"19px"}}> Estudios cursados:  </InputLabel>   
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <InputLabel style={{color:"#10223D", marginTop:'10px', fontSize:"17px"}}> Primaria:  </InputLabel>   
                                <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                    <FormControl sx={{minWidth:"70%",marginLeft:"28px"}}>
                                        <Select size='small'>
                                            <MenuItem value={10}>Finalizado</MenuItem>
                                            <MenuItem value={20}>En curso</MenuItem>
                                            <MenuItem value={30}>No realizado</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <InputLabel style={{color:"#10223D", marginTop:'10px', fontSize:"17px"}}> Secundaria:  </InputLabel>   
                                <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                    <FormControl sx={{minWidth:"70%",marginLeft:"7px"}}>
                                        <Select size='small'>
                                            <MenuItem value={10}>Finalizado</MenuItem>
                                            <MenuItem value={20}>En curso</MenuItem>
                                            <MenuItem value={30}>No realizado</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <InputLabel style={{color:"#10223D", marginTop:'10px', fontSize:"17px"}}> Terciario:  </InputLabel>   
                                <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                    <FormControl sx={{minWidth:"70%",marginLeft:"30px"}}>
                                        <Select size='small'>
                                            <MenuItem value={10}>Finalizado</MenuItem>
                                            <MenuItem value={20}>En curso</MenuItem>
                                            <MenuItem value={30}>No realizado</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <InputLabel style={{color:"#10223D", marginTop:'10px', fontSize:"17px"}}> Universitario:  </InputLabel>   
                                <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                    <FormControl sx={{minWidth:"70%"}}>
                                        <Select size='small'>
                                            <MenuItem value={10}>Finalizado</MenuItem>
                                            <MenuItem value={20}>En curso</MenuItem>
                                            <MenuItem value={30}>No realizado</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
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
