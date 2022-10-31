import webServices from "./webServices";
import { post } from "./request";


export const loginProfesor = async (usuario, password) => { 
  return await post(webServices.loginProfesor, {
    usuario: usuario,
    password: password,
  });
};

export const loginAlumno = async (usuario, password) => { 
  return await post(webServices.loginAlumno, {
    usuario: usuario,
    password: password,
  });
};