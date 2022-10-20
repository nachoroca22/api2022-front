import webServices from "./webServices";
import { get, put, post , de_lete , postGym} from "./request";

export const alta_cobranza = async (data) => {
  return await post(webServices.alta_cobranza, {    
    _idFactura: data._idFactura,
    numeroFactura: data.numeroFactura,
    medio: data.medio,
    monto: data.monto,
    titular: data.titular,
    nro_operacion: data.nro_operacion,
  });
};


export const listar_cobranzas = async () => {
  return await get(webServices.listar_cobranzas );
};

/*export const obtenerEmpleado = async (id) => {
  return await getById(endpoints.obtenerEmpleado, id);
};

export const obtenerEmpleadoPorDni = async (dni) => {
  return await get(endpoints.obtenerEmpleadoPorDni + "?dni=" + dni);
};
*/

export const borrar_cobranza = async (dni) => {
  return await de_lete(webServices.borrar_cobranza + "/" + dni);
};


export const actualizar_cobranza = async (data) => {
  return await put(webServices.actualizar_cobranza, {
    _idFactura: data._idFactura,
    idFactura: data.idFactura,
    medio: data.medio,
    monto: data.monto,
    titular: data.titular,
    nro_operacion: data.nro_operacion,
  });
};


export const pagar_tc = async (data) => {
  return await post(webServices.pagar_tc, {    
    dnicuilUsuario: data.cuil,
    cuitNegocio: "30550051223",
    numerotarjeta: data.nro_tarjeta,
    codigoseguridad: data.cvv,
    monto: data.monto
  });
};

export const cupones_de_cobro = async () => {
  return await postGym(webServices.cupones_de_cobro,{
    cuitEmpresa:"30550051223",
    estado: "Pago total"
  });
};


export const alta_cobranza_cuil = async (data) => {
  return await post(webServices.alta_cobranza_cuil, {    
    numeroFactura: data.numeroFactura,
    medio: data.medio,
    monto: data.monto,
    cuil: data.cuil,
  });

};



/*
Numero: 6321450020215468790
Codigo de seguridad: 851*/