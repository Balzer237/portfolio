'use client'
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    // Ici tu peux ajouter ton backend/API pour envoyer le message
  };

  return (
    <div className="min-h-screen flex flex-col text-white items-center justify-center p-6">
      <motion.h1 
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contactez-moi
      </motion.h1>

      {submitted ? (
        <p className="text-green-600 font-semibold">Merci ! Votre message a été envoyé.</p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-lg  p-8 rounded-xl ">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Envoyer
          </button>
        </form>
      )}

      <div className="mt-8 text-center text-white space-y-2 text-gray-700">
        <p>Email: <a href="mailto:kevinyemeli0@gmail.com" className="text-blue-600">kevinyemeli0@gmail.com</a></p>
        <p>Téléphone: +237 659128072</p>
        <p>LinkedIn: <a href="#" className="text-blue-600">Mon profil</a></p>
        <p>GitHub: <a href="#" className="text-blue-600">Mon profil</a></p>
      </div>
    </div>
  );
}
