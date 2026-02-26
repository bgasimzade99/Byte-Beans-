import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-200px)]">
      {/* Hero - two column layout */}
      <section className="bg-[#2c1810] text-amber-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text content */}
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="block">BREWED</span>
                <span className="block">WITH</span>
                <span className="block">CARE</span>
              </h1>
              <p className="text-amber-100/90 text-lg md:text-xl max-w-md mb-8">
                Savor the layered notes of every roast. From bean to brew, crafted with care in every cup.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/products"
                  className="inline-block bg-amber-700 hover:bg-amber-600 text-amber-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  SHOP NOW
                </Link>
                <Link
                  to="/about"
                  className="inline-block bg-amber-50/10 hover:bg-amber-50/20 text-amber-50 border border-amber-200/50 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  LEARN MORE
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-4 text-amber-100/80 text-sm">
                <span>Trusted by 10k+ daily brewers</span>
                <span className="flex gap-2">
                  <a href="#" className="hover:text-amber-200 transition-colors" aria-label="Instagram">📷</a>
                  <a href="#" className="hover:text-amber-200 transition-colors" aria-label="Facebook">📘</a>
                </span>
              </div>
            </div>

            {/* Right - Coffee image */}
            <div className="order-1 md:order-2 relative">
              <div className="absolute -top-4 -right-4 md:top-0 md:right-0 text-right">
                <span className="text-amber-200/90 text-xs font-light block">Small batch</span>
                <span className="text-amber-200/90 text-xs font-light block">Big flavor</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600"
                alt="Premium coffee"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl object-cover aspect-4/5"
              />
            </div>
          </div>
        </div>

        {/* Subtle coffee bean texture */}
        <div
          className="absolute bottom-0 left-0 w-64 h-64 opacity-10 bg-cover bg-center -translate-x-1/2 translate-y-1/2 rounded-full"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200')",
          }}
        />
      </section>
    </div>
  );
}
