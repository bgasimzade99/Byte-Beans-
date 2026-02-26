import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";

const hours = [
  { day: "Mon – Fri", time: "7AM – 8PM" },
  { day: "Saturday", time: "8AM – 6PM" },
  { day: "Sunday", time: "9AM – 5PM" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <ScrollReveal>
      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="section-beans-left" aria-hidden="true" />
        <div className="section-beans-right" aria-hidden="true" />
        <div className="section-content">
          <h1 id="contact-title" className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">Find us in the heart of the tech district.</p>
        </div>
      </section>
      </ScrollReveal>

      <section className="contact-main" aria-label="Contact form and location">
        <div className="section-beans-left" aria-hidden="true" />
        <div className="section-beans-right" aria-hidden="true" />
        <div className="section-content">
      <div className="contact-layout">
        <ScrollReveal delay={80}>
        <div className="contact-info">
          <div className="map-placeholder">
            <span>Byte Beans HQ</span>
            <span>123 Code Lane, Suite 42</span>
          </div>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-primary btn-directions">
            Get Directions
          </a>
          <div className="location-info">
            <h3>Address</h3>
            <p>123 Code Lane, Suite 42</p>
            <p>San Francisco, CA 94105</p>
            <h3>Hours</h3>
            <div className="location-hours">
              {hours.map((h) => (
                <p key={h.day}>
                  <strong>{h.day}</strong>: {h.time}
                </p>
              ))}
            </div>
          </div>
        </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
        <div className="contact-form-wrap">
          <h3>Send us a message</h3>
          {submitted ? (
            <p className="contact-success">Thank you! We'll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="contact-name">Name</label>
              <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} required />
              <label htmlFor="contact-email">Email</label>
              <input type="email" id="contact-email" name="email" value={formData.email} onChange={handleChange} required />
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows="4" />
              <button type="submit" className="btn-primary">
                Send
              </button>
            </form>
          )}
        </div>
        </ScrollReveal>
      </div>
        </div>
      </section>
    </div>
  );
}
