import React from 'react'
import { Grid,Paper,InputLabel, TextField, FormControl, MenuItem, Select} from '@mui/material'
import { LoadingButton } from '@mui/lab';
import { crearClase } from '../../Services/clases';


export default function ModalNewClases (props){
    const paperStyle={backgroundColor:"#F2EDDB", borderRadius:"20px", padding:20,height:'flex',width:450, margin:"50px auto"};
    const frecuencia = ["Unica","Semanal","Mensual"]
    const tipoClase = ["Individual","Grupal"]

    const [newClase,setNewClase] = React.useState({
        id_profesor: localStorage.getItem("id"),
        materia: "",
        tipoClase: "",
        costo: "",
        frecuencia: "",
        duracion: "",
        descripcion: ""
    });

    const [mensajeNewClase, setMensajeNewClase] = React.useState("");
    const [botonCerrar, setBotonCerrar] = React.useState(false);

    const handleSubmiteed = (event) => {
        event.preventDefault();
        if (newClase.materia==="" || newClase.tipoClase==="" ||newClase.costo==="" || newClase.frecuencia==="" || newClase.duracion==="" || newClase.descripcion===""){
            setMensajeNewClase("Debe completar todos los datos.")
        }else {
            crearClase(newClase)
             .then((response) => {
            setMensajeNewClase("Se creo la clase: " + newClase.materia)
        })
        setBotonCerrar(true)
        }
    }


    const handleInputChange = (event) => {
        setNewClase({
            ...newClase,
            [event.target.name] : event.target.value
        })
    }

    return(
                <Paper elevation={10} style={paperStyle}>
                    <Grid container  alignItems="center">
                        <Grid container alignItems="center" justifyContent="center" sx={{borderBottom: "1px solid #10223D", marginBottom:"5px"}}>
                            <Grid container alignItems="center" justifyContent="center">
                                <InputLabel style={{color:"#d6533c", fontSize:"25px"}}> Información de la Clase </InputLabel> 
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Materia:  </InputLabel>   
                            <FormControl sx={{width:"84%"}}>
                                <TextField onChange={handleInputChange} name="materia" variant="outlined" size="small" style={{color:"#10223D", marginLeft:"40px", marginTop:'2px'}}>  </TextField>              
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Tipo de clase:  </InputLabel>   
                            <FormControl sx={{width:"75%"}}>
                                <Select 
                                        size="small"
                                        defaultValue=""
                                        onChange={handleInputChange} 
                                        name="tipoClase"
                                        sx={{color:"#10223D", marginLeft:"1px",marginTop:"2px"}}
                                    >
                                        
                                        {tipoClase.map((elemento) => (<MenuItem value={elemento} key={elemento}> {elemento} </MenuItem>
                                    ))}
                                    </Select>

                            </FormControl>
                                         
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'5px', fontSize:"15px"}}> Costo ($):  </InputLabel>   
                            <FormControl sx={{width:"82%"}}>
                                <TextField onChange={handleInputChange} InputProps={{inputProps: { min: 0 }}} name="costo" variant="outlined" type="number" size="small" style={{color:"#10223D", marginLeft:"28px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px",marginTop:'5px', fontSize:"15px"}}> Frecuencia:  </InputLabel>   
                            <FormControl sx={{width:"79%"}}>
                                <Select 
                                    size="small"
                                    defaultValue=""
                                    onChange={handleInputChange} 
                                    name="frecuencia"
                                    sx={{color:"#10223D", marginLeft:"16px",marginTop:"2px"}}
                                >
                                    
                                    {frecuencia.map((elemento) => (<MenuItem value={elemento} key={elemento}> {elemento} </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center">
                            <InputLabel style={{color:"#d6533c", marginRight:"5px",marginTop:'5px', fontSize:"15px"}}> Duración (hs):  </InputLabel>   
                            <FormControl sx={{width:"75%"}}>
                                <TextField onChange={handleInputChange} name="duracion" InputProps={{inputProps: { min: 0 }}} variant="outlined" type="number" size="small" style={{color:"#10223D", marginLeft:"0px",marginTop:"2px"}}> </TextField> 
                            </FormControl>
                        </Grid>
                        <Grid container alignItems="center"  sx={{borderBottom: "1px solid #10223D", paddingBottom:"15px"}}>
                            <InputLabel style={{color:"#d6533c", marginRight:"5px", marginTop:'10px', fontSize:"15px"}}> Descripción:  </InputLabel>   
                            <FormControl sx={{width:"100%"}}>
                                <TextField onChange={handleInputChange} multiline name="descripcion" variant="outlined" size="small" style={{color:"#10223D",marginTop:"2px"}}> </TextField> 
                            </FormControl>         
                        </Grid>
                        <Grid container alignItems="center" justifyContent="center">
                                <InputLabel style={{color:"#10223D", fontSize:"19px"}}> {mensajeNewClase} </InputLabel> 
                        </Grid>
                        <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center">
                            {botonCerrar ? undefined : 
                                <Grid>
                                    <LoadingButton onClick={handleSubmiteed} variant="contained" sx={{borderRadius:"10px",marginTop:"15px", marginRight:"10px" }}> Guardar</LoadingButton> 
                                    <LoadingButton onClick={()=>props.onClose()} variant="contained" sx={{borderRadius:"10px",marginTop:"15px", marginRight:"10px" }}> Cerrar</LoadingButton>
                                </Grid>}
                            {botonCerrar ? <LoadingButton 
                                onClick={()=>props.onClose()} 
                                variant="contained" 
                                sx={{borderRadius:"10px",marginTop:"15px" }}
                                > Cerrar
                            </LoadingButton> : undefined} 
                        </Grid>
                    </Grid>
                </Paper> 

    )
};