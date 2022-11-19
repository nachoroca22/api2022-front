import * as React from 'react';
import  Navbar from "../Components/landing/navBar/NavBar"
import Filter from '../Components/Common/Filter/Filter.jsx'
import {Grid} from '@mui/material';
import Footer from "../Components/Common/FooterGeneral/Footer"
import { Container } from '@mui/system';

function Busquedalanding() {

    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Grid container xs={12} sm={12} md={12} lg={12} direction="row" justifyContent="center" alignItems="center"
          sx={{marginTop:"80px",paddingBottom:"15px",paddingTop:"15px" ,marginBottom:"3px", height:"flex", backgroundColor: "#F2EDDB"}}
        >
          <Filter></Filter>
          <Footer></Footer>   
        </Grid>     
      </React.Fragment>
    );
  }
  
  export default Busquedalanding;