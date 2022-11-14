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

export const setPasswordProfesor = async (profesor) => { 
  return await put(webServices.setPasswordProfesor, {
    id_user: profesor.id_user,
    password: profesor.password
  });
};

export const setPasswordAlumno = async (alumno) => { 
  return await put(webServices.setPasswordAlumno, {
    id_alumno: alumno.id_alumno,
    password: alumno.password
  });
};