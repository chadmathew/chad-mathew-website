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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const formSubmitData = new FormData();
      Object.entries(formData).forEach(([key, value]) =>
        formSubmitData.append(key, value)
      );

      const response = await fetch(
        "https://formsubmit.co/contactme@chadmathew.com",
        {
          method: "POST",
          body: formSubmitData,
        }
      );

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed");
      }
    } catch {
      alert("Failed to send message.");
    }
  };

  return (
    <div className="w-full px-4">
      <h1 className="text-6xl font-bold mb-6">CONTACT</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Image
            src="/images/contactForm.webp"
            alt="Chad Mathew"
            width={400}
            height={640}
            className="rounded-xl"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full p-3 border rounded" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-3 border rounded" />
          <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="w-full p-3 border rounded" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="w-full p-3 border rounded" />

          <button className="w-full bg-black text-white py-3 rounded">
            Send Message
          </button>
        </form>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <FaImdb />
        <FaEnvelope />
      </div>

      <p className="text-center mt-6 text-sm">
        Made with <FaHeart className="inline text-red-500" /> by Mateen Ahmad
      </p>
    </div>
  );
};

export default Contact;
