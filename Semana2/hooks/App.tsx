import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View,TextInput } from 'react-native';
import { Asignaturas } from './modelos/Asignaturas';
import Asignatura from './components/Asignatura';

export default function App() {

  //modificamos el estado inicial del contador a 0
  //eventos de incremento y decremento
  //ejemplo trabajos con variables


  const [contador, setContador] = useState<number>(0);

  const [id, setId] = useState<number>(0);
  const [nombre, setNombre] = useState<string>('');
  const [unidadesCredito, setUnidadesCredito] = useState<number>(0);
  const [listaAsignaturas, setListaAsignaturas] = useState<Asignaturas[]>([]);


  let contadorVariable: number = 0;

  function incrementar(){
    setContador(contador + 1);
    contadorVariable = contadorVariable + 1;
  }

  function disminuir(){
    setContador(contador - 1);

    contadorVariable = contadorVariable - 1;
  }


  useEffect(() => {
      //Alert.alert('El componente App.tsx se ha montado');
  }, []);


  function agregarAsignatura(){
    let nuevaAsignatura: Asignaturas = {
      id: listaAsignaturas.length + 1,
      nombre: nombre,
      unidadesCredito: unidadesCredito
    };

    setListaAsignaturas([...listaAsignaturas, nuevaAsignatura]);

    //limpiar los campos
    setNombre('');
    setUnidadesCredito(0);

    console.log(listaAsignaturas);


  }


  useEffect(() => {
    console.log('La lista de asignaturas ha cambiado');
    console.log(listaAsignaturas);
  }, [listaAsignaturas]);
  
  return (
    <View style={styles.container}>
      <Text>Aplicacion Contador</Text>

      {
      
      /*<Button title='Incrementar Contador' onPress={incrementar}></Button>
      <Button title='Disminuir Contador' onPress={disminuir}></Button>

      <Text>El valor del contador es: {contador}</Text>
      <Text>El valor de la variable contador es: {contadorVariable}</Text>
      */

      }

      <TextInput placeholder="Agregar nombre Asignat"
        value={nombre}
        onChangeText={(setNombre)}
        
      ></TextInput>

      <TextInput placeholder="Agregar unidades"
        value={unidadesCredito.toString()}
        onChangeText={(text:any) => setUnidadesCredito(Number(text))}
      ></TextInput>    

      <Button title='Agregar asignatura' onPress={agregarAsignatura}></Button>

      {
        listaAsignaturas.map((asignatura) => (
          <View key={asignatura.id}>
            <Asignatura {...asignatura}></Asignatura>
          </View>
        ))
      }



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
