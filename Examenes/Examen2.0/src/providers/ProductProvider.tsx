import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "../context/ProductContext"
import { Producto } from "../models/Producto"
import { deleteProducto, getProductos, postProducto } from "../services/productService"

export default function ProductProvider({ children }: { children: React.ReactNode }) {
    const [productos, setProductos] = useState<Producto[]>([])
    const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null)
    const [nombre, setNombre] = useState("")
    async function obtenerProductos() {
        const data = await getProductos()
        setProductos(Array.isArray(data) ? data : []);
    }

    async function guardarProducto() {
    await postProducto({
        nombre,
        descripcion: "Producto simple",
        precio: 100,
        estado: "Disponible",
        categoria: "General",
        url_fotografia: ""
    })
    setNombre("")
    obtenerProductos()
    }
    async function eliminarProducto(id: number) {
    await deleteProducto(id)
    if (productoSeleccionado?.idProducto === id) setProductoSeleccionado(null);
    obtenerProductos()
    }
    function seleccionarProducto(producto: Producto) {
    setProductoSeleccionado(producto)
    }
    useEffect(() => { obtenerProductos(); }, [])
    return (
    <ProductContext.Provider value={{ productos, productoSeleccionado, nombre, setNombre, guardarProducto, obtenerProductos, eliminarProducto, seleccionarProducto}}>
        {children}
    </ProductContext.Provider>
    )
}
export function useProduct() {
    return useContext(ProductContext)
}