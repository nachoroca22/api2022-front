//const urlApi        = process.env.REACT_APP_URL || "https://api2022-back.herokuapp.com/api/";
//Url para prueba local
const urlApi        = process.env.REACT_APP_URL || "http://localhost:4000/api/";


const webServices = {
    createProfesor:             urlApi + "profesores/altaprofesor",
    createAlumno:               urlApi + "alumnos/altaalumno",
    loginProfesor:              urlApi + "profesores/login",
    loginAlumno:                urlApi + "alumnos/login",
    obtenerProfesor:            urlApi + "profesores/home",
    obtenerAlumno:              urlApi + "alumnos/home",
    obtenerClasesFiltradas:     urlApi + "clases/clasesfiltradas",
    obtenerMateriasFiltro:      urlApi + "clases/materias",  
    crearClase:                 urlApi + "clases/altaclase", 
    obtenerClasesProfesor:      urlApi + "clases/clasesprofesor", 
    actualizarClase:            urlApi + "clases/actualizarclase", 
    actualizarProfesor:         urlApi + "profesores/actualizarprofesor",
    actualizarAlumno:           urlApi + "alumnos/actualizaralumno",

}   

export default webServices;
