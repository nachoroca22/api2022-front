import React from "react";
import { Grid,Typography,Button,Toolbar, Link, Modal} from "@mui/material";
import "./navBar.css"
import { Box } from "@mui/system";
import { useState } from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Login from "../../Login/Login.jsx";
import SignUp from "../../Login/Signup.jsx";
import { useNavigate } from "react-router-dom";
import {
  setToken,
  setActiveSession,
  removeToken,
  removeActiveSession,
  setRol,
  removeRol,
  setID,
  removeID,
} from "../../../Services/mysession";


export default function Navbar ({isScrolling}) {

  const toTheTop = () => {window.scrollTo({top: 0, left:0, behavior:'smooth'})}

  const [isOpenModalSignIn, setIsOpenModalSignIn] = useState();
  const openModalSignIn = () =>{setIsOpenModalSignIn(true)};
  const closeModalSignIn = () =>{setIsOpenModalSignIn(false)};

  const [isOpenModalSignUp, setIsOpenModalSignUp] = useState();
  const openModalSignUp = () =>{setIsOpenModalSignUp(true)};
  const closeModalSignUp = () =>{setIsOpenModalSignUp(false)};

  const [viewBotones,setViewBotones] = useState(true);
  const [submitted, setSubmitted] = React.useState(false);
  const navigate = useNavigate();


  if(submitted === false){
      const token = localStorage.getItem("token")
      if (token !== null){
          setViewBotones(false)
          setSubmitted(true)
      }
  } 

  const ingresarPerfil = () => {
    const rol = localStorage.getItem("rol")
    if (rol === "Alumno"){
      navigate("/alumnos/home")
    }else{
      navigate("/profesores/home")
    }
  }

  const logout = () =>{
    
    removeToken();
    removeActiveSession();
    removeID();
    removeRol();
    window.location.reload(false);
    
  }
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className="navbar-logo" onClick={toTheTop}>
        <Grid container>
          <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
             <Typography variant="p1" component="div"  sx={{ flexGrow: 1 }}>
             <Link underline="none" href="/" style={{fontSize: 35, color:'#d6533c'}}>tuprofe.com</Link>
                </Typography>
                {viewBotones ? 
                <Grid>
                <Button 
                  onClick={openModalSignUp}
                  variant='outlined' 
                  style={{borderRadius:"15px",
                    borderColor:'#d6533c',
                    textTransform:'capitalize',
                    fontSize: 18, color:'#d6533c'}}  
                  sx={{ mr: 2 }} 
                    >sign up
                  </Button> 
                  <Modal
                  open={isOpenModalSignUp}
                  onClose={closeModalSignUp}
                >
                  <SignUp
                    isOpenModal={isOpenModalSignUp}
                    closeModal={closeModalSignUp}
                  ></SignUp>
                </Modal>
                <Button 
                  onClick={openModalSignIn}
                  variant='outlined' 
                  style={{borderRadius:"15px",
                    borderColor:'#d6533c',
                    textTransform:'capitalize',
                    fontSize: 18, 
                    color:'#d6533c'}}  
                    >sign in
                </Button> 
                </Grid>
                 : 
                 <Grid> 
                  <LogoutOutlinedIcon
                    sx={{width:"60px",height:"60px",marginTop:"10px",marginRight:"40px"}}
                    onClick={()=> logout()}
                  ></LogoutOutlinedIcon>
                  <AccountCircleOutlinedIcon
                    sx={{width:"60px",height:"60px",marginRight:"40px"}}
                    //component={RouterLink} to={`/busqueda/`}
                    onClick={()=> ingresarPerfil()}
                  ></AccountCircleOutlinedIcon>
                 </Grid>}
                <Modal
                  open={isOpenModalSignIn}
                  onClose={closeModalSignIn}
                >
                  <Login
                  onClose={closeModalSignIn}
                  ></Login>
                </Modal>
              </Toolbar>
              </Box> 
        </Grid> 
        </div> 

    </nav>
  )
}