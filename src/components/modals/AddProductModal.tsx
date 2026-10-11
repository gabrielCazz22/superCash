import type React from "react";
import { Minus, PlusIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import type {
    Producto,
    UnidadMedida
} from "../../types";
import { Button } from "../ui/Button";
import { FaBottleWater } from "react-icons/fa6";
import { BsCircle } from "react-icons/bs";
import { GiWeight } from "react-icons/gi";
import { GiKitchenScale } from "react-icons/gi";
import ModalAlert from "./modalAlert"

const Unidad_Config: Record<UnidadMedida, { step: number; min: number; max?: number; defaultValue?: number }> = {
    kg: { step: 0.5, min: 1, max: 100, defaultValue: 1 },
    g: { step: 100, min: 50, max: 999, defaultValue: 100 },
    pz: { step: 1, min: 1, max: 100, defaultValue: 1 },
    l: { step: 0.5, min: 0.5, max: 50, defaultValue: 1 },
};
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
    const [unidad, setUnidad] = useState<UnidadMedida>("pz");
    const [alertConfig, setAlertConfig] = useState<{ isOpen: boolean; message: string }>({
        isOpen: false,
        message: ""
    });

    const handleCambiarUnidad = (nuevaUnidad: UnidadMedida) => {
        setUnidad(nuevaUnidad);
        setCantidad(Unidad_Config[nuevaUnidad].min);
    };

    const handleSumar = () => {
        const config = Unidad_Config[unidad];
        setCantidad(prev => {
            const nuevo = prev + config.step;
            return config.max ? Math.min(config.max, nuevo) : nuevo;
        });
    };
    const handleRestar = () => {
        const config = Unidad_Config[unidad];
        setCantidad(prev => Math.max(config.min, prev - config.step));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();




        if (!nombre.trim()) {
            setAlertConfig({
                isOpen: true,
                message: "Por favor ingresa un nombre para el producto."
            });
            return;
        }

        if (cantidad <= 0 || isNaN(cantidad)) {
            setAlertConfig({
                isOpen: true,
                message: "La cantidad debe ser mayor a 0."
            });
            return;
        }

        const generateId = () => {
            if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
                return crypto.randomUUID();
            }
            return Date.now().toString(36) + Math.random().toString(36).substring(2);
        };

        const nuevo: Producto = {
            id: generateId(),
            nombre: nombre.trim(),
            unidad,
            cantidad,
            precioUnitario: precio > 0 ? precio : undefined,
            comprado: false,
        };

        if (onAddProduct) {
            onAddProduct(nuevo);
        }

        setNombre("");
        setPrecio(1);
        setCantidad(1);
        setUnidad("pz");
        onClose();
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }


        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs touch-none overflow-hidden">
            <div className={`w-full bg-white rounded-2xl p-6 shadow-xl flex flex-col gap-4 touch-auto ${sizeStyles[size]} ${className}`}>
                <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-slate-800">Agregar Producto</span>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer p-1 rounded-lg"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="w-full">
                    <form onSubmit={handleSubmit} className="w-full h-auto flex flex-wrap flex-col gap-3.5">

                        <div className="w-full flex items-center py-2 gap-1.5 text-center text-xs justify-between">
                            <label className="flex items-center gap-2 text-slate-700">
                                Nombre
                                <input type="text" value={nombre} required onChange={(e) => setNombre(e.target.value)} className="w-35 py-1 text-center border bg-white rounded-md focus:outline-none " />
                            </label>

                            <label className="flex items-center gap-2 text-slate-700">
                                Precio
                                <input type="number"
                                    value={precio}
                                    min="0"
                                    onChange={(e) => setPrecio(Number(e.target.value))}
                                    required
                                    className="w-15 py-1 text-center border bg-white rounded-md focus:outline-none" placeholder="0.00" />
                            </label>
                        </div>

                        {/* Botones para las unidades de medida */}
                        <div className="grid grid-cols-2 gap-3 w-full justify-items-center">
                            <button
                                type="button"
                                onClick={() => handleCambiarUnidad("kg")}
                                className={`w-24 h-24 border rounded-xl flex flex-col justify-center items-center text-xs gap-1.5 cursor-pointer transition-all ${unidad === "kg"
                                    ? "border-blue-600 bg-blue-50 text-blue-700 font-semibold shadow-xs"
                                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700"
                                    }`}
                            >
                                <GiWeight size={32} />
                                <span>Kilogramo</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => handleCambiarUnidad("pz")}
                                className={`w-24 h-24 border rounded-xl flex flex-col justify-center items-center text-xs gap-1.5 cursor-pointer transition-all ${unidad === "pz"
                                    ? "border-blue-600 bg-blue-50 text-blue-700 font-semibold shadow-xs"
                                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700"
                                    }`}
                            >
                                <BsCircle size={32} />
                                <span>Pieza</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => handleCambiarUnidad("g")}
                                className={`w-24 h-24 border rounded-xl flex flex-col justify-center items-center text-xs gap-1.5 cursor-pointer transition-all ${unidad === "g"
                                    ? "border-blue-600 bg-blue-50 text-blue-700 font-semibold shadow-xs"
                                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700"
                                    }`}
                            >
                                <GiKitchenScale size={32} />
                                <span>Gramos</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => handleCambiarUnidad("l")}
                                className={`w-24 h-24 border rounded-xl flex flex-col justify-center items-center text-xs gap-1.5 cursor-pointer transition-all ${unidad === "l"
                                    ? "border-blue-600 bg-blue-50 text-blue-700 font-semibold shadow-xs"
                                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700"
                                    }`}
                            >
                                <FaBottleWater size={32} />
                                <span>Litros</span>
                            </button>
                        </div>

                        <div className="w-full h-auto flex flex-col flex-wrap text-xs text-center justify-between gap-3">
                            Cantidad
                            <div className="flex items-center gap-2 text-slate-700 justify-center">
                                <button type="button" className="w-10 h-10 bg-white flex items-center justify-center
                                 rounded border active:bg-green-600 active:scale-90 transition-all active:text-slate-50 cursor-pointer" onClick={handleRestar}><Minus size={16} /></button>
                                <input min={Unidad_Config[unidad].min} max={Unidad_Config[unidad].max} type="number" step={"any"}
                                    value={cantidad} required className="w-20 py-2.5 text-center border bg-white rounded-md focus:outline-none font-semibold text-sm" placeholder="0.00" onChange={(e) => setCantidad(Number(e.target.value))} />
                                <button type="button" className="w-10 h-10 bg-white flex items-center justify-center 
                                rounded border active:bg-green-600 active:scale-90 transition-all active:text-slate-50 cursor-pointer" onClick={handleSumar}><PlusIcon size={16} /></button>
                            </div>
                        </div>

                        {/* Botón para Guardar el Producto */}
                        <Button
                            type="submit"
                            variant="Ok"
                            size="md"
                            className="w-full mt-2"
                        >
                            Guardar Producto
                        </Button>

                    </form>
                </div>
            </div>
            <ModalAlert
                isOpen={alertConfig.isOpen}
                message={alertConfig.message}
                onClose={() => setAlertConfig(prev => ({ ...prev, isOpen: false }))}
            />

        </div>
    );
}
