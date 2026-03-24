import React, { useContext, useEffect, useState } from "react"
import * as ImagePicker from "expo-image-picker"
import { ProductContext } from "../context/ProductContext"
import { EstadoProducto, Producto } from "../models/Producto"
import {deleteProducto,getProductos,postProducto,} from "../services/productService"

export default function ProductProvider({children,}: {
    children: React.ReactNode
}) {
    const [productos, setProductos] = useState<Producto[]>([])
    const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null)
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState("")
    const [categoria, setCategoria] = useState("")
    const [estado, setEstado] = useState<EstadoProducto>("Disponible")
    const [urlFotografia, setUrlFotografia] = useState("")

    async function obtenerProductos() {
    const data = await getProductos()
    setProductos(Array.isArray(data) ? data : [])
    }
    async function guardarProducto() {
    await postProducto({nombre,descripcion,precio: Number(precio),estado,categoria,url_fotografia: urlFotografia,
    })
    setNombre("")
    setDescripcion("")
    setPrecio("")
    setCategoria("")
    setEstado("Disponible")
    setUrlFotografia("")
    obtenerProductos()
    }
    async function eliminarProducto(id: number) {
        await deleteProducto(id)
        if (productoSeleccionado?.id === id) setProductoSeleccionado(null)
        obtenerProductos()
    }
    function seleccionarProducto(producto: Producto) {
        setProductoSeleccionado(producto)
    }
    async function tomarFoto() {
        const permiso = await ImagePicker.requestCameraPermissionsAsync()
        if (!permiso.granted) return
        const resultado = await ImagePicker.launchCameraAsync({allowsEditing: true,quality: 0.7,})
        if (!resultado.canceled) {setUrlFotografia(resultado.assets[0].uri)}
    }
    useEffect(() => {obtenerProductos();}, []);
    return (
        <ProductContext.Provider
        value={{
        productos,
        productoSeleccionado,

        nombre,
        descripcion,
        precio,
        categoria,
        estado,
        urlFotografia,

        setNombre,
        setDescripcion,
        setPrecio,
        setCategoria,
        setEstado,

        guardarProducto,
        obtenerProductos,
        eliminarProducto,
        seleccionarProducto,
        tomarFoto,
        }}
    >
        {children}
    </ProductContext.Provider>
    );
}
export function useProduct() {
    return useContext(ProductContext);
}