import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import './card.css'
import { Modal } from '@mui/material';
import CardClaseProfe from '../../landing/ClaseClaseProfe/CardClaseProfe.jsx'


export default function CardProfe(props) {
  const [isOpenModalClaseProfe, setIsOpenModalClaseProfe] = useState();
  const openModalClaseProfe = () =>{setIsOpenModalClaseProfe(true)};
  const closeModalClaseProfe = () =>{setIsOpenModalClaseProfe(false)};

  
  return (
    <Card  className='card' sx={{paddingTop:"5px",borderRadius:"20px", border: "1px double #d6533c",color: "#10223D", maxWidth: 345 ,  height:450, backgroundColor:"#F2EDDB" }}>
      <CardMedia 
        component="img"
        style={{
            paddingTop:"2px",
            width: "auto",
            maxHeight: "200px",
            borderRadius:"20px"
          }}
        image={props.foto}
        alt="foto pefil"
        
      />
      <CardContent className='card-desc' >
        <Typography gutterBottom variant="h5" component="div">
            {props.profesor}
        </Typography>
        <Typography gutterBottom variant="h7" component="div" style={{ fontWeight: 600 }}>
            {props.materia} - ${props.costo}
        <Typography variant="h7" marginTop="5px" component="div" style={{ fontWeight: 600 }}>
            {props.tipo}
        </Typography>
            
        </Typography>
        <Rating readOnly value={props.calificacion} precision={0.5} size="large" ></Rating>
        
        <Typography  variant="body2" sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical"}}>
                {props.descripcion}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button 
        onClick={() => openModalClaseProfe()}
        size="small"
        >
          + infoves
        </Button>
        <Modal
          sx={{opacity:"2"}}
          open={isOpenModalClaseProfe}
          onClose={closeModalClaseProfe}
        >
        <CardClaseProfe
          close={closeModalClaseProfe}
          foto={props.foto}
          profesor={props.profesor}
          presentacion={props.presentacion}
          titulos={props.titulos}
          materia={props.materia}
          tipo={props.tipo}
          frecuencia={props.frecuencia}
          duracion={props.duracion}
          calificacion={props.calificacion}
          descripcion={props.descripcion}
          costo={props.costo}

        ></CardClaseProfe>
        </Modal>
      </CardActions>
    </Card>
  );
}
