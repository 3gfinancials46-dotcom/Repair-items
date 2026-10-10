import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        🔧 Repair<span>Mart</span>
      </a>

         <nav className="nav-menu">
            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#products">Products</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
         </nav>

      <a href="#products" className="nav-cart">
        🛒 Shop Now
      </a>
    </header>
  );
}