export interface transaccion {
    id: number;
    type: 'deposito' | 'transferencia';
    monto: number;
    detalle: string;
}
/*aqui defino los datos que tendra la transaccion y el tipo de transaccion, comparandolas entre si
cuando llegue el momento de usarlas dentro del proyecto (y se pueden agregar mas campos de ser necesario)*/
