"use client";

import React from "react";

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-gray-800 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          Prêt à créer quelque chose d’extraordinaire ?
        </h2>
        <p className="mb-8 text-white/80">
          Contactez-moi ou explorez mes projets pour découvrir mon travail.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#work"
            className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-gray-100"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white text-white font-semibold rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-white/10"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
