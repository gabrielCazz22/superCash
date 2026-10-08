import type React from "react";
import { X } from "lucide-react";

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
    children?: React.ReactNode;
    title?: string;
    size?: "sm" | "md" | "lg" | "xl" | "full";
    className?: string;
}

export default function AddProductModal({
    isOpen,
    onClose,
    children,
    size = "md",
    className = ""
}: ModalProps) {
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
                    {children}
                </div>

            </div>
        </div>
    );
}
