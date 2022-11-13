import webServices from "./webServices";
import { getById, put, post , de_lete, get } from "./request";


export const createAlumno = async (data) => {
  return await post(webServices.createAlumno,{
    name_alumno: data.name_alumno,
    apellido_alumno: data.apellido_alumno,
    usuario_alumno: data.usuario_alumno,
  });
};


export const obtenerAlumno = async (data) => {
  return await put(webServices.obtenerAlumno,{
    id_alumno: data
  });
  };

export const actualizarAlumno = async (data) => {
  return await post(webServices.actualizarAlumno,{
    id_alumno: data.id_alumno,
    fechaNac_alumno: data.fechaNac_alumno,
    genero_alumno: data.genero_alumno,
    telefono_alumno: data.telefono_alumno,
    nivel_primaria: data.nivel_primaria,
    nivel_secundaria: data.nivel_secundaria,
    nivel_terciario: data.nivel_terciario,
    nivel_universitario: data.nivel_universitario,
  });
};