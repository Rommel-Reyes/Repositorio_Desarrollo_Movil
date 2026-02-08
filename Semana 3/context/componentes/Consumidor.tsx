import { View, Text, Button } from 'react-native'
import React from 'react'
import { useContador } from '../Providers/ProviderSuma';

export default function Consumidor() {

    const { contador } = useContador();
    return (
        <View>


            <Text>Contador: {contador} </Text>

        </View>
    )
}