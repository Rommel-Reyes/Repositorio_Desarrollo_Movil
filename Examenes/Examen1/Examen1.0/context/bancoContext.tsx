import {createContext} from 'react'
import {transaccion} from '../models/transaccion'

/*aqui se crea el conteto del banco con un saldo inicial definida en saldo de 10mil lempiras,
y tambien un arreglo de transaccion vacio que ira adquiriendo parametros a medida que se hagan transacciones*/
export const BancoContext = createContext({
    saldo: 10000,
    transacciones: [] as transaccion[],
    depositar: () => {},
    transferir: (monto: number, destino: string) => {}
})