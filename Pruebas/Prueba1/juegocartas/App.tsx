import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GameProvider } from './providers/GameProvider';
import GameBoard from './components/GameBoard';
import GameHistory from './components/GameHistory';

export default function App() {
  return (
    <GameProvider>
      <View style={{ padding: 20 }}>
        <GameBoard />
        <GameHistory />
      </View>
    </GameProvider>
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
