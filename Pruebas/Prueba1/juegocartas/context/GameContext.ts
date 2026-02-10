import { createContext } from 'react';
import { Card } from '../models/Card';

type GameContextType = {
    cards: Card[];
    selectedCards: Card[];
    gamesPlayed: number;
    history: string[];
    startGame: () => void;
    flipCard: (card: Card) => void;
};

export const GameContext = createContext<GameContextType>(
    {} as GameContextType
);
