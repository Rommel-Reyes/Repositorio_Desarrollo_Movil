import { View, Text, Button } from 'react-native'
import React from 'react'

export default function SumaProps2({contador}: number) {

  function incrementar() {
    contador ++;
  }
  return (
    <View>
      <Text>{contador}</Text>

      <Button title="Incrementar" onPress={incrementar} />
    </View>
  )
}