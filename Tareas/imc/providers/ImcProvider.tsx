import { ReactNode, useEffect, useState } from 'react';
import { ImcContext } from '../context/ImcContext';

type Props = {
    children: ReactNode;
};

export function ImcProvider({ children }: Props) {
    const [peso, setPeso] = useState(70);       // kg
    const [altura, setAltura] = useState(1.70); // metros
    const [imc, setImc] = useState(0);
    const [categoria, setCategoria] = useState('');

useEffect(() => {
    const resultado = peso / (altura * altura);
    setImc(Number(resultado.toFixed(2)));

    if (resultado < 18.5) setCategoria('Bajo peso');
    else if (resultado < 25) setCategoria('Peso normal');
    else if (resultado < 30) setCategoria('Sobrepeso');
    else setCategoria('Obesidad');
}, [peso, altura]);

    const aumentarPeso = () => setPeso(prev => prev + 1);
    const disminuirPeso = () => setPeso(prev => (prev > 1 ? prev - 1 : prev));

    const aumentarAltura = () =>
    setAltura(prev => Number((prev + 0.01).toFixed(2)));

    const disminuirAltura = () =>
    setAltura(prev => (prev > 0.5 ? Number((prev - 0.01).toFixed(2)) : prev));

return (
    <ImcContext.Provider
    value={{
        peso,
        altura,
        imc,
        categoria,
        aumentarPeso,
        disminuirPeso,
        aumentarAltura,
        disminuirAltura
    }}
    >
        {children}
    </ImcContext.Provider>
);
}
