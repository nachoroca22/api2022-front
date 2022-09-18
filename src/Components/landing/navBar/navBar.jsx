import React from "react";
import { Grid,Typography,Button,Toolbar, Link, Modal} from "@mui/material";
import "./navBar.css"
import { Box } from "@mui/system";
import { useState } from "react";
import Login from "../../Login/login.jsx";


export default function Navbar ({isScrolling}) {
  const toTheTop = () => {window.scrollTo({top: 0, left:0, behavior:'smooth'})}

  const [isOpenModal, setIsOpenModal] = useState();
  const openModal = () =>{setIsOpenModal(true)};
  const closeModal = () =>{setIsOpenModal(false)};


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
                  variant='outlined' 
                  style={{borderRadius:"15px",
                    borderColor:'#d6533c',
                    textTransform:'capitalize',
                    fontSize: 18, color:'#d6533c'}}  
                  sx={{ mr: 2 }} 
                    >sign up
                  </Button> 

                <Button 
                  onClick={openModal}
                  variant='outlined' 
                  style={{borderRadius:"15px",
                    borderColor:'#d6533c',
                    textTransform:'capitalize',
                    fontSize: 18, 
                    color:'#d6533c'}}  
                    >sign in
                </Button> 
                <Modal
                  open={isOpenModal}
                  onClose={closeModal}
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