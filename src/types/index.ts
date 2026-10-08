export type UnidadMedida = 'kg' | 'g' | 'l' | 'ml' | 'paquete' | 'pz'

export interface Producto {
    id: string,
    nombre: string,
    unidad: UnidadMedida,
    cantidad: number,
    precioUnitario?: number,
    comprado: boolean
}