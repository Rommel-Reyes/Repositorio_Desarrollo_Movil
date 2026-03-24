export type EstadoProducto = "Disponible" | "No disponible"

export type Producto = {
    id: number
    nombre: string
    descripcion: string
    precio: number
    estado: EstadoProducto
    categoria: string
    url_fotografia: string
}
export type ProductoNuevo = {
    nombre: string
    descripcion: string
    precio: number
    estado: EstadoProducto
    categoria: string
    url_fotografia: string
}