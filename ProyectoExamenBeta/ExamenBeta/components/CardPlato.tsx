import { View, Text, Button } from 'react-native'
import React from 'react'
import { usePedidoContext } from '../providers/PedidoProvider'
import { Plato } from '../models/Plato'

// Componente para mostrar cada plato disponible, con opcion de agregarlo al pedido
export default function CardPlato({ item }: { item: Plato }) {
    const { agregarAlPedido } = usePedidoContext();

    return (
        <View style={{ padding: 15, borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
                <Text style={{ fontWeight: 'bold' }}>{item.nombre}</Text>
                <Text>L. {item.precio}</Text>
            </View>
            <Button title="Agregar" onPress={() => agregarAlPedido(item)} />
        </View>
    )
}