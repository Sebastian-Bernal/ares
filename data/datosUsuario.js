import { datosUser } from "./TablaVenta";

const datos = ['ID','Cliente','Correo','Numero Identificacion'];

export const usuariosTabla = datosUser.active.map(objeto => {
    const values = Object.values(objeto)
    const newObj = {}
    datos.forEach((nuevoValor, index) => {
        newObj[nuevoValor] = values[index]
    })
    return newObj
});