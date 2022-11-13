import webServices from "./webServices";
import { post,put } from "./request";


export const loginProfesor = async (usuario, password) => { 
  return await post(webServices.loginProfesor, {
    usuario: usuario,
    password: password,
  });
};

export const loginAlumno = async (usuario, password) => { 
  return await post(webServices.loginAlumno, {
    usuario_alumno: usuario,
    password: password,
  });
};

export const resetPasswordAlumno = async (usuario) => { 
  return await put(webServices.resetPasswordAlumno, {
    usuario_alumno: usuario,
  });
};

export const resetPasswordProfesor = async (usuario) => { 
  return await put(webServices.resetPasswordProfesor, {
    usuario: usuario,
  });
};