import { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { StudentContext } from '../context/StudentContext';

export default function StudentList() {
  const { students } = useContext(StudentContext);

    return (
    <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
            <Text>{item.name}</Text>
        </View>
        )}
    />
    );
}

