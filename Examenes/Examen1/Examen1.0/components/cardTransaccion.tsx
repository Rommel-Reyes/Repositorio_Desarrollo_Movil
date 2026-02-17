import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { transaccion } from '../models/transaccion';
// componentes para mostras las transacciones:
export default function CardTransaccion({ item }: { item: transaccion }) {
    return (
        <View style={styles.card}>
            <Text>{item.detalle}: L. {item.monto}</Text>
        </View>
    );
}
//estilo generado con IA
const styles = StyleSheet.create({
    card: {
        padding: 15,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff'
    }
});