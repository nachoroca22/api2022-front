import webServices from "./webServices";
import { get, post } from "./request";


export const listar_facturas = async () => {
  return await get(webServices.listar_facturas );
};

export const facturar_periodo = async (periodo) => {
  //var alumnosOrig = await get(webServices.listar_alumnos );
  //var alumnos = alumnosOrig.data.docs;
  
  //for (let i = 0; i < alumnos.length; i++){

    var salida = await post(webServices.facturar_periodo,{
      periodo: periodo.periodoFacturacion,
      //dni: alumnos[i].dni
    })

  //}
  return salida;
};

