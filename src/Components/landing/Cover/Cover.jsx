import * as React from 'react';
import "./cover.css"
import videoHome from "../../media/cover.mp4"
import { Button } from '@mui/material';
import {Link as RouterLink,} from 'react-router-dom';



export default function Cover() {
  return (
      <div className='cover-container'>
        <video className='video' src={videoHome} autoPlay loop muted />
        <Button 
          sx={{borderRadius:"15px",fontSize: 40,textTransform:'initial',border:"2px solid",borderColor:"#10223D",color:"#10223D",  minWidth: 575, minHeight: 100 }}
          variant='outlined'
          component={RouterLink} to={`/busqueda/`}
        > ¡Buscar clases!</Button>
        {/* <Filter className="filtro-cover"></Filter>    */}
    </div>

  );
};
