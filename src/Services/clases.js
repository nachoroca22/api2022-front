import webServices from "./webServices";
import { getById, put, post , de_lete, get } from "./request";

export const obtenerClasesFiltradas = async (data) => {
  console.log("serviceData", data)
  return await put(webServices.obtenerClasesFiltradas,{
    materia: data.materia,
    tipoClase: data.tipoClase,
    frecuencia: data.frecuencia,
    calificacion: data.calificacion,
  });
  };

export const obtenerMateriasFiltro = async () => {
    return await get(webServices.obtenerMateriasFiltro,{});
  };

export const crearClase = async (data) => {
    return await post(webServices.crearClase,{
      id_profesor: data.id_profesor,
      materia: data.materia,
      tipoClase: data.tipoClase,
      costo: data.costo,
      frecuencia: data.frecuencia,
      duracion: data.duracion,
      descripcion: data.descripcion
    });
  };

  export const actualizarClase = async (data) => {
    console.log(data)
    return await put(webServices.actualizarClase,{
      id_clase: data.id_clase,
      id_profesor: data.id_profesor,
      materia: data.materia,
      tipoClase: data.tipoClase,
      costo: data.costo,
      frecuencia: data.frecuencia,
      duracion: data.duracion,
      descripcion: data.descripcion
    });
  };

  export const disableClase = async (data) => {
    console.log(data)
    return await put(webServices.disableClase,{
      id_clase: data,
    });
  };

export const obtenerClasesProfesor = async (data) => {
    return await put(webServices.obtenerClasesProfesor,{
      id_profesor: data
    });
    };