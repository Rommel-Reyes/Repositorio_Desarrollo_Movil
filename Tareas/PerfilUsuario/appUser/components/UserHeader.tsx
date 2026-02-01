import { View, Text } from 'react-native';

type Props = {
    nombre: string;
    ocupacion: string;
};

export default function UserHeader({ nombre, ocupacion }: Props) {
    return (
    <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            {nombre}
        </Text>
        <Text>{ocupacion}</Text>
    </View>
    );
}
