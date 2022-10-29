const urlApi        = process.env.REACT_APP_URL || "https://api2022-back.herokuapp.com/api/";
//Url para prueba local
//const urlApi        = process.env.REACT_APP_URL || "http://localhost:4000/api/";


const webServices = {
    //Login
    loginProfesor:              urlApi + "profesores/login",
    obtenerProfesor:            urlApi + "profesores/home",
    obtenerClasesFiltradas:     urlApi + "clases/clasesfiltradas",
    obtenerMateriasFiltro:      urlApi + "clases/materias",  
    crearClase:                 urlApi + "clases/altaclase", 
    obtenerClasesProfesor:      urlApi + "clases/clasesprofesor", 
    actualizarClase:            urlApi + "clases/actualizarclase", 
}   

export default webServices;
