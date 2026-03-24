import React from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { useProduct } from "../providers/ProductProvider"

export default function FormularioProducto() {
    const { nombre, setNombre, guardarProducto } = useProduct()

    return (
    <View>
        <Text>Nombre del producto</Text>
        <TextInput
            placeholder="Ingrese nombre"
            value={nombre}
            onChangeText={setNombre}
            style={{ borderWidth: 1, marginBottom: 10 }}
    />

    <TouchableOpacity onPress={guardarProducto}>
        <Text>Guardar</Text>
    </TouchableOpacity>
    </View>
)
}