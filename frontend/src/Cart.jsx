import { Link } from "react-router-dom";
import { useCart } from "./context/cartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQty, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-stone-800 mb-4">Your Cart is Empty</h2>
        <p className="text-stone-600 mb-6">Add some delicious coffee to get started!</p>
        <Link
          to="/products"
          className="inline-block bg-stone-800 text-amber-50 px-6 py-2 rounded-lg hover:bg-stone-700 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-stone-800 mb-6">Your Cart</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-lg shadow p-4 flex flex-col sm:flex-row gap-4 items-center justify-between"
          >
            <div className="flex gap-4 items-center flex-1 min-w-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-stone-800">{item.name}</h3>
                <p className="text-amber-700 font-bold">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQty(item.name, item.qty - 1)}
                className="w-8 h-8 rounded bg-stone-200 hover:bg-stone-300 text-stone-700 font-bold"
              >
                −
              </button>
              <span className="w-8 text-center font-medium">{item.qty}</span>
              <button
                onClick={() => updateQty(item.name, item.qty + 1)}
                className="w-8 h-8 rounded bg-stone-200 hover:bg-stone-300 text-stone-700 font-bold"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.name)}
              className="text-red-600 hover:text-red-700 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-stone-100 rounded-lg">
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total</span>
          <span className="text-amber-700">${cartTotal.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-6 flex gap-4">
        <Link
          to="/products"
          className="px-6 py-2 border border-stone-400 rounded-lg hover:bg-stone-100 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
