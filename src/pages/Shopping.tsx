import { useShopping } from "../hooks/useShopping"
import { ShoppingItems } from "../components/ui/ShoppingItems"

export default function Shopping() {
    const {
        productos,
        nuevoProducto,
        borrarAllProductos,
        eliminarProducto,
        toggleComprado,

    } = useShopping()
    return (

        <>
            <main className="flex flex-col w-full min-h-screen 
             items-center py-[5vh] px-6 bg-[steelblue] text-white ">
                <header className="bg-gray-400 w-[80vw] h-10 rounded-t-md"></header>

                {/* Body */}
                <div className="flex flex-col w-[80vw] min-h-80 bg-white gap-2 px-6 py-2 justify-between">

                    <div className="border w-full p-4 flex-2 bg-amber-600 overflow-y-auto">
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

                    </div>


                    <div className="border w-full p-5 flex-2 bg-blue-600"></div>
                    <div className="border w-full p-5 flex-1 bg-red-600"></div>



                </div>

            </main>
        </>

    )
}
