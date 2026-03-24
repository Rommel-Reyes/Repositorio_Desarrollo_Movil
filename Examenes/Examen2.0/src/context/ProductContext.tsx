import { createContext } from "react"
import { Producto } from "../models/Producto"

// Se crea el contexto del producto:
export const ProductContext = createContext({
    productos: [] as Producto[],
    productoSeleccionado: null as Producto | null,
    nombre: "",
    setNombre: (_v: string) => {},
    guardarProducto: async () => {},
    obtenerProductos: async () => {},
    eliminarProducto: async (_id: number) => {},
    seleccionarProducto: (_p: Producto) => {},
})