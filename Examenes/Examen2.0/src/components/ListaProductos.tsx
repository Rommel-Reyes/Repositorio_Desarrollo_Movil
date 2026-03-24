import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useProduct } from "../providers/ProductProvider"

export default function ListaProductos() {
    const { productos, seleccionarProducto } = useProduct()

//Estiloa generaods por IA:
    return (
    <View style={styles.card}>
        <Text style={styles.title}>Lista de productos</Text>

        {productos.length === 0 ? (
        <Text style={styles.emptyText}>No hay productos registrados</Text>
        ) : (
        productos.map((item) => (
            <View key={item.id} style={styles.item}>
            <View>
                <Text style={styles.name}>{item.nombre}</Text>
                <Text style={styles.price}>L. {item.precio}</Text>
            </View>

            <TouchableOpacity
                style={styles.detailButton}
                onPress={() => seleccionarProducto(item)}
            >
                <Text style={styles.buttonText}>Ver detalle</Text>
            </TouchableOpacity>
            </View>
        ))
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
    item: {
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    },
    name: {
    fontSize: 16,
    fontWeight: "700",
    },
    price: {
    color: "#374151",
    marginTop: 4,
    },
    detailButton: {
    backgroundColor: "#16a34a",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    },
    buttonText: {
    color: "#fff",
    fontWeight: "700",
    },
});