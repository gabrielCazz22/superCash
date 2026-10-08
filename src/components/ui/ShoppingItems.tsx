import type { Producto } from "../../types";
import type { Import } from "lucide-react";
import { X } from 'lucide-react';

export interface ShoppingItemsProps {

    producto: Producto;





    onToggle: (id: string) => void;

    onEliminar: (id: string) => void

}

export function ShoppingItems({ producto, onToggle, onEliminar }: ShoppingItemsProps) {

    return (
        <div className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-lg shadow-sm">

            <div className="flex items-center gap-1
         bg-slate-100 px-2 py-1 rounded text-xs 
         font-semibold text-slate-700  ">
                <span>{producto.cantidad}</span>
                <span>{producto.unidad}</span>

            </div>

            <span className={`flex-1 mx-3 text-sm font-medium
             ${producto.comprado ? "line-through text-slate-400" : "text-slate-800"
                }`}>
                {producto.nombre}
            </span>

            <span className="font-semibold text-sm text-emerald-600 mr-2">
                ${(producto.precioUnitario * producto.cantidad).toFixed(2)}
            </span>

            <div className="flex items-center gap-2 ">
                <input
                    type="checkbox"
                    checked={producto.comprado}
                    onChange={() =>
                        onToggle(producto.id)
                    }
                    className="w-4 h-4 cursor-pointer accent-blue-600"
                />

                <button
                    onClick={() =>
                        onEliminar(producto.id)
                    }
                    className="text-slate-400 hover:text-red-500 font-bold
                 text-xs px-1 cursor-pointer transition-colors"
                >
                    <X size={16} />
                </button>
            </div>
        </div>

    )


}