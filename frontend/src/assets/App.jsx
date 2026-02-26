import "./App.css";
import Navbar from "../Navbar";
import Home from "../Home";
import Products from "../Products";
import About from "./About";
import Contact from "../Contact";
import Cart from "../Cart";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50/30">
      <Navbar />
      <main className="flex-1 layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <footer className="bg-stone-800 text-amber-50 py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          <p>© {new Date().getFullYear()} Byte Beans. Crafted with ☕ and code.</p>
        </div>
      </footer>
    </div>
  );
}