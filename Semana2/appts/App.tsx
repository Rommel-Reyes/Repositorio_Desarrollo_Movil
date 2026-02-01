import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saludo from './components/Saludo';
import BottonSaludar from './components/BottonSaludar';
import Persona from './Models/Persona';
import DetallePersona from './components/DetallePersona';
export default function App() {

  let nombrePersona: string = 'pedro'
  //alert(`hola ${nombrePersona}`)

  let suma: number = 0


  let listaNumeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  function sumarNumeros(a: number, b: number): number {
    return a + b
  }

  let persona1: Persona = {
    nombre: 'Carlos',
    apellido: 'Perez',
    edad: 30,
    correo: 'correo.com'
  }

  let persona2: Persona = {
    nombre: 'Ana',
    apellido: 'Gomez',
    edad: 25
  }


  let listaPersonas: Persona[] = [{
    nombre: 'Luis',
    apellido: 'Martinez',
    edad: 40,
    correo: 'correo.com'
  },
  {
    nombre: 'Marta',
    apellido: 'Rodriguez',
    edad: 35
  },
  {
    nombre: 'Jorge',
    apellido: 'Hernandez',
    edad: 28,
    correo: 'correo2.com'
  }]


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Saludo />

      <BottonSaludar nombre={nombrePersona} />

      <DetallePersona {...persona1} />
      <DetallePersona {...persona2} />


    {        
        listaPersonas.map((persona, index) => (
          <DetallePersona key={index} {...persona} />
        ))
      }





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
