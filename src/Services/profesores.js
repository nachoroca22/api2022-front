import webServices from "./webServices";
import { getById, put, post , de_lete, get } from "./request";

export const obtenerProfesor = async (data) => {
  console.log("hooooooolaa",data)
  return await get(webServices.obtenerProfesor, data);
  };