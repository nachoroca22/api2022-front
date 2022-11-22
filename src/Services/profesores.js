import webServices from "./webServices";
import { getById, put, post , de_lete, get } from "./request";

export const obtenerProfesor = async (data) => {
  return await put(webServices.obtenerProfesor,{
    id_user: data
  });
  };

export const createProfesor = async (data) => {
    return await post(webServices.createProfesor,{
      name: data.name,
      apellido: data.apellido,
      usuario: data.usuario,
    });
};

export const actualizarProfesor = async (data) => {
    return await post(webServices.actualizarProfesor,{
      id_user: data.id_user,
      fechaNac: data.fechaNac,
      telefono: data.telefono,
      genero: data.genero,
      estudios: data.estudios,
      presentacion: data.presentacion,
    });
};

export const subirFotoProfesor = async (FormData) => {
  console.log("dataaaaa",FormData.values())
  for (var value of FormData.values()){
    console.log(value); 
  }
  return await post(webServices.guardarImgProfesor,FormData)
};
export const guardarImgUser = async function(message)
  {
      //url webservices
      let url = webServices.guardarImgUser;
      //console.log("url",url);
      //console.log("token",WebToken.webToken);
      const formData = new URLSearchParams();
      formData.append('email', message.email);
      formData.append('nombreImagen',message.imagen);
      
      try
      {
          let response = await fetch(url,{
              method: 'POST', // or 'PUT'
              mode: "cors",
              headers:{
                  'Accept':'application/x-www-form-urlencoded',
                  'x-access-token': localStorage.getItem('x'),
                  'Origin':'http://localhost:3000',
                  'Content-Type': 'application/x-www-form-urlencoded'},
              body:formData
          });
          if (response.status===201)
          {
              return true;
          }
          else
          {
             return false; 
          }
      }
      catch(error)
      {
          console.log("error",error);
          return false;
      };
};
export const uploadFileImg= async function(files,nombres)
  {
       //url webservices
      let url = webServices.uploadFileImg;
      console.log("url",url)
      console.log('files', files)
      console.log('nombres',nombres)
      const formData = new FormData();
      //agrego archivos para subir
      for (let i = 0; i < files.length; i++)
      {
          formData.append('files', files[i], nombres[i])
      }
     
      try
      {
          let response = await fetch(url,{
              method: 'POST', // or 'PUT'
              mode: "cors",
              headers:{
                  'Accept':'application/form-data',
                  'x-access-token': localStorage.getItem('x'),
                  'Origin':'http://localhost:3000',
                  //'Content-Type': 'application/form-data'
              },
              body:formData
          });
      
          let archivos = await response.json()
          console.log('respuestaUpload', archivos);
          return archivos;
      } catch (err) {
          alert('Error uploading the files')
          console.log('Error uploading the files', err)
      }
};
export const getImagenesByUser = async function()
  {
      //url webservices
      let url = webServices.getImgUser;
      //console.log("url",url);
      //console.log("token",WebToken.webToken);
      const formData = new URLSearchParams();
      formData.append('email', localStorage.getItem('email'));
      
      try
      {
          let response = await fetch(url,{
              method: 'POST', // or 'PUT'
              mode: "cors",
              headers:{
                  'Accept':'application/x-www-form-urlencoded',
                  'x-access-token': localStorage.getItem('x'),
                  'Origin':'http://localhost:3000',
                  'Content-Type': 'application/x-www-form-urlencoded'},
              body:formData
          });
          if (response.status===200)
          {
              let data = await response.json();
              console.log("imagenesUser",data);
              let listaImg = data.data.docs;
              return listaImg;
          }
          else
          {
              let vacio=[];
              console.log("No hay imagenes")
              return (vacio);
              
          }
      }
      catch(error)
      {
          console.log("error",error);
      };
};