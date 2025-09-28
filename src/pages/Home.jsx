import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const sampleProducts = [
    { id: "1", name: "Smartphone", price: 600, imageUrl: "/assets/phone.png", description: "Latest model smartphone." },
    { id: "2", name: "Wireless Headphones", price: 85, imageUrl: "/assets/headphone.png", description: "Noise-cancelling comfort." },
    { id: "3", name: "Smart TV", price: 750, imageUrl: "/assets/tv.png", description: "Ultra HD 4K smart TV." },
];


export default function Home() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 text-center">
                <h1 className="text-4xl font-bold">Welcome to ShopEase</h1>
                <p className="mt-3 text-lg">Your one-stop shop for all electronics</p>
                <Link
                    to="/products"
                    className="mt-6 inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200"
                >
                    Shop Now
                </Link>
            </section>

            {/* Featured Products */}
            <section className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {sampleProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}
