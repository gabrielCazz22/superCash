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
    return (

        <>
            <main className="flex flex-col w-full h-full items-center p-3 bg-[steelblue] text-white overflow-hidden">
                <header className="bg-gray-400 w-full max-w-md h-8 rounded-t-md shrink-0 flex  justify-center items-center text-center"><p>Lista</p></header>

                {/* Body */}
                <div className="flex flex-col w-full max-w-md flex-1 bg-white gap-2 p-3 justify-between rounded-b-md overflow-hidden min-h-0">

                    <div className="border w-full p-3 shrink-0 bg-blue-600 rounded flex-1"></div>

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


                    <div className="border w-full p-2.5 shrink-0 bg-red-600 rounded flex-1"></div>



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
