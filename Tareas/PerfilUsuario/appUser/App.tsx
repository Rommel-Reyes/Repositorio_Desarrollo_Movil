import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import UserProfile from './components/UserProfile';

export default function App() {
  const user1 = {
    nombre: 'Juan Pérez',
    edad: 25,
    ciudad: 'Tegucigalpa',
    ocupacion: 'Desarrollador'
  };

  const user2 = {
    nombre: 'María López',
    edad: 30,
    ciudad: 'San Pedro Sula',
    ocupacion: 'Diseñadora'
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <UserProfile user={user1} />
      <UserProfile user={user2} />
    </ScrollView>
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
