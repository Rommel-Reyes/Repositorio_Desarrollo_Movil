import { createContext } from "react";

export const contexSuma = createContext({
    contador:0,
    incrementar: () => {},
    decrementar: () => {}
})