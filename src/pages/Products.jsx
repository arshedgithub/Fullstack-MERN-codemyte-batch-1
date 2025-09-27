import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const products = [
  { id: "1", name: "Smartphone", price: 600, imageUrl: "/images/phone.jpg", description: "Latest model smartphone." },
  { id: "2", name: "Tablet", price: 350, imageUrl: "/images/tablet.jpg", description: "Portable & powerful." },
  { id: "3", name: "Smart TV", price: 750, imageUrl: "/images/tv.jpg", description: "Ultra HD 4K smart TV." },
];

export default function Products() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
