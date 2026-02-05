import { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { StudentContext } from '../context/StudentContext';

export default function AddStudentForm() {
    const [name, setName] = useState('');
    const { addStudent } = useContext(StudentContext);

    const handleAdd = () => {
    if (name.trim() !== '') {
        addStudent(name);
        setName('');
    }
    };

    return (
    <View style={{ marginBottom: 20 }}>
        <TextInput
        placeholder="Nombre del estudiante"
        value={name}
        onChangeText={setName}
        style={{
            borderWidth: 1,
            padding: 8,
            marginBottom: 10
        }}
        />
        <Button title="Agregar estudiante" onPress={handleAdd} />
    </View>
    );
}
