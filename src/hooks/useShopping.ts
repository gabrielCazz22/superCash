import { useState } from "react"
import type { Producto } from "../types"

export function useShopping() {

    const [productos, setProductos] = useState<Producto[]>([])

    function allProductos() {
        const listaProductos = [...productos]
        listaProductos.map(m => {
            return (m.nombre, m.precioUnitario)
        })
    }

    function nuevoProducto(item: Producto) {
        setProductos(prev => [...prev, item])
    }

    function eliminarProducto(id: string) {
        setProductos(productos.filter(p => p.id !== id));
    }

    function toggleComprado(id: string) {
        const listaActualizada = productos.map(p => {
            if (p.id === id) {
                return { ...p, comprado: !p.comprado }
            } else {
                return p
            }
        })
        setProductos(listaActualizada)
    }
    function borrarAllProductos() {
        setProductos([]);
    }



    return {
        productos,
        nuevoProducto,
        borrarAllProductos,
        eliminarProducto,
        toggleComprado,
    }

}

