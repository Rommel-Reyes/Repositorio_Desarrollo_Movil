import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useBancoContext } from '../providers/bancoProvider';
import CardTransaccion from '../components/cardTransaccion';
// Pagina de incio con saldo actual y botones.
export const Inicio = () => {
    const { saldo, depositar, transacciones } = useBancoContext();
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bienvenido a MiBanco</Text>
            <Text>Saldo Actual: L. {saldo}</Text>
            <Button title="Depositar L. 500" onPress={depositar} />
            
            <Text style={styles.sub}>Últimos movimientos:</Text>
            <FlatList
                data={transacciones.slice(0, 3)}
                keyExtractor={(item) => item.id.toString()} //cambiando a string el id para evitar error.
                renderItem={({ item }) => <CardTransaccion item={item} />}
            />
        </View>
    );
};
//Estilo generado por IA:
const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
    sub: { marginTop: 20, fontWeight: 'bold' }
});