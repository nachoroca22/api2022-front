import * as React from 'react';
import "./cover.css"
import videoHome from "../../media/cover.mp4"
import imagen from '../../media/logo.png'
import Filter from '../../common/filter/filter.jsx'
export default function Cover() {


  return (
      <div className='cover-container'>
        <video className='video' src={videoHome} autoPlay loop muted />
        <img src={imagen}></img>
        <h1>¡Encontra tu profe ideal!</h1> 
        <Filter className="filtro-cover"></Filter>       
    </div>

  );
};
