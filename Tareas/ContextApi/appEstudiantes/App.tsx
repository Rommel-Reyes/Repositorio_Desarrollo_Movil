import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StudentProvider } from './providers/StudentProvider';
import StudentList from './components/StudentList';
import AddStudentForm from './components/AddStudentForm';

export default function App() {
  return (
    <StudentProvider>
      <View style={{ padding: 20 }}>
        <AddStudentForm />
        <StudentList />
      </View>
    </StudentProvider>
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
