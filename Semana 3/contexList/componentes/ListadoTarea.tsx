import { View, Text, FlatList, StyleSheet, Button } from 'react-native'
import React from 'react'
import { usetarea } from '../providers/ProviderTarea'

export default function ListadoTarea() {

  const {listaTarea}=usetarea();

  return (
    <View style={style.container}>
      
      <FlatList
        data={listaTarea}
        keyExtractor={item=> item.id.toString()}
        renderItem={({item})=>(
            <View style={style.itemContainer}>
                <Text style={style.text}>Tituli: {item.descripcion}</Text>
                <Text style={style.text}>Puntaje: {item.puntajeTarea}</Text>
                <Button title='Eliminar Tarea'></Button>
            </View>
        )}
      >

      </FlatList>
    </View>
  )
}

const style= StyleSheet.create({
     container: {
    flex: 1,
  
  },
    itemContainer:{
        padding:10,
        borderWidth:1,
        borderBottomColor: '#ccc'
    },
    text:{
        fontSize: 15
    }
})