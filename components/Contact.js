import React, { useState } from "react";
import Image from "next/image";
import { FaEnvelope, FaHeart } from "react-icons/fa";
import { SiImdb } from "react-icons/si";

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

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const formSubmitData = new FormData();
      formSubmitData.append("name", formData.name);
      formSubmitData.append("email", formData.email);
      formSubmitData.append("subject", formData.subject);
      formSubmitData.append("message", formData.message);
      formSubmitData.append(
        "_subject",
        `New contact form submission from ${formData.name}`
      );
      formSubmitData.append("_captcha", "false");

      const response = await fetch(
        "https://formsubmit.co/contactme@chadmathew.com",
        {
          method: "POST",
          body: formSubmitData,
        }
      );

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      alert("Something went wrong.");
    }
  };

  return (
    <div className="w-full px-4 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold mb-6">CONTACT</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <Image
          src="/images/contactForm.webp"
          alt="Chad Mathew"
          width={400}
          height={600}
          className="rounded-xl"
        />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border p-3 rounded"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-3 rounded"
          />

          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full border p-3 rounded"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full border p-3 rounded"
          />

          <button className="w-full bg-black text-white p-3 rounded">
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="text-center mt-10">
        <SiImdb className="inline text-3xl mr-2" />
        <FaEnvelope className="inline text-2xl mr-2" />
        <FaHeart className="inline text-red-500" />
      </div>
    </div>
  );
};

export default Contact;
