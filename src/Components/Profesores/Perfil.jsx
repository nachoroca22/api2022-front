import React,{useEffect} from "react";
import {TextField, Button ,InputLabel,Container, FormControl, MenuItem,Select, Grid, Typography, Card, CardMedia} from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CustomFileInput from "../CustomFileInput/CustomFileInput.js";
import { LoadingButton } from '@mui/lab' 
import { obtenerProfesor,actualizarProfesor,getImagenesByUser,uploadFileImg,guardarImgUser} from "../../Services/profesores";
import {setPasswordProfesor} from "../../Services/login"

export default function Perfil() {
 

    const initialProfesor = {
        id_user: null,
        nombreImagen: "",
        apellido: "",
        name: "",
        usuario: "",
        password:"",
        rol: "",
        estado: null,
        telefono: "",
        fechaIngreso: "",
        fechaNac: "",  
        genero: "",
        presentacion: "",    
        estudios: "",
    }
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")
    const [profesor, setProfesor] = React.useState(initialProfesor);
    const [submitted, setSubmitted] = React.useState(false);
    const [mensajeUpdatePerfil, setMensajeUpdatePerfil] = React.useState("");
    const [mensajeUpdateFoto, setMensajeUpdateFoto] = React.useState("");
    const [imgAux,setImgAux]= React.useState('');
    const delay = ms => new Promise(res => setTimeout(res, ms));

    useEffect(()=>{
        
        async function componentDidMount() 
        {
          await delay(3000);
          //traer imagenes de User
          obtenerProfesor(id)
          .then((response) => {
            setProfesor( 
                {id_user: response.data.id_user,
                nombreImagen: response.data.nombreImagen,
                apellido: response.data.apellido,
                name: response.data.name,
                usuario: response.data.usuario,
                telefono: response.data.telefono,
                rol: response.data.rol,
                estado: response.data.estado,
                fechaIngreso: response.data.fechaIngreso,
                fechaNac: response.data.fechaNac,
                genero: response.data.genero,
                presentacion: response.data.presentacion,  
                estudios: response.data.estudios}); 
                }) 
        }
        componentDidMount();
      },[imgAux]);
 
    const guardarImagen=()=>{
        subirImagen();
      }
      const subirImagen= async function ()
      {
        let files=[];
        let nombres=[];
        let archivoImagen = '';
        
        if (imgAux!=='')
        {
          console.log("imgAux",imgAux);
          files.push(imgAux);
          //buscar extension archivo
          let archivoOrig = imgAux.name;
          let posExt = archivoOrig.indexOf('.');
          let extension = archivoOrig.substring(posExt,archivoOrig.length);
          let aleatorio = Math.random().toString().substring(2,15);
          nombres.push("img"+"_"+localStorage.getItem('id')+"_"+aleatorio+extension);
          //subir archivo a servidor
          archivoImagen = await uploadFileImg(files,nombres);
          //Si la imagen se subio bien la guardo en la BD
          if (archivoImagen.ok)
          {
            let imgUser={
              id_user:localStorage.getItem('id'),
              imagen: nombres[0]
            }
            let rdo = await guardarImgUser(imgUser);
            if (rdo)
            {
              setMensajeUpdateFoto("Tu imagen se ha almacenado correctamente.")
              //getImagenes();
            }
            setSubmitted(false)
          }
          else
          {
            setMensajeUpdateFoto("Ocurrio un error al subir tu imagen al servidor. Intenta mas tarde.")
          } 
        }
      }


    const recargarProfesor = () => {

        obtenerProfesor(id)
          .then((response) => {
            setProfesor( 
                {id_user: response.data.id_user,
                nombreImagen: response.data.nombreImagen,
                apellido: response.data.apellido,
                name: response.data.name,
                usuario: response.data.usuario,
                telefono: response.data.telefono,
                rol: response.data.rol,
                estado: response.data.estado,
                fechaIngreso: response.data.fechaIngreso,
                fechaNac: response.data.fechaNac,
                genero: response.data.genero,
                presentacion: response.data.presentacion,  
                estudios: response.data.estudios}); 
                })

      };
    
    if (submitted === false){
        setSubmitted(true)
        recargarProfesor();    
    }
        
    const handleChange = (e) => {
        setProfesor((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const changePassword = () => {
        if(profesor.password === ""){
            setMensajeUpdatePerfil("Debe ingresar una password")
        }else{
            setPasswordProfesor(profesor)
            .then((response) => {
                response.message === "Reset Password Profesor" ? setMensajeUpdatePerfil("Se cambio la password.") : setMensajeUpdatePerfil("No se pudo cambiar la password.")
            })
        }
    }

    const handleActualizarProfesor = () => {
        actualizarProfesor(profesor)
          .then((response) => {
            response.message === "Succesfully Updated Profesor" ? setMensajeUpdatePerfil("Se actualizo el perfil.") : setMensajeUpdatePerfil("No se pudo actualizar el perfil.")
        
      })
    }
    console.log("imaaaa",profesor.nombreImagen)
    
    return (
        
        <Container> 
                <Grid container direction="row" justifyContent="center" alignItems="center" marginTop={1}>   
                    <Grid item xs={12} sm={4} md={12} lg={12} textAlign="center" marginBottom="30px">
                        <Typography color="#10223D" variant="h4" noWrap component="div" sx={{marginBottom:'20px'}}>
                            ¡Hola {profesor.name}! 
                        </Typography>
                        <Typography color="#d6533c" variant="h5" noWrap component="div" >
                            Recorda siempre tener actualizado tu perfil.   
                        </Typography>
                    </Grid>
                </Grid>   
                <Grid container direction="row" justifyContent="center" alignItems="center" textAlign="center" marginTop={1} marginBottom="40px">   
                    <Grid item xs={12} sm={4} md={4} lg={4} >
                        <Card style={{borderRadius:"20px",maxWidth: 200,margin: "0 auto",padding: "0.1em",}}>
                            <CardMedia component="img" sx={{ padding: "0 0 0 0", objectFit: "contain",borderRadius:"20px"}}image={profesor.nombreImagen}></CardMedia>
                        </Card>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center"> 
                        <InputLabel style={{color:"#10223D", fontSize:"19px",marginTop:"15px"}}> {mensajeUpdateFoto} </InputLabel> 
                    </Grid>
                    {/* <Grid item xs={2} sm={2} md={2} lg={2} alignItems="center">
                        <input style={{ display: "none" }} id="contained-button-file" type="file" name='files' onChange={(e)=>seleccionarFoto(e.target.files)}/>
                        <label htmlFor="contained-button-file">
                            <AddAPhotoIcon sx={{cursor: "pointer",color: "#d6533c", marginBottom:"10px" }}></AddAPhotoIcon>
                        </label>
                        <Typography color="#d6533c" variant="body" noWrap component="div" marginBottom="10px" >
                            {nombreFoto}   
                        </Typography>
                        <LoadingButton onClick={()=>{guardarImagen()}} size='small' variant="contained" sx={{borderRadius:"10px" }}> Subir </LoadingButton>     
                    </Grid> */}

                </Grid> 

                {/* //aca arranca lo de la profe */}
 
                <Grid container direction="row" justifyItems="center" justifyContent="center" alignItems="center" marginTop={0}>
                    <Grid item  xs={12} sm={6} md={6} lg={6}>
                        <CustomFileInput
                            //className={classes.footerButtons}
                            formControlProps={{
                            fullWidth: true
                            }}
                            getImagen={(i)=>setImgAux(i)}
                            inputProps={{ 
                            placeholder: "Selecciona la imagen a subir. Recorda que el tamaño maximo de la imagen es 3MB."
                            
                            }}
                            endButton={{
                            buttonProps: {
                            round: true,
                            color: "primary",
                            justIcon: true,
                            fileButton: true
                            },
                            icon: <AddAPhotoIcon />
                        }}
                        />
                    </Grid>    
                </Grid>
                <Grid container justifyItems="center" justifyContent="center"  alignItems="center">
                    <LoadingButton size='small' variant="contained" sx={{marginBottom:"20px", borderRadius:"10px" }}
                        onClick= {()=>{guardarImagen()}}
                        >
                        Subir imagen
                    </LoadingButton>
                </Grid>
                {/* //aca termina lo de la profe */}

                <Grid container direction="row" justifyContent="center" alignItems="center" marginTop={1}>   
    
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
                                    <TextField disabled label="Nombre" id="Nombre" value={profesor.name}></TextField>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"93%"}}>
                                    <TextField disabled label="Apellido" id="Apellido" value={profesor.apellido}></TextField>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"95%"}}>
                                    <Select onChange={handleChange} name="genero" size='small' value={profesor.genero}>
                                        <MenuItem value={10}>Femenino</MenuItem>
                                        <MenuItem value={20}>Masculino</MenuItem>
                                        <MenuItem value={30}>No binario</MenuItem>
                                    </Select>                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"95%"}}>
                                <TextField onChange={handleChange} name="fechaNac" value={profesor.fechaNac} label="Fecha de Nacimiento - dd/mm/yyyy" id="date"></TextField>
                                </FormControl>
                            </Grid>
                            <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs={6} sm={6} md={6} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"94%"}}>
                                    <TextField size='small' onChange={handleChange} name="password" label="Nueva password" id="Password" type="password"></TextField>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6} container marginTop={1} direction="row" justifyContent="center" alignItems="center">
                                <FormControl sx={{minWidth:"60%"}}>
                                    <LoadingButton onClick={changePassword} variant="contained" sx={{borderRadius:"10px" }}> Cambiar</LoadingButton>
                                </FormControl>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid container  xs={12} sm={12} md={12} lg={12} direction="row" justifyContent="center" alignItems="center" marginTop="15px">
                            <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center" alignItems="center">
                                <FormControl  sx={{color:"#d6533c", minWidth:"96%"}}>
                                    <TextField value={profesor.usuario} disabled label="Usuario" id="Email"></TextField>
                                </FormControl>
                            </Grid>
                            <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center" alignItems="center" marginTop="15px">
                                <FormControl  sx={{color:"#d6533c", minWidth:"96%"}}>
                                    <TextField onChange={handleChange} value={profesor.telefono} InputProps={{inputProps: { min: 0}}} type="number" name="telefono" label="Telefono" id="Telefono"></TextField>
                                </FormControl>
                            </Grid>
                            <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center" alignItems="center" marginTop="15px">
                                <FormControl  sx={{color:"#d6533c", minWidth:"96%"}}>
                                    <TextField onChange={handleChange} name="estudios" value={profesor.estudios} label="Estudios" id="Estudios" multiline minRows={3} maxRows={20}></TextField>
                                </FormControl>
                            </Grid>
                            <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center" alignItems="center" marginTop="15px">
                                <FormControl  sx={{color:"#d6533c", minWidth:"96%"}}>
                                    <TextField onChange={handleChange} name="presentacion" value={profesor.presentacion} label="Presentacion" id="Presentacion" multiline minRows={3} maxRows={20}></TextField>
                                </FormControl>
                            </Grid>
                            <Grid container alignItems="center" justifyContent="center"> 
                                <InputLabel style={{color:"#10223D", fontSize:"19px"}}> {mensajeUpdatePerfil} </InputLabel> 
                            </Grid>
                            <Grid item  xs={12} sm={12} md={12} lg={12} container direction="row" justifyContent="center">
                                <LoadingButton onClick={handleActualizarProfesor} variant="contained" sx={{borderRadius:"10px",marginTop:"15px" }}> Actualizar</LoadingButton> 
                            </Grid>
                        </Grid>    
                    </Card>
                </Grid>               
        </Container>  
    );

}
