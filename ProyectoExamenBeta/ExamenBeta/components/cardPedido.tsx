import { View, Text, Button } from 'react-native'
import React from 'react'
import { usePedidoContext } from '../providers/PedidoProvider'
import { Plato } from '../models/Plato'

// Componente para mostrar cada plato en el pedido, con opcion de eliminarlo
export default function CardPedido({ item }: { item: Plato }) {
    const { eliminarDelPedido } = usePedidoContext();

    return (
        <View style={{ padding: 10, borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>{item.nombre}</Text>
            <Button title="Eliminar" color="red" onPress={() => eliminarDelPedido(item.id)} />
        </View>
    )
}