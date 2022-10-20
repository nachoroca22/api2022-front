import webServices from "./webServices";
import { get, put, post , de_lete } from "./request";

export const alta_empleado = async (data) => {
  return await post(webServices.alta_empleado, {
    name:	data.name,
    apellido:	data.apellido,
    dni:	data.dni,
    fechaNac:	data.fechaNac,
    genero:	data.genero,
    cuil:	data.cuil,
    direccion:	data.direccion,
    provincia:	data.provincia,
    localidad:	data.localidad,
    codPostal:	data.codPostal,
    celular:	data.celular,
    emailPersonal:	data.emailPersonal,
    emergencia_tel:	data.emergencia_tel,
    emergencia_relacion:	data.emergencia_relacion,
    usuario:	data.usuario,
    password:	data.password,
    rol:	data.rol,
    area:	data.area,    
    estado:	true,
    fechaIngreso: data.fechaIngreso,
    diasVacionesRestantes : data.diasVacionesRestantes,
    //materias: data.materias,
  });
};


export const listar_empleados = async () => {
  return await get(webServices.listar_empleados );
};

/*export const obtenerEmpleado = async (id) => {
  return await getById(endpoints.obtenerEmpleado, id);
};

export const obtenerEmpleadoPorDni = async (dni) => {
  return await get(endpoints.obtenerEmpleadoPorDni + "?dni=" + dni);
};
*/

export const borrar_empleado = async (dni) => {
  return await de_lete(webServices.borrar_empleado + "/" + dni);
};


export const actualizar_empleado = async (data) => {
  //console.log(data.materias);
  return await put(webServices.actualizar_empleado, {
    dni: data.dni,
    legajo: data.legajo,
    direccion:	data.direccion,
    provincia:	data.provincia,
    localidad:	data.localidad,
    codPostal:	data.codPostal,
    celular:	data.celular,
    emailPersonal:	data.emailPersonal,
    emergencia_tel:	data.emergencia_tel,
    emergencia_relacion:	data.emergencia_relacion,
    //usuario:	data.usuario,
    //password:	data.password,
    rol:	data.rol,
    area:	data.area,
    estado:	data.estado,
    fechaIngreso: data.fechaIngreso,
    diasVacionesRestantes : data.diasVacionesRestantes,
    materias: data.materias,
  });
};
