import { View, Text } from 'react-native';

type Props = {
    edad: number;
    ciudad: string;
};

export default function UserDetails({ edad, ciudad }: Props) {
    return (
    <View>
        <Text>Edad: {edad}</Text>
        <Text>Ciudad: {ciudad}</Text>
    </View>
    );
}
