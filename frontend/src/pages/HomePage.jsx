import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

const featuredDrinks = [
  { name: "Byte Beans Special", price: 6, image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80" },
  { name: "Caramel Latte", price: 5.5, image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&q=80" },
  { name: "Cold Brew", price: 4.5, image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&q=80" },
  { name: "Flat White", price: 5.25, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80" },
  { name: "Matcha Byte", price: 5, image: "https://images.unsplash.com/photo-1536256264056-d437c47e3c76?w=400&q=80" },
];

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero */}
      <ScrollReveal>
      <section className="hero hero-bg" aria-labelledby="hero-title">
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-text">
            <h1 id="hero-title">Fuel Your Code.<em>Amazing morning</em></h1>
            <p className="subheadline">
            Specialty coffee crafted for builders, thinkers, and late-night creators.
            Where caffeine meets clean architecture.
            </p>
            <div className="hero-badges">
              <span>Fresh Roasts</span>
              <span>•</span>
              <span>Fast Wi-Fi</span>
              <span>•</span>
              <span>Developer Friendly</span>
            </div>
            <div className="hero-ctas">
              <Link to="/menu" className="btn-primary">
                Order Now
              </Link>
              <Link to="/contact" className="btn-secondary">
                Visit Us
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="glass-card">
              <img src="/image.png" alt="Byte Beans coffee logo" width="320" height="320" />
              <div className="steam" aria-hidden="true">
                <span /><span /><span /><span />
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Discover section - full bleed dark, text left, image right */}
      <ScrollReveal delay={100}>
      <section className="home-discover" aria-labelledby="discover-title">
        <div className="home-discover-pattern" aria-hidden="true" />
        <div className="home-discover-inner">
          <div className="home-discover-text">
            <h2 id="discover-title" className="home-discover-title">Discover the best coffee</h2>
            <p className="home-discover-body">
              Byte Beans is a coffee shop that provides you with quality coffee that helps boost
              your productivity and helps build your mood. Having a cup of coffee is good, but
              having a cup of real coffee is greater. There is no doubt that you will enjoy this
              coffee more than others you have ever tasted.
            </p>
            <Link to="/menu" className="btn-primary">Learn More</Link>
          </div>
          <div className="home-discover-visual">
            <div className="home-discover-frame">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900"
                alt="Fresh coffee being poured into a cup"
                width="540"
                height="380"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Featured drinks carousel - horizontal scroll on mobile */}
      <ScrollReveal delay={120}>
      <section className="home-featured-carousel" aria-labelledby="featured-drinks-title">
        <h2 id="featured-drinks-title" className="featured-carousel-title">Featured Drinks</h2>
        <div className="featured-carousel-scroll">
          {featuredDrinks.map((item) => (
            <Link key={item.name} to="/menu" className="featured-carousel-card">
              <div className="featured-carousel-image-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  width="160"
                  height="160"
                  loading="lazy"
                  onError={(e) => { e.target.src = "/image.png"; }}
                />
              </div>
              <span className="featured-carousel-name">{item.name}</span>
              <span className="featured-carousel-price">${item.price.toFixed(2)}</span>
            </Link>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* Featured strip */}
      <ScrollReveal delay={150}>
      <section className="home-featured">
        <div className="home-featured-inner">
          <h2 className="home-featured-title">Crafting exceptional coffee since day one</h2>
          <p className="home-featured-text">
            From single-origin beans to our signature blends, every cup at Byte Beans
            is made with care. Join us for your next caffeine fix—or your next sprint.
          </p>
          <Link to="/menu" className="btn-primary">
            Explore Our Menu
          </Link>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
