import { useCart } from "./context/cartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQty, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <h2>Your cart is empty</h2>
          <p>Add some delicious coffee to get started!</p>
          <a href="/menu" className="btn-primary">
            Browse Menu
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2 className="section-title">Your Cart</h2>
      {cart.map((item) => (
        <div key={item.name} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="cart-item-info">
            <strong>{item.name}</strong>
            <p>${item.price.toFixed(2)} × {item.qty}</p>
          </div>
          <div className="cart-qty-controls">
            <button
              type="button"
              className="cart-qty-btn"
              onClick={() => updateQty(item.name, item.qty - 1)}
            >
              −
            </button>
            <span>{item.qty}</span>
            <button
              type="button"
              className="cart-qty-btn"
              onClick={() => updateQty(item.name, item.qty + 1)}
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="cart-remove"
            onClick={() => removeFromCart(item.name)}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="cart-total">
        Total: ${cartTotal.toFixed(2)}
      </div>
      <a href="/menu" className="btn-secondary cart-continue">
        Continue Shopping
      </a>
    </div>
  );
}
