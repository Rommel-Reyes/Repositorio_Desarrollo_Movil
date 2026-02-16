import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { usetarea } from '../providers/ProviderTarea'
import { Tarea } from '../modelos/Tarea'

export default function CrearTareas() {

  const [nombreTarea,setNombreTarea]=useState<string>('')
  const [puntajeTarea, setPuntajeTarea]=useState<string>('')

  const {listaTarea,agregarTarea}=usetarea();

    function agregarTareaFinal(){
        let tarea: Tarea={
            id: listaTarea.length+1,
            descripcion:nombreTarea,
            puntajeTarea: parseInt(puntajeTarea)

        }
        agregarTarea(tarea)
    }

  return (
    <View>
      <Text>CrearTareas</Text>
      <TextInput placeholder='Ingresar descripcion tarea'
        value={nombreTarea}
        onChangeText={setNombreTarea}
      ></TextInput>

      <TextInput placeholder='Ingrese puntuacion tarea'
      value={puntajeTarea}
      onChangeText={setPuntajeTarea}
    ></TextInput>

      <Button title='Agregar Tarea' onPress={agregarTareaFinal}></Button>
    </View>
  )
}