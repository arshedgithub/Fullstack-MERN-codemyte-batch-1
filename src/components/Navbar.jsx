import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold text-gray-800">ShopEase</Link>

                {/* Links */}
                <div className="flex space-x-6 text-gray-700 font-medium">
                    <Link to="/products" className="hover:text-blue-600">Products</Link>
                    <Link to="/orders" className="hover:text-blue-600">Orders</Link>
                    <Link to="/login" className="hover:text-blue-600">Login</Link>
                </div>

                {/* Cart */}
                <Link to="/cart" className="relative">
                    <ShoppingCart className="w-6 h-6 text-gray-800" />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">2</span>
                </Link>
            </div>
        </nav>
    );
}
