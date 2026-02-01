import { View, Text } from 'react-native'
import React from 'react'
import BottonSaludar from './BottonSaludar'

export default function Saludo() {
    return (
    <View>
        <Text>Saludo nombre: Juan apellido: Lopez</Text>
        <BottonSaludar nombre="Juan" />
    </View>
    )
}