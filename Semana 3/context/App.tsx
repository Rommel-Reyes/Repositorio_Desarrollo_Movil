import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Controles from './componentes/Controles';
import { useState } from 'react';
import SumaProps2 from './componentes/SumaProps2';
import SumaProps from './componentes/SumaProps';
import ProviderSuma, { useContador } from './Providers/ProviderSuma';
import Consumidor from './componentes/Consumidor';
import BotonSumar from './componentes/BotonSumar';
import BotonRestar from './componentes/BotonRestar';

//sumar y restar




export default function App() {

 

  return (
    <View style={styles.container}>
      
      
      {
        /*<Controles /> 
         <SumaProps2 contador={contador} />
        <SumaProps contador={contador} />
        */
      }


      <ProviderSuma>

       <Consumidor />
       <BotonSumar></BotonSumar>
       <BotonRestar></BotonRestar>
      </ProviderSuma>
     

     

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
