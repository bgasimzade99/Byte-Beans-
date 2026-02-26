import { useCart } from "./context/cartContext";

export default function ProductCard({ name, price, description, image }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ name, price, description, image });
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-stone-800">{name}</h3>
        <p className="text-amber-700 font-bold mt-1 text-lg">${price.toFixed(2)}</p>
        <p className="text-stone-600 text-sm mt-2 line-clamp-2">{description}</p>
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-stone-800 text-amber-50 py-2 rounded-lg hover:bg-stone-700 transition-colors font-medium"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
