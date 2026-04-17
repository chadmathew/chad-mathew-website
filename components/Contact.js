import React, { useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaHeart, FaImdb } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("https://formsubmit.co/contactme@chadmathew.com", {
        method: "POST",
        body: new FormData(e.target),
      });

      if (res.ok) {
        alert("Message sent!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error();
      }
    } catch {
      alert("Something went wrong.");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold mb-8">CONTACT</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div>
          <Image
            src="/images/contactForm.webp"
            alt="Chad Mathew"
            width={400}
            height={600}
            className="rounded-xl w-full h-auto"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border rounded"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border rounded"
          />

          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-3 border rounded"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            className="w-full p-3 border rounded"
            rows={4}
          />

          <button className="w-full bg-black text-white py-3 rounded">
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="text-center mt-10 text-sm">
        <p>
          Made with <FaHeart className="inline text-red-500 mx-1" /> by Mateen Ahmad
        </p>

        <div className="flex justify-center gap-4 mt-4 text-xl">
          <FaImdb />
          <FaEnvelope />
        </div>
      </div>
    </div>
  );
};

export default Contact;
