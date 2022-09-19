import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import './card.css'


export default function CardProfe(props) {
  
  return (
    <Card className='card' sx={{ maxWidth: 345 ,  height:450 }}>
      <CardMedia 
        component="img"
        style={{
            width: "auto",
            maxHeight: "200px"
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
        <Rating value={props.calificacion} precision={0.5} size="large" ></Rating>
        
        <Typography  variant="body2" color="text.secondary" sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical"}}>
                {props.descripcion}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small"
                  href='/profesores'>
                  + info
        </Button> 
      </CardActions>
    </Card>
  );
}
