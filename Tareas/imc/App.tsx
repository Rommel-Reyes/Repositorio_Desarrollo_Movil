import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ImcProvider } from './providers/ImcProvider';
import ImcForm from './components/ImcForm';
import ImcResult from './components/ImcResult';


export default function App() {
  return (
    <ImcProvider>
      <View style={{ padding: 20 }}>
        <ImcForm />
        <ImcResult />
      </View>
    </ImcProvider>
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


