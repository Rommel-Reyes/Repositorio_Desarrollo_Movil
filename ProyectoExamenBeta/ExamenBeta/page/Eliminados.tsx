import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { usePedidoContext } from '../providers/PedidoProvider';

export const Eliminados = () => {
    const { eliminados } = usePedidoContext();
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
                Total de platillos eliminados: {eliminados.length}
            </Text>
            <FlatList
                data={eliminados}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{ padding: 10, backgroundColor: '#f2f2f2', marginBottom: 5 }}>
                        <Text>{item.nombre} - L. {item.precio}</Text>
                    </View>
                )}
            />
        </View>
    );
};