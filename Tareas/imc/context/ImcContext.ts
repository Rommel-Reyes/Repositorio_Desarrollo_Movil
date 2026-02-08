import { createContext } from 'react';

type ImcContextType = {
    peso: number;
    altura: number;
    imc: number;
    categoria: string;
    aumentarPeso: () => void;
    disminuirPeso: () => void;
    aumentarAltura: () => void;
    disminuirAltura: () => void;
};

export const ImcContext = createContext<ImcContextType>(
    {} as ImcContextType
);
