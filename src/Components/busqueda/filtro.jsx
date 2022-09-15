import React from 'react'
import { useState } from 'react'
import "./filtro.css"
import data from "../../data/matterias.json"

const Materias = data.Materias

function seleccion() {
  return (
    <select name='Materias' className='select_join' > 
    {Materias.map((elemento) => (
          <option key={elemento.id} value={elemento.id}> {elemento.nombre} </option>
    ))}
    </select>
  );
}
export default seleccion;


