import * as React from 'react';
import { Button, Container,Box, Grid, Typography} from '@mui/material';
import AppBar from './AppBar';
import imagen from "../media/fondo.png"
import imagen2 from "../media/fondo2.png"
import coverVideo from "../Home/cover"

function Index() {
  return (
    <React.Fragment >

       <AppBar></AppBar>
        <Grid container margin={5} >

          <Grid item  xs={12} md={4} lg={6}>
          <Box border={2}>
              Hola 1!
            </Box>
          </Grid>
          <Grid item xs={12} md={6} >
            <Box border={2}>
              Hola 2!
            </Box>
          </Grid>
        </Grid>  

        <Grid container margin={5} >
       
          <Grid item  xs={12} md={4} lg={6}>
          <Box border={2}>
              Hola 1!
            </Box>
          </Grid>
          <Grid item xs={12} md={6} >
            <Box border={2}>
              Hola 2!
            </Box>
          </Grid>
        </Grid>  
        
    </React.Fragment>
  );
}

export default Index;
