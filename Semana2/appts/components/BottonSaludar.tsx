import { View, Text, Alert,Button } from 'react-native'
import React from 'react'

export default function BottonSaludar({nombre}:string) {



    function saludar(){
        alert(`Hola ${nombre}`);
        Alert.alert(`Hola ${nombre}`);
    }

    return (
    <View>
        <Button title="Saludar" onPress={saludar} />
    </View>
    )
}
