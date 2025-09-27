export default function CartItem({ item, onRemove }) {
    return (
      <div className="flex items-center gap-4 p-4 border-b">
        {/* Thumbnail */}
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-20 h-20 object-cover rounded-lg"
        />
  
        {/* Details */}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{item.name}</h3>
          <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
          <p className="text-blue-600 font-bold">${item.price * item.quantity}</p>
        </div>
  
        {/* Remove */}
        <button 
          onClick={() => onRemove(item.id)} 
          className="text-red-500 hover:text-red-700 text-sm"
        >
          Remove
        </button>
      </div>
    );
  }
  