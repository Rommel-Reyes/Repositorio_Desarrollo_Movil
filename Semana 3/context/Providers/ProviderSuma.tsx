import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import {contexSuma} from '../Context/ContexSuma';

//siempre va recibir props reactNode
//Escribo las implementaciones que quiero compartir (context)
//exporto las implementaciones para usarlas en otros componentes
interface Props {

    children: ReactNode
}

export default function ProviderSuma({children}: Props) {

  const [contador, setContador] = React.useState<number>(0);

 function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {  
    setContador(contador - 1);
  }


  return (
    <View>
      <contexSuma.Provider value={{contador, incrementar, decrementar}}>
        {children}
    </contexSuma.Provider>
    
    </View>
  )
}

export const useContador= ()=>{
    return React.useContext(contexSuma);
}