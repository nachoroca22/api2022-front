import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import data from "../../../data/filtros.json"


const materias = data[0]["Materias"]
const tipoClase = data[1]["tipoClase"]
const frecuencia = data[2]["frecuencia"]
const calificacion = data[3]["Calificacion"]  


export default function SelectAutoWidth() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    
    setAge(event.target.value);

  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
      <InputLabel style={{color:"#ffffff"}}> Materia </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value={0}>Todas</MenuItem>
           {tipoClase.map((elemento) => (<MenuItem value={elemento.nombre} key={elemento.id}> {elemento.nombre} </MenuItem>
                  ))}
        </Select>
      </FormControl>
    </div>
  );
}
