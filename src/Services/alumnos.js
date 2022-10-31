import webServices from "./webServices";
import { getById, put, post , de_lete, get } from "./request";


export const createAlumno = async (data) => {
  console.log(data)
  return await post(webServices.createAlumno,{
    name: data.name,
    apellido: data.apellido,
    usuario: data.usuario,
  });
};


export const obtenerAlumno = async (data) => {
  console.log("hooooooolaa",data)
  return await put(webServices.obtenerAlumno,{
    id_alumno: data
  });
  };

export const actualizarAlumno = async (data) => {
  console.log(data)
  return await post(webServices.actualizarAlumno,{
    id_alumno: data.id_alumno,
    fechaNac: data.fechaNac,
    genero: data.genero,
    nivel_primaria: data.nivel_primaria,
    nivel_secundaria: data.nivel_secundaria,
    nivel_terciario: data.nivel_terciario,
    nivel_universitario: data.nivel_universitario,
  });
};