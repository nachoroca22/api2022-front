import React from "react";
import { Grid,Typography,Button,Toolbar, Link, Modal} from "@mui/material";
import "./navBar.css"
import { Box } from "@mui/system";
import { useState } from "react";
import Login from "../../Login/Login.jsx";
import SignUp from "../../Login/Signup.jsx"

export default function Navbar ({isScrolling}) {
  const toTheTop = () => {window.scrollTo({top: 0, left:0, behavior:'smooth'})}

  const [isOpenModalSignIn, setIsOpenModalSignIn] = useState();
  const openModalSignIn = () =>{setIsOpenModalSignIn(true)};
  const closeModalSignIn = () =>{setIsOpenModalSignIn(false)};

  const [isOpenModalSignUp, setIsOpenModalSignUp] = useState();
  const openModalSignUp = () =>{setIsOpenModalSignUp(true)};
  const closeModalSignUp = () =>{setIsOpenModalSignUp(false)};

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className="navbar-logo" onClick={toTheTop}>
        <Grid container>
          <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
             <Typography variant="p1" component="div"  sx={{ flexGrow: 1 }}>
             <Link underline="none" href="/" style={{fontSize: 35, color:'#d6533c'}}>tuprofe.com</Link>
                </Typography>
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
                  <SignUp></SignUp>
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
                <Modal
                  open={isOpenModalSignIn}
                  onClose={closeModalSignIn}
                >
                  <Login></Login>
                </Modal>
              </Toolbar>
              </Box> 
        </Grid> 
        </div> 

    </nav>
  )
}