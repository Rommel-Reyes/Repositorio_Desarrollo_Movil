import React from "react"
import {Image,StyleSheet,Text,TouchableOpacity,View,} from "react-native"
import { useProduct } from "../providers/ProductProvider"

//Estilos generaod spor IA:
export default function DetalleProducto() {
    const { productoSeleccionado, eliminarProducto } = useProduct();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Detalle del producto</Text>

      {!productoSeleccionado ? (
        <Text style={styles.emptyText}>No hay producto seleccionado</Text>
      ) : (
        <>
          <Text style={styles.text}>
            <Text style={styles.bold}>Nombre:</Text>{" "}
            {productoSeleccionado.nombre}
          </Text>

          <Text style={styles.text}>
            <Text style={styles.bold}>Descripción:</Text>{" "}
            {productoSeleccionado.descripcion}
          </Text>

          <Text style={styles.text}>
            <Text style={styles.bold}>Precio:</Text> L.{" "}
            {productoSeleccionado.precio}
          </Text>

          <Text style={styles.text}>
            <Text style={styles.bold}>Categoría:</Text>{" "}
            {productoSeleccionado.categoria}
          </Text>

          <Text style={styles.text}>
            <Text style={styles.bold}>Estado:</Text>{" "}
            {productoSeleccionado.estado}
          </Text>

          {!!productoSeleccionado.url_fotografia && (
            <Image
              source={{ uri: productoSeleccionado.url_fotografia }}
              style={styles.image}
            />
          )}

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => eliminarProducto(productoSeleccionado.id)}
          >
            <Text style={styles.buttonText}>Eliminar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
  },
  emptyText: {
    textAlign: "center",
    color: "#6b7280",
  },
  text: {
    fontSize: 15,
    marginBottom: 8,
  },
  bold: {
    fontWeight: "700",
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 12,
    marginBottom: 12,
  },
  deleteButton: {
    backgroundColor: "#dc2626",
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
  },
});