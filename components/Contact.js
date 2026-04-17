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

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await fetch("https://formsubmit.co/contactme@chadmathew.com", {
        method: "POST",
        body: new FormData(e.target),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Something went wrong.");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>CONTACT</h1>

      {/* Image */}
      <img
        src="/images/contactForm.webp"
        alt="Chad Mathew"
        style={{
          width: "100%",
          borderRadius: "12px",
          marginBottom: "30px",
        }}
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <button
          type="submit"
          style={{
            padding: "14px",
            background: "#0B3D2E",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>

      {/* Footer */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <div style={{ marginBottom: "10px" }}>
          <FaImdb style={{ marginRight: "10px" }} />
          <FaEnvelope />
        </div>

        <p style={{ fontSize: "12px", color: "#666" }}>
          Made with <FaHeart style={{ color: "red", margin: "0 5px" }} /> by Mateen Ahmad
        </p>
      </div>
    </div>
  );
};

export default Contact;
