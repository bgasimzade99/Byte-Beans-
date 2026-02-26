import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-stone-800 mb-2">Contact Us</h2>
      <p className="text-stone-600 mb-6">
        Have questions? Want to place an order? Reach out to us!
      </p>

      {submitted ? (
        <div className="bg-amber-100 border border-amber-300 text-amber-800 p-4 rounded-lg">
          Thank you! We'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-stone-800 text-amber-50 py-2 rounded-lg hover:bg-stone-700 transition-colors font-medium"
          >
            Send Message
          </button>
        </form>
      )}

      <div className="mt-8 pt-8 border-t border-stone-200">
        <p className="font-medium text-stone-800 mb-2">Or reach us directly:</p>
        <p className="text-stone-600">Email: hello@bytebeans.com</p>
        <p className="text-stone-600">Phone: +994 (55) 451-19-99</p>
        <p className="text-stone-600">Address: 123 Coffee Street, Dev City</p>
      </div>
    </div>
  );
}
