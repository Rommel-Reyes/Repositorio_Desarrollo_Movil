import { View, Text } from 'react-native'
import React from 'react'
import { Persona } from '../Models/Persona'

export default function DetallePersona(objetoPersona:Persona) {
    return (
    <View>
        <Text>Nombre: {objetoPersona.nombre}</Text>
        <Text>Apellido: {objetoPersona.apellido}</Text>
        <Text>Edad: {objetoPersona.edad}</Text>
        <Text>Correo: {objetoPersona.correo}</Text>
    </View>
    )
}