import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useProduct } from "../providers/ProductProvider"

export default function ListaProductos() {
    const { productos, seleccionarProducto } = useProduct();
    return (
    <View>
        <Text>Lista de productos</Text>
        {productos.map((item) => (
        <View key={item.idProducto}>
            <Text>{item.nombre}</Text>
            <TouchableOpacity onPress={() => seleccionarProducto(item)}>
            <Text>Ver detalle</Text>
        </TouchableOpacity>
        </View>
    ))}
    </View>
)
}