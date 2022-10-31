import webServices from "./webServices";
import { getById, put, post , de_lete, get } from "./request";

export const obtenerProfesor = async (data) => {
  console.log("hooooooolaa",data)
  return await put(webServices.obtenerProfesor,{
    id_user: data
  });
  };

  export const actualizarProfesor = async (data) => {
    console.log(data)
    return await post(webServices.actualizarProfesor,{
      id_user: data.id_user,
      fechaNac: data.fechaNac,
      genero: data.genero,
      estudios: data.estudios,
      presentacion: data.presentacion,
    });
  };