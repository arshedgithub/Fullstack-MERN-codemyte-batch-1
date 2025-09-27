import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const cartItems = [
  { id: "1", name: "Smartphone", price: 600, quantity: 1, imageUrl: "/images/phone.jpg" },
  { id: "2", name: "Tablet", price: 350, quantity: 2, imageUrl: "/images/tablet.jpg" },
];

export default function Cart() {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>

        <div className="space-y-4">
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} onRemove={() => {}} />
          ))}
        </div>

        {/* Summary */}
        <div className="mt-8 flex justify-between items-center border-t pt-4">
          <p className="text-lg font-semibold">Total: ${total}</p>
          <Link to="/checkout">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Checkout
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
