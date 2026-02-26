import { useCart } from "../context/cartContext";
import ScrollReveal from "../components/ScrollReveal";

const menuItems = [
  { name: "Espresso Shot", description: "Double shot of our house blend. Bold and smooth.", price: 3.5, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80" },
  { name: "Caramel Latte", description: "Espresso with steamed milk and house-made caramel.", price: 5.5, image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&q=80" },
  { name: "Matcha Byte", description: "Creamy matcha with oat milk. Perfect for focus.", price: 5, image: "https://images.unsplash.com/photo-1536256264056-d437c47e3c76?w=400&q=80" },
  { name: "Cold Brew", description: "24-hour steeped. Smooth, low acid, high caffeine.", price: 4.5, image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&q=80" },
  { name: "Americano", description: "Rich espresso diluted with hot water. Clean and strong.", price: 4, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80" },
  { name: "Cappuccino", description: "Equal parts espresso, steamed milk, velvety foam.", price: 4.75, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80" },
  { name: "Mocha", description: "Espresso, chocolate, steamed milk. Pure indulgence.", price: 5.5, image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80" },
  { name: "Iced Latte", description: "Chilled espresso with cold milk over ice.", price: 5.25, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80" },
  { name: "Flat White", description: "Ristretto shots with microfoam. Silky smooth.", price: 5.25, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80" },
  { name: "Hot Chocolate", description: "Rich, creamy. For the non-coffee lovers.", price: 4, image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&q=80" },
  { name: "Chai Latte", description: "Spiced black tea with steamed milk.", price: 4.75, image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80" },
  { name: "Byte Beans Special", description: "Our signature blend. The perfect cup for coding.", price: 6, image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80" },
];

export default function MenuPage() {
  const { addToCart } = useCart();

  return (
    <div className="menu-page">
      <ScrollReveal>
      {/* Hero section - full bleed dark like home */}
      <section className="menu-hero" aria-labelledby="menu-title">
        <div className="section-beans-left" aria-hidden="true" />
        <div className="section-beans-right" aria-hidden="true" />
        <div className="menu-hero-pattern" aria-hidden="true" />
        <div className="menu-hero-inner section-content">
          <h1 id="menu-title" className="menu-hero-title">Our Menu</h1>
          <p className="menu-hero-subtitle">Handcrafted drinks, fresh daily. Something for every taste.</p>
        </div>
      </section>
      </ScrollReveal>

      {/* Menu grid - dark background */}
      <ScrollReveal delay={80}>
      <section className="menu-section" aria-label="Drinks">
        <div className="section-beans-left" aria-hidden="true" />
        <div className="section-beans-right" aria-hidden="true" />
        <div className="menu-grid">
        {menuItems.map((item) => (
          <article key={item.name} className="menu-card">
            <div className="menu-card-image-wrap">
              <div className="menu-card-frame">
                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-card-image"
                  width="400"
                  height="300"
                  loading="lazy"
                  onError={(e) => { e.target.src = "/image.png"; }}
                />
              </div>
            </div>
            <div className="menu-card-body">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">${item.price.toFixed(2)}</p>
              <button
                type="button"
                className="btn-add"
                aria-label={`Add ${item.name} to cart`}
                onClick={() => addToCart({ ...item })}
              >
                Add to cart
              </button>
            </div>
          </article>
        ))}
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
