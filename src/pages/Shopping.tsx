import { useShopping } from "../hooks/useShopping"
import { ShoppingItems } from "../components/ui/ShoppingItems"
import { Button } from "../components/ui/Button"
import AddProductModal from "../components/modals/AddProductModal"
import { useState } from "react"
import { Plus } from "lucide-react"

export default function Shopping() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const {
        productos,
        nuevoProducto,
        borrarAllProductos,
        eliminarProducto,
        toggleComprado,

    } = useShopping()

    const [presupuesto, setPresupuesto] = useState<number>()
    const [nombreLista, setNombreLista] = useState<string>("")



    const totalPrecio = productos.reduce((acumulador, p) => {

        const cantidadReal = p.unidad === "g" ? p.cantidad / 1000 : p.cantidad;
        const subTotal = (p.precioUnitario ?? 0) * cantidadReal;
        return acumulador + subTotal;
    }, 0
    )

    const presupuestoRestante = presupuesto === undefined ? 0 : presupuesto - totalPrecio;





    return (


        <>
            <main className="flex flex-col w-full h-full items-center p-3 bg-[steelblue] text-white overflow-hidden">
                <header className="bg-gray-400 w-full max-w-md h-8 rounded-t-md shrink-0 flex  justify-center items-center text-center">
                    <div><input className="text-center w-40 text-xs " type="text" value={nombreLista} placeholder="Agregar Nombre de la lista" onChange={(e) => {
                        setNombreLista(e.target.value)
                    }} /></div>
                </header>

                {/* Body */}
                <div className="flex flex-col w-full max-w-md flex-1 bg-white gap-2 p-3 justify-between rounded-b-md overflow-hidden min-h-0">

                    <div className="flex justify-center items-end border w-full p-5 shrink-0 bg-blue-600 rounded ">

                        <div className="text-sm">presupuesto: <input type="number" value={presupuesto ?? ""} onChange={(e) => setPresupuesto(e.target.value === "" ? undefined : (Number(e.target.value)))}
                            className="bg-transparent border-0 border-b-2 border-amber-300 text-white w-24 py-1 text-center outline-none focus:border-white transition-colors font-medium" /> $</div>


                    </div>

                    <div className="border border-slate-200 w-full p-3 flex-3 bg-amber-600 overflow-y-auto rounded flex flex-col gap-2 min-h-0">
                        {productos.length === 0 ? (
                            <p className="text-center text-xs text-slate-50 py-4">
                                No hay productos aún
                            </p>
                        ) : (
                            productos.map((prod) => (
                                <ShoppingItems
                                    key={prod.id}
                                    producto={prod}
                                    onToggle={toggleComprado}
                                    onEliminar={eliminarProducto}
                                />
                            ))
                        )}
                        <div className="flex justify-center items-center text-center flex-col mt-auto pt-2">
                            <Button
                                variant="nuke" size="sm" onClick={() => setIsModalOpen(true)}>
                                <Plus size={10} className="focus:bg-green-400" />
                                Agregar Producto
                            </Button>
                        </div>
                    </div>


                    {/* Total */}
                    <div className="border w-full p-2.5 shrink-0 bg-red-600 rounded flex justify-between items-end">
                        <div className="text-sm">Presupuesto restante: ${presupuestoRestante.toFixed(2)}</div>
                        <div className="text-sm">Total: ${totalPrecio.toFixed(2)}</div>

                    </div>



                </div>

            </main>
            <AddProductModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddProduct={nuevoProducto}
            />
        </>



    )
}
