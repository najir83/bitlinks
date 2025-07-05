"use client";
import React, { useState } from "react";
import { toast, Bounce } from "react-toastify";
const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setStatus("Sending...");

    setSending(1);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      toast("Thanks for contacting us!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setForm({ name: "", email: "", message: "" });
      setSending(0);
    } else {
      // setStatus("");
      toast.error("Failed to send ❌", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setSending(0);
    }
  };
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 mb-6">Contact Us</h1>

        <p className="mb-6 text-lg">
          Have questions, feedback, or issues with BitLinks? We'd love to hear
          from you. Just fill out the form below and we'll get back to you as
          soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-purple-300 rounded-lg px-4 py-2 focus:outline-purple-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-purple-300 rounded-lg px-4 py-2 focus:outline-purple-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border border-purple-300 rounded-lg px-4 py-2 focus:outline-purple-500"
            ></textarea>
          </div>

          <button
            disabled={sending}
            type="submit"
            className="bg-purple-500 text-white font-semibold px-5 py-2 rounded-full hover:bg-purple-600 transition"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
