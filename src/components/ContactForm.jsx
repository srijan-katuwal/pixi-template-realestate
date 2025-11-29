"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validate = () => {
    let tempErrors = { name: "", email: "", phone: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      tempErrors.email = "Invalid email address.";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^\+?\d{7,15}$/.test(formData.phone)) {
      tempErrors.phone = "Invalid phone number.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message cannot be empty.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on typing
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-5xl font-medium text-center mb-8 font-serif">
        Get in Touch
      </h2>
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-500 focus:ring-red-400"
                : "focus:ring-[#b49e79]"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500 focus:ring-red-400"
                : "focus:ring-[#b49e79]"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-gray-700 font-medium mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+1234567890"
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
              errors.phone
                ? "border-red-500 focus:ring-red-400"
                : "focus:ring-[#b49e79]"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
              errors.message
                ? "border-red-500 focus:ring-red-400"
                : "focus:ring-[#b49e79]"
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          type="button"
          className="w-full bg-[#b49e79] text-white py-3 rounded font-medium hover:bg-black transition"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
