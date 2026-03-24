import { createContext } from "react"
import { EstadoProducto, Producto } from "../models/Producto"

export const ProductContext = createContext({
    productos: [] as Producto[],
    productoSeleccionado: null as Producto | null,
    nombre: "",
    descripcion: "",
    precio: "",
    categoria: "",
    estado: "Disponible" as EstadoProducto,
    urlFotografia: "",
    setNombre: (_v: string) => {},
    setDescripcion: (_v: string) => {},
    setPrecio: (_v: string) => {},
    setCategoria: (_v: string) => {},
    setEstado: (_v: EstadoProducto) => {},
    guardarProducto: async () => {},
    obtenerProductos: async () => {},
    eliminarProducto: async (_id: number) => {},
    seleccionarProducto: (_p: Producto) => {},
    tomarFoto: async () => {},
})