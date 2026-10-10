import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>
            🔧 Repair<span>Mart</span>
          </h2>
          <p>
            Your one-stop destination for repair tools,
            spare parts, electrical supplies and hardware.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#products">Products</a>
          <a href="#about">About Us</a>
        </div>

        <div className="footer-links">
          <h3>Customer Support</h3>
          <a href="#contact">Contact Us</a>
          <a href="#contact">Shipping Policy</a>
          <a href="#contact">Return Policy</a>
          <a href="#contact">Privacy Policy</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Information</h3>
          <p>📧 support@example.com</p>
          <p>📞 Your Business Phone</p>
          <p>📍 Your Shop Address</p>
          <p>🕒 Mon - Sat: 9 AM - 7 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} RepairMart.
          All rights reserved.
        </p>
        <p>Quality Tools | Reliable Repairs</p>
      </div>
    </footer>
  );
}