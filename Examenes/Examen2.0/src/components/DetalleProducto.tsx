import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useProduct } from "../providers/ProductProvider"

export default function DetalleProducto() {
    const { productoSeleccionado, eliminarProducto } = useProduct()
    if (!productoSeleccionado) {
    return <Text>No hay producto seleccionado</Text>
}
    return (
    <View>
        <Text>Detalle</Text>
        <Text>{productoSeleccionado.nombre}</Text>
        <TouchableOpacity
        onPress={() => eliminarProducto(productoSeleccionado.idProducto)}
        >
        <Text>Eliminar</Text>
        </TouchableOpacity>
    </View>
) 
}