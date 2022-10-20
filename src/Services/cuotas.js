import webServices from "./webServices";
import { get, post, de_lete } from "./request";


export const crearCuota = async (data) => {
  return await post(webServices.crearCuotas, {
    id: data.id,
    tipo: data.tipo,
    categoria: data.categoria,
    denominacion: data.denominacion,
    valor: data.valor,
  });
};

export const editarCuota = async (data) => {
  return await post(webServices.editarCuota, {
    id: data.id,
    tipo: data.tipo,
    categoria: data.categoria,
    denominacion: data.denominacion,
    valor: data.valor,
  });
};


export const eliminarCuota = async (_id) => {
  return await de_lete(webServices.eliminarCuota + _id);
};

/*export const crearEmpleado = async (data) => {
  return await post(endpoints.crearEmpleado, {
    idTipoEmpleado: data.idTipoEmpleado,
    nombre: data.nombre,
    apellido: data.apellido,
    password: data.password,
    email: data.email,
    dni: data.dni,
    sueldoBase: data.sueldoBase,
    sueldoHora: data.sueldoHora,
  });
};

export const login = async (email, password) => {
  return await post(endpoints.login, {
    email: email,
    password: password,
  });
};*/

export const listar_cuotas = async (id) => {
  return await get(webServices.listar_cuotas + (id ? "?id=" + id : ""));
};

export const listar_item_servicio = async (id) => {
  return await get(webServices.listar_item_servicio + (id ? "?id=" + id : ""));
};


/*export const obtenerEmpleado = async (id) => {
  return await getById(endpoints.obtenerEmpleado, id);
};

export const obtenerEmpleadoPorDni = async (dni) => {
  return await get(endpoints.obtenerEmpleadoPorDni + "?dni=" + dni);
};

export const eliminarEmpleado = async (id) => {
  return await post(endpoints.eliminarEmpleado, { id: id });
};

export const editarEmpleado = async (data) => {
  return await post(endpoints.editarEmpleado, {
    id: data.id,
    idTipoEmpleado: data.idTipoEmpleado,
    nombre: data.nombre,
    apellido: data.apellido,
    dni: data.dni,
    estado: data.estado,
    sueldoBase: data.sueldoBase,
    sueldoHora: data.sueldoHora,
  });
};*/
