import {createContext} from "react";
import {Plato} from "../models/Plato";

export const PedidoContext = createContext ({
    platosDisponibles: [] as Plato[],
    pedido: [] as Plato[],
    eliminados: [] as Plato[],
    total: 0,
    agregarAlPedido: (plato: Plato) => {}, //funcion vacia para agregar al pedido
    eliminarDelPedido: (id: number) => {} // y tambien para eliminar.
})