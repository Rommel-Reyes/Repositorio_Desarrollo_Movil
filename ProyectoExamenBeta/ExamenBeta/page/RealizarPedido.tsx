import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';
import { usePedidoContext } from '../providers/PedidoProvider';
import CardPedido from '../components/cardPedido';

export const RealizarPedido = () => {
    const { pedido, total } = usePedidoContext();
    const [nombre, setNombre] = useState('');

    function confirmar() {
        if (!nombre.trim()) {
            Alert.alert("Error", "Ingrese su nombre");
            return;
        }
        Alert.alert("Compra realizada correctamente", `Cliente: ${nombre}\nTotal: L. ${total}`);
    }

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <TextInput 
                placeholder="Ingrese su nombre" 
                style={{ borderWidth: 1, padding: 10, marginBottom: 20 }} 
                onChangeText={setNombre} 
            />
            <FlatList
                data={pedido}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <CardPedido item={item} />}
            />
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 20 }}>Total: L. {total}</Text>
            <Button title="Confirmar Compra" color="green" onPress={confirmar} />
        </View>
    );
};