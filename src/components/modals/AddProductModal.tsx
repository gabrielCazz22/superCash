interface AddProductModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AddProductModal({ isOpen, onClose }: AddProductModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white min-w-75 min-h-100 rounded-2xl p-4 shadow-xl">
                <button onClick={onClose} className="text-sm font-bold text-slate-500">✕ Cerrar</button>
            </div>
        </div>

    );
}
