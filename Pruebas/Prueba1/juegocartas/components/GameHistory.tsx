import { useContext } from 'react';
import { View, Text } from 'react-native';
import { GameContext } from '../context/GameContext';

export default function GameHistory() {
const { history, gamesPlayed } = useContext(GameContext);

return (
    <View style={{ marginTop: 20 }}>
        <Text>Partidas jugadas: {gamesPlayed}</Text>
        {history.map((item, index) => (
        <Text key={index}>• {item}</Text>
    ))}
    </View>
);
}
