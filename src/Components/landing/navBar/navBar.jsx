import React from "react";
import { Grid,Button,Typography,Toolbar,AppBar } from "@mui/material";
import "./navBar.css"
import { Box } from "@mui/system";

const Navbar = ({isScrolling}) => {
  const toTheTop = () => {
    window.scrollTo({top: 0, left:0, behavior:'smooth'});
  }
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className="navbar-logo" onClick={toTheTop}>
        <Grid container>
          <Box sx={{ flexGrow: 1 }}>
            <Toolbar justifyContent= 'center'>
             <Typography variant="p1" component="div" sx={{ flexGrow: 1 }}>
                    tuprofe.com
                </Typography>
                <Button variant='outlined' style={{borderColor:'#ffffff',textTransform:'capitalize',fontSize: 18, color:'white'}}  sx={{ mr: 2 }} >sign up</Button> 
                <Button variant='outlined' style={{borderColor:'#ffffff',textTransform:'capitalize',fontSize: 18, color:'white'}}  sx={{ mr: 10 }} >sign in</Button> 

              </Toolbar>
              </Box> 
        </Grid> 
        </div> 

    </nav>
  )
}

export default Navbar