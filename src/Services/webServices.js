const urlApi        = process.env.REACT_APP_URL || "https://api2022-back.herokuapp.com/api/";


const webServices = {
    //Login
    loginProfesor:              urlApi + "profesores/login",
    obtenerProfesor:            urlApi + "profesores/home",
}

export default webServices;
