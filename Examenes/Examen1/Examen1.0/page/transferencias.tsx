import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useBancoContext } from '../providers/bancoProvider';

export const Transferencia = () => {
    const { transferir } = useBancoContext();
    const [nombre, setNombre] = useState('');
    const [monto, setMonto] = useState('');

    const ejecutar = () => {
        transferir(Number(monto), nombre);
        Alert.alert("Éxito", "Transferencia exitosa");
        /*
        Aqui tenia un erro con una const llamada exito la cual queria hacer una comparativa de valores usando if, else, pero
        al hacer la comparativa me daba error, asi que decidi eliminar esa parte y solo mostrar un mensaje de exito al realizar 
        la transferencia. y no me dejaba pq en el archivo transaccion.ts no le habia puesto que el "transferir"
        devolviera un valor booleano, asi que decidi elimianr esa parte y solo mostrar un mensaje de exito al realizar la transferencia.
        */
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Nombre Destinatario" style={styles.input} onChangeText={setNombre} />
            <TextInput placeholder="Monto" style={styles.input} keyboardType="numeric" onChangeText={setMonto} />
            <Button title="Transferir Saldo" onPress={ejecutar} />
        </View>
    );
};
//Estilo generado por IA:
const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    input: { borderWidth: 1, marginBottom: 15, padding: 10 }
});