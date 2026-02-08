import { View, Text, Button } from 'react-native'
import React from 'react'
import { useContador } from '../Providers/ProviderSuma'

export default function BotonSumar() {

  const { incrementar } = useContador();
  return (
    <View>
      
      <Button title="Sumar" onPress={incrementar} />
    </View>
  )
}