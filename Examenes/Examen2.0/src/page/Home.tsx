import React from "react"
import { ScrollView } from "react-native"
import FormularioProducto from "../components/FormularioProducto"
import ListaProductos from "../components/ListaProductos"
import DetalleProducto from "../components/DetalleProducto"

export default function Home() {
    return (
    <ScrollView>
        <FormularioProducto />
        <ListaProductos />
        <DetalleProducto />
    </ScrollView>
)
}