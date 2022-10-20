import webServices from "./webServices";
import { post } from "./request";


export const login = async (usuario, password) => { 
  return await post(webServices.loginProfesor, {
    usuario: usuario,
    password: password,
  });
};