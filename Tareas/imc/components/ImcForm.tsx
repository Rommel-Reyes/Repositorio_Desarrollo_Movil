import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { ImcContext } from '../context/ImcContext';

export default function ImcForm() {
    const {
        peso,
        altura,
        aumentarPeso,
        disminuirPeso,
        aumentarAltura,
        disminuirAltura
    } = useContext(ImcContext);

    return (
        <View style={{ marginBottom: 20 }}>
            <Text>Peso: {peso} kg</Text>
            <Button title="+ 1 kg" onPress={aumentarPeso} />
            <Button title="- 1 kg" onPress={disminuirPeso} />

            <Text style={{ marginTop: 10 }}>
                Altura: {altura} m
            </Text>
            <Button title="+ 1 cm" onPress={aumentarAltura} />
            <Button title="- 1 cm" onPress={disminuirAltura} />
        </View>
    );
}
