import webServices from "./webServices";
import { getById, put, post , de_lete, get } from "./request";

export const obtenerProfesor = async (data) => {
  return await put(webServices.obtenerProfesor,{
    id_user: data
  });
  };

export const createProfesor = async (data) => {
    return await post(webServices.createProfesor,{
      name: data.name,
      apellido: data.apellido,
      usuario: data.usuario,
    });
};

export const actualizarProfesor = async (data) => {
    return await post(webServices.actualizarProfesor,{
      id_user: data.id_user,
      fechaNac: data.fechaNac,
      genero: data.genero,
      estudios: data.estudios,
      presentacion: data.presentacion,
    });
};