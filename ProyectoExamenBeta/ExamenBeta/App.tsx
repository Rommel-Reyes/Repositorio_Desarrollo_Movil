import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Importamos el Provider
import PedidoProvider from './providers/PedidoProvider';
// Importamos las pantallas
import { Inicio } from './page/Inicio';
import { RealizarPedido } from './page/RealizarPedido';
import { Eliminados } from './page/Eliminados';

// Creamos la instancia de la navegacion par cada pestaña:
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    /*todo dentro del provider para que funcione */
    <PedidoProvider>
      {/*Contenedor principal de la navegacion*/}
      <NavigationContainer>
        {/*Definicion de las 3 pantallas*/}
        <Tab.Navigator>
          <Tab.Screen 
            name="Inicio" 
            component={Inicio} 
            options={{ title:'Menu Inicio'}} 
          />
          <Tab.Screen 
            name="Realizar Pedido" 
            component={RealizarPedido} 
            options={{ title:'Mi Pedido'}}
          />
          <Tab.Screen 
            name="Eliminados" 
            component={Eliminados} 
            options={{ title:'Historial Eliminados'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PedidoProvider>
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