import webServices from "./webServices";
import { post } from "./request";

  /*const formData = new URLSearchParams();
  formData.append('dni', login.dni);
  formData.append('password', login.password);*/

export const login = async (dni, password) => { 
  return await post(webServices.loginUser, {
    dni: dni,
    password: password,
  });
};


/*
export const loginUser = async function (login) {
  //url webservices
  let url = urlWebServices.loginUsers;
  //armo json con datos
  const formData = new URLSearchParams();
  formData.append("dni", login.dni);
  formData.append("password", login.password);
  //console.log("dato",formData);
  //console.log("url",url);
  try {
    let response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        // 'x-access-token': WebToken.webToken,
        Origin: "http://localhost:3000",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });
    console.log("respuestaBD", response);
    let rdo = response.status;
    console.log("response", rdo);
    let data = await response.json();
    console.log("jsonresponse", data);
    switch (rdo) {
      case 201: {
        //guardo token
        localStorage.setItem("x", data.token);
        localStorage.setItem("dni", login.dni);
        localStorage.setItem("rol", data.rol);
        return { rdo: 0, mensaje: "Ok" }; //correcto
      }
      case 202: {
        //error mail
        return {
          rdo: 1,
          mensaje: "El mail ingresado no existe en nuestra base.",
        };
      }
      case 203: {
        //error password
        return { rdo: 1, mensaje: "La contraseña no es correcta." };
      }
      default: {
        //otro error
        return { rdo: 1, mensaje: "Ha ocurrido un error" };
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};*/
