import React from "react"
import { ScrollView, StyleSheet, Text } from "react-native"
import DetalleProducto from "../components/DetalleProducto"
import FormularioProducto from "../components/FormularioProducto"
import ListaProductos from "../components/ListaProductos"

//Estilos generados con AI:
export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.mainTitle}>Administración de productos</Text>
      <FormularioProducto />
      <ListaProductos />
      <DetalleProducto />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f3f4f6",
    paddingBottom: 30,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 16,
  },
});