import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = {
  "1": { id: "1", name: "Smartphone", price: 600, imageUrl: "/images/phone.jpg", description: "Detailed description here." },
  "2": { id: "2", name: "Tablet", price: 350, imageUrl: "/images/tablet.jpg", description: "Detailed description here." },
};

export default function ProductDetails() {
  const { id } = useParams();
  const product = products[id];

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        {/* Image */}
        <img src={product.imageUrl} alt={product.name} className="rounded-lg shadow-md" />

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-500 mt-2">{product.description}</p>
          <p className="text-blue-600 font-bold text-2xl mt-4">${product.price}</p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
