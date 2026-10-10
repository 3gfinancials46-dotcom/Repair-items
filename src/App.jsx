import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const categories = [
  { name: "Mobile Repair", icon: "📱" },
  { name: "Electrical Items", icon: "💡" },
  { name: "Computer Parts", icon: "💻" },
  { name: "Hardware Tools", icon: "🔧" },
  { name: "Plumbing Items", icon: "🚰" },
  { name: "Repair Tool Kits", icon: "🧰" },
];

const products = [
  { name: "Screwdriver Set", price: 299, icon: "🪛" },
  { name: "Digital Multimeter", price: 599, icon: "🎛️" },
  { name: "Mobile Repair Kit", price: 449, icon: "📱" },
  { name: "Hardware Tool Kit", price: 999, icon: "🧰" },
];

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="hero-label">WELCOME TO REPAIRMART</span>
            <h1>
              All Repair Items
              <span> Under One Roof.</span>
            </h1>
            <p>
              Discover repair tools, spare parts, electrical
              supplies and hardware essentials at one place.
            </p>
            <a className="hero-button" href="#products">
              Explore Products →
            </a>
          </div>

          <div className="hero-illustration">
            <span>🔧</span>
            <span>🪛</span>
            <span>⚙️</span>
            <span>🧰</span>
          </div>
        </section>

        <section className="content-section" id="categories">
          <div className="section-title">
            <span>EXPLORE OUR STORE</span>
            <h2>Shop by Category</h2>
            <p>Find the supplies you need for every repair job.</p>
          </div>

          <div className="category-list">
            {categories.map((category) => (
              <a
                className="category-item"
                href="#products"
                key={category.name}
              >
                <span>{category.icon}</span>
                <h3>{category.name}</h3>
                <p>Explore items →</p>
              </a>
            ))}
          </div>
        </section>

        <section className="content-section product-section" id="products">
          <div className="section-title">
            <span>OUR COLLECTION</span>
            <h2>Popular Repair Items</h2>
            <p>Browse some of our featured products.</p>
          </div>

          <div className="product-list">
            {products.map((product) => (
              <article className="product-item" key={product.name}>
                <div className="product-icon">{product.icon}</div>
                <h3>{product.name}</h3>
                <p className="price">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
                <a className="product-button" href="#contact">
                  Enquire Now
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <h2>Your Trusted Repair Supplies Store</h2>
          <p>
            Explore practical tools and repair essentials for
            technicians, workshops and everyday maintenance.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}