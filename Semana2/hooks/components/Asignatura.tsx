import { View, Text } from 'react-native'
import React from 'react'
import { Asignaturas } from '../modelos/Asignaturas'

/*export default function Asignatura(asignatura: Asignaturas) {
  return (
    <View>
      <Text>{asignatura.id} - {asignatura.nombre} - {asignatura.unidadesCredito} unidades</Text>
    </View>
  )
}*/

export default function Asignatura({id, nombre, unidadesCredito}: Asignaturas) {
  return (
    <View>
      <Text>{id} - {nombre} - {unidadesCredito} unidades</Text>
    </View>
  )
}