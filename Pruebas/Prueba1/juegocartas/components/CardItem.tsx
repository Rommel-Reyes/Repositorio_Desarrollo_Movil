import { Text, TouchableOpacity, View } from 'react-native';
import { Card } from '../models/Card';

type Props = {
    card: Card;
    onPress: () => void;
};

export default function CardItem({ card, onPress }: Props) {
return (
    <TouchableOpacity onPress={onPress}>
    <View
        style={{
            width: 60,
            height: 60,
            margin: 5,
            backgroundColor: '#1e90ff',
            alignItems: 'center',
            justifyContent: 'center'
    }}
    >
        <Text style={{ color: 'white', fontSize: 20 }}>
            {card.isFlipped ? card.value : '?'}
        </Text>
    </View>
    </TouchableOpacity>
);
}
