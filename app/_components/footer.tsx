"use client";

import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { SiWhatsapp, FiGithub, FiLinkedin, FiMail } from "react-icons/si";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Contact info */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-semibold text-lg">Kevin — Développeur</span>
          <a href="mailto:kevin@example.com" className="hover:underline flex items-center gap-2">
            <FiMail /> kevin@example.com
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-6">
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FiGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FiLinkedin size={24} />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <SiWhatsapp size={24} />
        </a>
        </div>

        {/* Back to top */}
        <div>
          <a href="#top" className="flex items-center gap-2 hover:text-gray-400 transition">
            <FiArrowUp size={20} /> Haut de page
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Kevin. Tous droits réservés.
      </div>
    </footer>
  );
}
