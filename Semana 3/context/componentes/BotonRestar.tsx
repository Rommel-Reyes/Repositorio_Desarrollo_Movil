import { View, Text, Button } from 'react-native'
import React from 'react'
import { useContador } from '../Providers/ProviderSuma';

export default function BotonRestar() {

  const { decrementar } = useContador();
  return (
    <View>

        <Button title='Restar' onPress={decrementar} />
      
    </View>
  )
}