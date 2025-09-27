import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-sm rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
      {/* Product Image */}
      <Link to={`/products/${product.id}`}>
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-56 object-cover"
        />
      </Link>

      {/* Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center mt-3">
          <span className="text-blue-600 font-bold text-lg">${product.price}</span>
          <button 
            className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
