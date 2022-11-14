//const urlApi        = process.env.REACT_APP_URL || "https://api2022-back.herokuapp.com/api/";
//Url para prueba local
const urlApi        = process.env.REACT_APP_URL || "http://localhost:4000/api/";


const webServices = {
    createProfesor:                 urlApi + "profesores/altaprofesor",
    createAlumno:                   urlApi + "alumnos/altaalumno",
    loginProfesor:                  urlApi + "profesores/login",
    loginAlumno:                    urlApi + "alumnos/login",
    resetPasswordAlumno:            urlApi + "alumnos/resetpassword",
    setPasswordAlumno:              urlApi + "alumnos/setpassword",
    resetPasswordProfesor:          urlApi + "profesores/resetpassword",
    setPasswordProfesor:            urlApi + "profesores/setpassword",
    obtenerProfesor:                urlApi + "profesores/home",
    obtenerAlumno:                  urlApi + "alumnos/home",
    obtenerClasesFiltradas:         urlApi + "clases/clasesfiltradas",
    obtenerMateriasFiltro:          urlApi + "clases/materias",  
    crearClase:                     urlApi + "clases/altaclase", 
    disableClase:                   urlApi + "clases/disableclase", 
    obtenerClasesProfesor:          urlApi + "clases/clasesprofesor", 
    actualizarClase:                urlApi + "clases/actualizarclase", 
    actualizarProfesor:             urlApi + "profesores/actualizarprofesor",
    actualizarAlumno:               urlApi + "alumnos/actualizaralumno",
    obtnerClaseFull:                urlApi + "clases/clasefull",
    crearContratacion:              urlApi + "contrataciones/nuevacontratacion", 
    obtenerContratacionesAlumno:    urlApi + "contrataciones/contratacionesbyalumno", 
    obtenerContraAlumnoFinalizadas: urlApi + "contrataciones/contratacionesbyalumnofinalizadas", 
    cambiarEstadoContratacion:      urlApi + "contrataciones/cambiarestado",
    comentarContratacion:           urlApi + "contrataciones/comentar",
    obtenerContratacionesProfesor:  urlApi + "contrataciones/contratacionesbyprofesor", 
    obtenerContraProfeFinalizadas:  urlApi + "contrataciones/contratacionesbyprofesorfinalizadas", 
    comentariosPendientes:          urlApi + "contrataciones/comentariospendientes", 
    aprobarComentario:              urlApi + "contrataciones/aprobarcomentario", 
    rechazarComentario:             urlApi + "contrataciones/rechazarcomentario", 
}   

export default webServices;
