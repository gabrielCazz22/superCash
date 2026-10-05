import { BrowserRouter, Link } from "react-router-dom";
import { ShoppingCartIcon } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="w-full p-6 bg-primary text-white shadow-md">
            <section className="flex justify-end align-end items-center gap-6">
                <Link to="/Dashboard"> Inicio</Link>
                <Link to="/Shopping" >< ShoppingCartIcon size={24} color="#000" /> </Link>
            </section>


        </nav>
    )
}
