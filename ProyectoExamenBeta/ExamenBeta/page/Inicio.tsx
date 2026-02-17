import React from 'react';
import { View, FlatList } from 'react-native';
import { usePedidoContext } from '../providers/PedidoProvider';
import CardPlato from '../components/CardPlato';

export const Inicio = () => {
    const { platosDisponibles } = usePedidoContext();
    return (
        <View style={{flex: 1}}>
            <FlatList
                data={platosDisponibles}
                keyExtractor={(item) => item.id.toString()} //Cambio el valor del ID de number a string, estaba dando error.
                renderItem={({ item }) => <CardPlato item={item} />}
            />
        </View>
    );
};