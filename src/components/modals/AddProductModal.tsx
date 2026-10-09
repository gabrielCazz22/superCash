import type React from "react";
import { Milk, PlusIcon, X } from "lucide-react";
import { useState } from "react";
import type {
    Producto,
    UnidadMedida
} from "../../types";
import { FaWeightHanging } from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";
import { BsCircle } from "react-icons/bs";
import { GiWeight } from "react-icons/gi";
import { GiKitchenScale } from "react-icons/gi";

const sizeStyles = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-2xl",
    full: "max-w-[95vw] h-[90vh]",
};

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddProduct?: (producto: Producto) => void;
    children?: React.ReactNode;
    title?: string;
    size?: "sm" | "md" | "lg" | "xl" | "full";
    className?: string;
}

export default function AddProductModal({

    isOpen,
    onClose,
    onAddProduct,
    children,
    size = "md",
    className = ""
}: ModalProps) {

    const [nombre, setNombre] = useState<string>("");
    const [precio, setPrecio] = useState<number>(1);
    const [cantidad, setCantidad] = useState<number>(1);
    const [unidad, setUnidad] = useState<UnidadMedida>("pz")


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className={`w-full bg-white rounded-2xl p-6 shadow-xl flex flex-col gap-4 ${sizeStyles[size]} ${className}`}>

                <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-slate-800">Agregar Producto</span>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer p-1 rounded-lg"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="w-full">
                    <form className="w-full h-auto flex flex-wrap flex-col gap-3.5">

                        <div className="w-full flex items-center py-2 gap-1.5 text-center text-xs justify-between ">

                            <label className="flex items-center gap-2 text-slate-700">
                                Nombre
                                <input type="text" className="w-35 py-1 text-center border bg-white rounded-md" />
                            </label>

                            <label className="flex items-center gap-2 text-slate-700">
                                Precio
                                <input type="text" className="w-15 py-1 text-center border bg-white rounded-md" placeholder="0.00" />
                            </label>

                        </div>

                        {/* Botones para las unidades de medida */}
                        <div className="grid grid-cols-2 gap-3 w-full justify-items-center">
                            <button
                                type="button"
                                onClick={() => setUnidad("kg")}
                                className={`w-24 h-24 border rounded-xl flex flex-col justify-center items-center text-xs gap-1.5 cursor-pointer transition-all ${
                                    unidad === "kg"
                                        ? "border-blue-600 bg-blue-50 text-blue-700 font-semibold shadow-xs"
                                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700"
                                }`}
                            >
                                <GiWeight size={32} />
                                <span>Kilogramo</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => setUnidad("pz")}
                                className={`w-24 h-24 border rounded-xl flex flex-col justify-center items-center text-xs gap-1.5 cursor-pointer transition-all ${
                                    unidad === "pz"
                                        ? "border-blue-600 bg-blue-50 text-blue-700 font-semibold shadow-xs"
                                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700"
                                }`}
                            >
                                <BsCircle size={32} />
                                <span>Pieza</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => setUnidad("g")}
                                className={`w-24 h-24 border rounded-xl flex flex-col justify-center items-center text-xs gap-1.5 cursor-pointer transition-all ${
                                    unidad === "g"
                                        ? "border-blue-600 bg-blue-50 text-blue-700 font-semibold shadow-xs"
                                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700"
                                }`}
                            >
                                <GiKitchenScale size={32} />
                                <span>Gramos</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => setUnidad("l")}
                                className={`w-24 h-24 border rounded-xl flex flex-col justify-center items-center text-xs gap-1.5 cursor-pointer transition-all ${
                                    unidad === "l"
                                        ? "border-blue-600 bg-blue-50 text-blue-700 font-semibold shadow-xs"
                                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700"
                                }`}
                            >
                                <FaBottleWater size={32} />
                                <span>Litros</span>
                            </button>
                        </div>

                        <div className="w-full h-auto flex flex-col flex-wrap bg-amber-500 text-xs text-center justify-between gap-3">
                            Cantidad
                            <label className="flex items-center gap-2 text-slate-700 justify-center">


                                <div className="w-5 h-5 bg-white flex items-center justify-center rounded"> <X size={16} /></div>
                                <input type="text" className="w-15 py-1 text-center border bg-white rounded-md" placeholder="0.00" />
                                <div className="w-5 h-5 bg-white flex items-center justify-center rounded"><PlusIcon size={16} /></div>
                            </label>
                        </div>


                    </form>
                </div>

            </div>
        </div>
    );
}
