import React, { useContext, useState, useEffect } from 'react'
import { Plantilla } from '../models/Plantilla';
import { PedidoContext } from '../context/PedidoContext';
import { Plato } from '../models/Plato';

export default function PedidoProvider (props: Plantilla) {
    // Lista inicial de platos directamente en el estado como la prueba de cartas
    const [platosDisponibles, setPlatosDisponibles] = useState<Plato[]>([
        { id: 1, nombre: 'Pizza Margarita', precio: 250 },
        { id: 2, nombre: 'Hamburguesa Pro', precio: 180 },
        { id: 3, nombre: 'Pasta Alfredo', precio: 210 },
        { id: 4, nombre: 'Ensalada Cesar', precio: 120 }
    ]);
    const [pedido, setPedido] = useState<Plato[]>([]);
    const [eliminados, setEliminados] = useState<Plato[]>([]);
    const [total, setTotal] = useState<number>(0);
    //actualizar el total automáticamente
    useEffect(() => {
        let suma = 0;
        pedido.forEach(item => suma += item.precio); // Suma el precio de cada plato en el pedido
        setTotal(suma);
    }, [pedido]);

    function agregarAlPedido (plato: Plato) { //agrega el plato al pedido
        setPedido([...pedido, plato]);
    }

    function eliminarDelPedido (id: number) { //elimina el plato del pedido y lo agrega a eliminados
        const platoAEliminar = pedido.find(p => p.id === id);
        if (platoAEliminar) {
            setEliminados([...eliminados, platoAEliminar]); //historial de eliminados
            setPedido(pedido.filter(p => p.id !== id));
        }
    }
    return (
        <PedidoContext.Provider value={{  // Proporciono el estado y las funciones a los componentes hijos
            platosDisponibles, 
            pedido, 
            eliminados, 
            total, 
            agregarAlPedido, 
            eliminarDelPedido 
        }}>
            {props.children}
        </PedidoContext.Provider>
    )
}
export function usePedidoContext() { // Hook para usar el context del pedido
    return useContext(PedidoContext);
}