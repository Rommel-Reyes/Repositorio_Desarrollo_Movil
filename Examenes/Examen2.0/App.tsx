import { StatusBar } from 'expo-status-bar'
import React from "react"
import { SafeAreaView } from "react-native"
import ProductProvider from "./src/providers/ProductProvider"
import Home from "./src/page/Home"

export default function App() {
  return (
    <ProductProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Home />
      </SafeAreaView>
    </ProductProvider>
  )
}
