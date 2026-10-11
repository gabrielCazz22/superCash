import type React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger" | "outline" | "nuke" | "Ok";
    size?: "sm" | "md" | "lg";
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}: ButtonProps) {
    /* Estilos generales para todos los botones */
    const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm",
        nuke: "border hover:bg-gray-300 hover:text-black text-white shadow-sm",
        secondary: "bg-slate-100 hover:bg-slate-200 text-slate-800",
        danger: "bg-red-600 hover:bg-red-700 text-white shadow-sm",
        outline: "border border-slate-300 hover:bg-slate-50 text-slate-700",
        Ok: "bg-green-600 hover:bg-green-800 text-white"
    };

    const sizeStyles = {
        sm: "px-6 py-2 text-xs",
        md: "px-10 py-2 text-sm",
        lg: "px-22 py-2.5 text-base",
    };
    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}