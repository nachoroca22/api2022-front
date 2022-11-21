import webServices from "./webServices";
import { getById, put, post , de_lete, get } from "./request";


export const crearContratacion = async (data) => {
  console.log("data",data)
    return await post(webServices.crearContratacion,{
      id_alumno: data.id_alumno,
      id_user: data.id_user,
      id_clase: data.id_clase,
      costo: data.costo,
      mensaje:data.mensaje,
      horario: data.horario,
      profesor: data.profesor,
      usuario: data.usuario,
      tipoClase: data.tipoClase,
      duracion: data.duracion,
      frecuencia: data.frecuencia,
      materia: data.materia,
      alumno: data.alumno,
      telefono_alumno: data.telefono_alumno,
      usuario_alumno: data.usuario_alumno,

    });
  };

export const obtenerContratacionesAlumno = async (data) => {
    return await put(webServices.obtenerContratacionesAlumno,{
      id_alumno: data
    });
};

export const obtenerContratacionesAlumnoFinalizadas = async (data) => {
  return await put(webServices.obtenerContraAlumnoFinalizadas,{
    id_alumno: data
  });
};

export const obtenerContratacionesProfeFinalizadas = async (data) => {
  return await put(webServices.obtenerContraProfeFinalizadas,{
    id_user: data
  });
};

export const actualizarEstadoContratacion = async (data) => {
  return await put(webServices.cambiarEstadoContratacion,{
    id_contratacion: data.id_contratacion,
    estado: data.estado,
  });
};

export const comentarContratacion = async (data) => {
  return await put(webServices.comentarContratacion,{
    id_contratacion: data.id_contratacion,
    comentario: data.comentario,
    calificacion_alumno: data.calificacion_alumno,
  });
};

export const obtenerContratacionesProfesor = async (data) => {
  return await put(webServices.obtenerContratacionesProfesor,{
    id_user: data
  });
};

export const comentariosPendientes = async (data) => {
  return await put(webServices.comentariosPendientes,{
    id_user: data
  });
};

export const aprobarComentario = async (data) => {
  return await put(webServices.aprobarComentario,{
    id_contratacion: data,
  });
};

export const rechazarComentario = async (data) => {
  return await put(webServices.rechazarComentario,{
    id_contratacion: data.id_contratacion,
    descargo_comentario: data.descargo_comentario
  });
};

export const obtenerComentariosByClase = async (data) => {
  console.log ("webservice",data)
  return await put(webServices.obtenerComentariosByClase,{
    id_clase: data.id_clase,
    paginado: data.paginado
  });
};