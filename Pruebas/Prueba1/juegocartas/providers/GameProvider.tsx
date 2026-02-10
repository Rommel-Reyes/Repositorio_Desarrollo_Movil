import { ReactNode, useState } from 'react';
import { GameContext } from '../context/GameContext';
import { Card } from '../models/Card';

const initialCards: Card[] = [
    { id: 1, value: 'A', isFlipped: false, isMatched: false },
    { id: 2, value: 'A', isFlipped: false, isMatched: false },
    { id: 3, value: 'B', isFlipped: false, isMatched: false },
    { id: 4, value: 'B', isFlipped: false, isMatched: false },
    { id: 5, value: 'C', isFlipped: false, isMatched: false },
    { id: 6, value: 'C', isFlipped: false, isMatched: false },
    { id: 7, value: 'D', isFlipped: false, isMatched: false },
    { id: 8, value: 'D', isFlipped: false, isMatched: false },
];

type Props = {
    children: ReactNode;
};

export function GameProvider({ children }: Props) {
    const [cards, setCards] = useState<Card[]>([]);
    const [selectedCards, setSelectedCards] = useState<Card[]>([]);
    const [gamesPlayed, setGamesPlayed] = useState(0);
    const [history, setHistory] = useState<string[]>([]);

const startGame = () => {
    setCards(initialCards);
    setSelectedCards([]);
    setGamesPlayed(prev => prev + 1);
};

const flipCard = (card: Card) => {
    if (selectedCards.length === 2 || card.isFlipped) return;

    const updatedCards = cards.map(c =>
    c.id === card.id ? { ...c, isFlipped: true } : c
    );

    const newSelected = [...selectedCards, { ...card, isFlipped: true }];

    setCards(updatedCards);
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
    const [first, second] = newSelected;

    if (first.value === second.value) {
        setHistory(prev => [...prev, 'Partida ganada']);
    } else {
        setHistory(prev => [...prev, 'Cartas no son iguales']);
    }
    }
};

return (
    <GameContext.Provider
        value={{
        cards,
        selectedCards,
        gamesPlayed,
        history,
        startGame,
        flipCard
    }}
    >
    {children}
    </GameContext.Provider>
);
}
