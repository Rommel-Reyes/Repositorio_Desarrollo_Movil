//cambiamos la IP por la de la maquina para que funcione con red local
//pero si se ocupar en pruebas con localhost, se puede cambiar a http://localhost/api/productos
const API_URL = "http://192.168.0.5:5001/api/productos";

export async function getProductos() {
    const res = await fetch(API_URL);
    return res.json();
}

export async function postProducto(data: object) {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
}

export async function deleteProducto(id: number) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
    return res.json();
}