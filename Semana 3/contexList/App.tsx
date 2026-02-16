import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CrearTareas from './componentes/CrearTareas';
import ProviderTarea from './providers/ProviderTarea';
import ListadoTarea from './componentes/ListadoTarea';

export default function App() {
  return (
    <View style={styles.container}>
       
      <ProviderTarea>
           <CrearTareas></CrearTareas>
           <ListadoTarea></ListadoTarea>
      </ProviderTarea>
       
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});
