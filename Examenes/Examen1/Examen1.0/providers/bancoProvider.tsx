import React, { useContext, useState } from 'react';
import { Plantilla } from '../models/plantilla';
import { BancoContext } from '../context/bancoContext';
import { transaccion } from '../models/transaccion';
// aqui se crea el proveedor del banco con saldo de 10mil lempiras
export default function BancoProvider(props: Plantilla) {
    const [saldo, setSaldo] = useState(10000);
    const [transacciones, setTransacciones] = useState<transaccion[]>([]);
// function para hacer deposito y transfenrecias.
    function depositar() {
        setSaldo(saldo + 500);
        const nueva: transaccion = {
            id: Date.now(),
            type: 'deposito',
            monto: 500,
            detalle: 'Depósito de L. 500'
        };
        setTransacciones([nueva, ...transacciones]);
    }
    function transferir(monto: number, destino: string) {
        if (monto > saldo) return false;
        setSaldo(saldo - monto);
        const nueva: transaccion = {
            id: Date.now(),
            type: 'transferencia',
            monto: monto,
            detalle: `Transferencia a: ${destino}`
        };
        setTransacciones([nueva, ...transacciones]);
        return true;
    }
    //estado y funciones de componentes hijos:
    return (
        <BancoContext.Provider value={{ saldo, transacciones, depositar, transferir }}>
            {props.children}
        </BancoContext.Provider>
    );
}
// hooks para el contexto del banco;
export function useBancoContext() {
    return useContext(BancoContext);
}