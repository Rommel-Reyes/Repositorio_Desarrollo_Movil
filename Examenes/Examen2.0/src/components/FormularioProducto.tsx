import React from "react"
import {Image,StyleSheet,Text,TextInput,TouchableOpacity,View,} from "react-native"
import { useProduct } from "../providers/ProductProvider"

export default function FormularioProducto() {
    const {nombre,descripcion,precio,categoria,estado,urlFotografia,setNombre,setDescripcion,setPrecio,setCategoria,setEstado,guardarProducto,tomarFoto,} = useProduct();
//Estilos generados Por IA:
    return (
    <View style={styles.card}>
        <Text style={styles.title}>Formulario de producto</Text>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
        placeholder="Ingrese nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
        />

        <Text style={styles.label}>Descripción</Text>
        <TextInput
        placeholder="Ingrese descripción"
        value={descripcion}
        onChangeText={setDescripcion}
        style={styles.input}
        />

        <Text style={styles.label}>Precio</Text>
        <TextInput
        placeholder="Ingrese precio"
        value={precio}
        onChangeText={setPrecio}
        keyboardType="numeric"
        style={styles.input}
        />

        <Text style={styles.label}>Categoría</Text>
        <TextInput
        placeholder="Ingrese categoría"
        value={categoria}
        onChangeText={setCategoria}
        style={styles.input}
        />

        <Text style={styles.label}>Estado</Text>
        <TextInput
        placeholder="Disponible / No disponible"
        value={estado}
        onChangeText={(text) =>
        setEstado(text === "No disponible" ? "No disponible" : "Disponible")
        }
        style={styles.input}
        />

        <TouchableOpacity style={styles.cameraButton} onPress={tomarFoto}>
        <Text style={styles.buttonText}>Tomar foto</Text>
        </TouchableOpacity>

        {!!urlFotografia && (
        <Image source={{ uri: urlFotografia }} style={styles.image} />
        )}

        <TouchableOpacity style={styles.saveButton} onPress={guardarProducto}>
        <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
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
    label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    marginTop: 6,
    },
    input: {
    borderWidth: 1,
    borderColor: "#bdbdbd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    backgroundColor: "#fff",
    },
    saveButton: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    },
    cameraButton: {
    backgroundColor: "#f59e0b",
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
    },
    buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    },
    image: {
    width: 120,
    height: 120,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 12,
    },
});