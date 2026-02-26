import { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileStickyCTA from "./components/MobileStickyCTA";
import CodeToCoffee from "./components/CodeToCoffee";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const MenuPage = lazy(() => import("./pages/MenuPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CartPage = lazy(() => import("./CartPage"));

function PageLoader() {
  return (
    <div className="page-loader" aria-hidden="true">
      <div className="page-loader-spinner" />
    </div>
  );
}

export default function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <CartProvider>
      <div className="app">
        {!loadingDone && (
          <div className="loading-screen">
            <CodeToCoffee onComplete={() => setLoadingDone(true)} />
          </div>
        )}
        <div className={`app-content ${loadingDone ? "visible" : ""}`}>
        <ScrollToTop />
        <Navbar />
        <main className="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <MobileStickyCTA />
        </div>
      </div>
    </CartProvider>
  );
}
