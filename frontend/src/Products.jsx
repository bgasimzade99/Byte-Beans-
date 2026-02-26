import ProductCard from "./ProductCard";

const coffees = [
  {
    name: "Americano",
    price: 4.5,
    description: "Rich espresso shots diluted with hot water. Smooth and bold.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400",
  },
  {
    name: "Espresso",
    price: 3.0,
    description: "Strong, concentrated coffee. The heart of every espresso drink.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400",
  },
  {
    name: "Latte",
    price: 5.0,
    description: "Espresso with steamed milk and a thin layer of foam.",
    image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400",
  },
  {
    name: "Cappuccino",
    price: 4.75,
    description: "Equal parts espresso, steamed milk, and velvety foam.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400",
  },
  {
    name: "Byte Beans Special",
    price: 6.5,
    description: "Our house blend — the perfect cup for coding sessions.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400",
  },
  {
    name: "Iced Latte",
    price: 5.5,
    description: "Chilled espresso with cold milk over ice.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400",
  },
  {
    name: "Hot Chocolate",
    price: 4.0,
    description: "Rich, creamy hot chocolate for the non-coffee lovers.",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400",
  },
  {
    name: "Mocha",
    price: 5.5,
    description: "Espresso, chocolate, and steamed milk. Pure indulgence.",
    image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400",
  },
];

export default function Products() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-stone-800 text-center mb-8">
        Our Menu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {coffees.map((coffee) => (
          <ProductCard
            key={coffee.name}
            name={coffee.name}
            price={coffee.price}
            description={coffee.description}
            image={coffee.image}
          />
        ))}
      </div>
    </div>
  );
}
