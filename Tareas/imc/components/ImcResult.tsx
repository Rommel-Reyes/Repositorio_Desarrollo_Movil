import { useContext } from 'react';
import { View, Text } from 'react-native';
import { ImcContext } from '../context/ImcContext';

export default function ImcResult() {
    const { imc, categoria } = useContext(ImcContext);

    return (
        <View>
            <Text style={{ fontSize: 18 }}>
                IMC: {imc}
            </Text>
            <Text style={{ fontSize: 16 }}>
                Categoría: {categoria}
            </Text>
    </View>
    );
}
