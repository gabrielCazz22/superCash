import { Link } from 'react-router-dom'
import { ShoppingCartIcon } from 'lucide-react'

export default function Navbar() {
    return (
        <nav className='fixed bottom-0 left-0 w-full p-4 bg-primary text-white shadow-lg z-50 md:static md:p-6'>
            <section className='flex justify-around items-center md:justify-end md:gap-8'>
                <Link to='/Dashboard' className='flex flex-col md:flex-row items-center gap-1 text-xs md:text-sm font-medium hover:text-blue-200 transition-colors'>
                    <span>Inicio</span>
                </Link>
                <Link to='/Shopping' className='flex flex-col md:flex-row items-center gap-1 text-xs md:text-sm font-medium hover:text-blue-200 transition-colors'>
                    <ShoppingCartIcon size={20} />
                    <span>Carrito</span>
                </Link>
            </section>
        </nav>
    )
}
