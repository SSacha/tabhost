"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");
    const res = await fetch("/api/sendemail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setStatus("Message envoyé ✅");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Erreur ❌ Réessaie plus tard.");
    }
  };

  return (
    <>
      <Navbar />
      <main className="max-w-lg mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-2 rounded h-32"
            required
          ></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Envoyer
          </button>
        </form>
        {status && <p className="mt-4 text-sm">{status}</p>}
      </main>
      <Footer />
    </>
  );
}