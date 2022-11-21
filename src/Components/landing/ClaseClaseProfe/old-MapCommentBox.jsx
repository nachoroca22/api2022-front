import * as React from 'react';
import {Grid} from '@mui/material';
import CommentBox from './CommentBox';


export default function MapCommentBox (props){
    var comentarios = props.comentariosClase
    return(

            <Grid>
                {comentarios.map(comentario => (<CommentBox key={comentario._id}
                    alumno={comentario.alumno}
                    calificacion_alumno={comentario.calificacion_alumno}
                    comentarios={comentario.comentario}
               ></CommentBox> ))}      
            </Grid>

    )};