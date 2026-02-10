import { useContext } from 'react';
import { View, Button } from 'react-native';
import { GameContext } from '../context/GameContext';
import CardItem from './CardItem';

export default function GameBoard() {
const { cards, startGame, flipCard } = useContext(GameContext);

return (
    <View>
        <Button title="Iniciar a jugar" onPress={startGame} />
    <View
        style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 20
        }}
        >
        {cards.map(card => (
            <CardItem
            key={card.id}
            card={card}
            onPress={() => flipCard(card)}
            />
        ))}
    </View>
    </View>
);
}
