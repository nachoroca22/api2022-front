import { Grid,InputLabel } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";



export default function Footer() {

    return (
    <Container sx={{position:"flex", height:"25vh",marginTop:"70px", backgroundColor:"#F2EDDB"}}>
         <Grid container textAlign="center" justifyContent="center" sx={{paddingTop:"10px",borderTop:"1px solid"}}> 
            <Grid item paddingTop={1} xs={12} >
                <InputLabel style={{color:"#d6533c", fontSize:"35px",paddingTop:"15px"}}> tuprofe.com </InputLabel> 
            </Grid>
            <Grid item xs={12}>
                <h4>Seguínos</h4>
            </Grid>
                <Grid item xs={12} justifyItems="center" alignItems="center" justifyContent="center">
                 
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"> </i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter twitter"> </i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram instagram"> </i>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook facebook"> </i>
                    </a>
                </Grid>
            </Grid>  
    </Container>
    );
}