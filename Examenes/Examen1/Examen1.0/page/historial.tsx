import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useBancoContext } from '../providers/bancoProvider';
import CardTransaccion from '../components/cardTransaccion';
// pagina de historial de la cuenta.
export const historial = () => {
    const { transacciones } = useBancoContext();
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text>Total de transacciones: {transacciones.length}</Text>
            <FlatList
                data={transacciones}
                keyExtractor={(item) => item.id.toString()}// cambiamos el valor a string igual para evitar errores.
                renderItem={({ item }) => <CardTransaccion item={item} />}
            />
        </View>
    );
};