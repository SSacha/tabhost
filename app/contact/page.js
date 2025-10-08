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
      <main className="flex flex-col w-full justify-center items-center px-4 py-12">
        <h1 className="text-3xl mx-perso font-bold mb-4">Contactez-nous</h1>
        <p className="mx-perso px-4 py-4 mb-4 text-align-center " >Via ce formulaire je vous répondrai dés que possible, n'hésitez pas à laisser vos coordonnées</p>
        <form onSubmit={handleSubmit} className="mx-perso space-y-4">
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
          <button type="submit" className="button-send px-4 py-2 rounded">
            Envoyer
          </button>
        </form>
        {status && <p className=" mx-perso mt-4 text-sm">{status}</p>}

        <p className="text-2xl mx-perso px-4 py-4 mb-4 text-align-center " >Ou bien directement par :<br></br>
          Téléphone : <span className="font-bold">(+33) 06 46 43 32 91</span><br></br>
          Email : <span className="font-bold">tabandhost@gmail.com</span><br></br>
          Instagram : <a className="font-bold contact-a" href="https://www.instagram.com/tabandhost">@tabandhost</a><br></br>
          Adresse : 70 rue Ligier, 33000 Bordeaux<br></br>
        </p>
        <p className="text-2xl font-bold mx-perso px-4 py-4 mb-4 text-align-center " >
          Vous cherchez à maximiser la rentabilité et la gestion de votre bien ? <br></br>
          Contactez-nous dès aujourd’hui pour une solution clé en main !
        </p>
        

      </main>


      <Footer />
    </>
  );
}