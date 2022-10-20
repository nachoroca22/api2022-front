import webServices from "./webServices";
import { get, put, post, de_lete , postGym} from "./request";

export const alta_alumno = async (data) => {
  return await post(webServices.alta_alumno, {
    legajo: data.legajo,
    name: data.name,
    apellido: data.apellido,
    dni: data.dni,
    fechaNac: data.fechaNac,
    genero: data.genero,
    escolaridad: data.escolaridad,
    refrigerio: data.refrigerio,
    taller: data.taller,
    idioma: data.idioma,
    deporte: data.deporte,
    titularACargo: data.titularACargo,
    observaciones: data.observaciones,
    estado: true,
    descuentoGym: true,
    debitoEnCuenta: true,
  });
};

export const listar_alumnos = async () => {
  return await get(webServices.listar_alumnos);
};

/*export const obtenerEmpleado = async (id) => {
  return await getById(endpoints.obtenerEmpleado, id);
};

export const obtenerEmpleadoPorDni = async (dni) => {
  return await get(endpoints.obtenerEmpleadoPorDni + "?dni=" + dni);
};
*/

export const borrar_alumno = async (dni) => {
  return await de_lete(webServices.borrar_alumno + "/" + dni);
};

export const descuento_alumno = async (dni) => {
  return await put(webServices.descuento_alumno + "/" + dni);
};

export const procesar_descuentos = async () => {
  return await get(webServices.procesar_descuentos);
};

export const integracion_gym = async (data) => {
  return await postGym(webServices.integracion_gym, { 
    estudiantes: data 
  });
};

export const actualizar_alumno = async (data) => {
  return await put(webServices.actualizar_alumno, {
    dni: data.dni,
    escolaridad: data.escolaridad,
    refrigerio: data.refrigerio,
    taller: data.taller,
    idioma: data.idioma,
    deporte: data.deporte,
    titularACargo: data.titularACargo,
    observaciones: data.observaciones,
    descuentoGym: data.descuentoGym
  });
};
