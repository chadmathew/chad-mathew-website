import React, { useState } from "react";
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

    try {
      const response = await fetch("https://formsubmit.co/contactme@chadmathew.com", {
        method: "POST",
        body: new FormData(e.target),
      });

      if (response.ok) {
        alert("Message sent!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send.");
      }
    } catch {
      alert("Error sending message.");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>CONTACT</h1>

      {/* Image (SAFE version using <img>) */}
      <img
        src="/images/contactForm.webp"
        alt="Chad Mathew"
        style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
      />

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" />

        <button type="submit">Send Message</button>
      </form>

      <div style={{ marginTop: "30px" }}>
        <FaImdb style={{ marginRight: "10px" }} />
        <FaEnvelope />
      </div>

      <p style={{ marginTop: "20px", fontSize: "12px" }}>
        Made with <FaHeart style={{ color: "red" }} /> by Mateen Ahmad
      </p>
    </div>
  );
};

export default Contact;
