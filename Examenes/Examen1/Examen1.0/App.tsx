import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BancoProvider from './providers/bancoProvider';
import { Inicio } from './page/inicio';
import { Transferencia } from './page/transferencias';
import { historial } from './page/historial';

// Archivo principal de la aplicacion, aqui se definen las rutas y el provider del banco.
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <BancoProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Inicio" component={Inicio} />
          <Tab.Screen name="Transferencia" component={Transferencia} />
          <Tab.Screen name="Historico" component={historial} />
        </Tab.Navigator>
      </NavigationContainer>
    </BancoProvider>
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
