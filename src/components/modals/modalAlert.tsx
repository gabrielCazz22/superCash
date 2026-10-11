import type React from "react";
import { AlertCircle, AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { Button } from "../ui/Button";

interface ModalAlertProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    message: string;
    type?: "error" | "warning" | "info" | "success";
    buttonText?: string;
}

export default function ModalAlert({
    isOpen,
    onClose,
    title,
    message,
    type = "warning",
    buttonText = "Entendido"
}: ModalAlertProps) {
    if (!isOpen) return null;

    const typeConfig = {
        error: {
            icon: <AlertCircle className="text-red-600" size={32} />,
            bgIcon: "bg-red-50",
            defaultTitle: "Error",
            btnVariant: "danger" as const,
        },
        warning: {
            icon: <AlertTriangle className="text-amber-500" size={32} />,
            bgIcon: "bg-amber-50",
            defaultTitle: "Atención",
            btnVariant: "primary" as const,
        },
        info: {
            icon: <Info className="text-blue-500" size={32} />,
            bgIcon: "bg-blue-50",
            defaultTitle: "Información",
            btnVariant: "primary" as const,
        },
        success: {
            icon: <CheckCircle2 className="text-green-600" size={32} />,
            bgIcon: "bg-green-50",
            defaultTitle: "¡Éxito!",
            btnVariant: "Ok" as const,
        },
    };

    const currentConfig = typeConfig[type];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="w-full max-w-xs bg-white rounded-2xl p-5 shadow-2xl flex flex-col items-center text-center gap-3 scale-in-95 duration-150">

                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${currentConfig.bgIcon}`}>
                    {currentConfig.icon}
                </div>

                <div className="flex flex-col gap-1">
                    <h3 className="text-base font-bold text-slate-800">
                        {title || currentConfig.defaultTitle}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                        {message}
                    </p>
                </div>

                <Button
                    type="button"
                    variant={currentConfig.btnVariant}
                    size="sm"
                    className="w-full mt-2"
                    onClick={onClose}
                >
                    {buttonText}
                </Button>
            </div>
        </div>
    );
}
