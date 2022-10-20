import webServices from "./webServices";
import { get, put, post , de_lete ,postGym} from "./request";

export const alta_titular = async (data) => {
  return await post(webServices.alta_titular, {    
    name:	data.name,
    apellido:	data.apellido,
    dni: data.dni,
    fechaNac:	data.fechaNac,
    genero:	data.genero,
    cuil:	data.cuil,
    direccion: data.direccion,
    provincia: data.provincia,
    localidad: data.localidad,
    codPostal: data.codPostal,
    celular: data.celular,
    emailPersonal:	data.emailPersonal,
    emergencia_tel: data.emergencia_tel,
    emergencia_relacion: data.emergencia_relacion,
    debitoEnCuenta: data.debitoEnCuenta,
  });
};


export const listar_titulares = async () => {
  return await get(webServices.listar_titulares );
};

/*export const obtenerEmpleado = async (id) => {
  return await getById(endpoints.obtenerEmpleado, id);
};

export const obtenerEmpleadoPorDni = async (dni) => {
  return await get(endpoints.obtenerEmpleadoPorDni + "?dni=" + dni);
};
*/

export const procesar_debitos = async () => {
  return await get(webServices.facturasdebito);
};

export const borrar_titular = async (dni) => {
  return await de_lete(webServices.borrar_titular + "/" + dni);
};


export const actualizar_titular = async (data) => {
  return await put(webServices.actualizar_titular, {
    dni: data.dni,
    direccion: data.direccion,
    provincia: data.provincia,
    localidad: data.localidad,
    codPostal: data.codPostal,
    celular: data.celular,
    emailPersonal: data.emailPersonal,
    emergencia_tel: data.emergencia_tel,
    emergencia_relacion: data.emergencia_relacion,
    debitoEnCuenta: data.debitoEnCuenta,
  });
};

export const procesar_cupones_de_pago = async (data) => {
  return await postGym(webServices.alta_cupones_de_pago, data);
  };


  export const getTitularByCuil = async (cuil) => {
    return await get(webServices.getTitularByCuil + "/" + cuil);
  };