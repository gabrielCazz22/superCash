import { Link } from 'react-router-dom'
import { Home, ReceiptText, ShoppingCartIcon } from 'lucide-react'

export default function Navbar() {
    return (
        <nav className='w-full p-3.5 bg-blue-600 text-white shadow-lg z-40 shrink-0 md:p-4'>
            <section className='flex justify-around items-center md:justify-end md:gap-8'>
                <Link to='/Dashboard' className='flex flex-col md:flex-row items-center gap-1 text-xs md:text-sm font-medium hover:text-blue-200 transition-colors'>
                    <Home size={20} />
                    <span>Inicio</span>
                </Link>


                <Link to='/Recetas' className='flex flex-col md:flex-row items-center gap-1 text-xs md:text-sm font-medium hover:text-blue-200 transition-colors'>
                    <ReceiptText size={20} />
                    <span>Recetas</span>
                </Link>

                <Link to='/Shopping' className='flex flex-col md:flex-row items-center gap-1 text-xs md:text-sm font-medium hover:text-blue-200 transition-colors'>
                    <ShoppingCartIcon size={20} />
                    <span>Carrito</span>
                </Link>

            </section>
        </nav>
    )
}
