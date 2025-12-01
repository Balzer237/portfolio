'use client';

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const webSkills = [
  {
    name: "Next.js / React",
    desc: "Applications web rapides et scalables, SSR/SSG, routage avancé, gestion d'état locale avec Redux, intégration API avec Axios "
  },
  {
    name: "TanStack Query / API State",
    desc: "Fetching et mise en cache de données, pagination, synchronisation automatique avec le backend"
  },
  {
    name: "Animations Web (GSAP, Framer Motion, Locomotive lenis)",
    desc: "Transitions fluides, micro-interactions et animations UX modernes"
  },
  {
    name: "Tailwind CSS & UI/UX Design",
    desc: "Design responsive et réutilisable, interfaces cohérentes et modernes"
  },
];

const mobileSkills = [
  {
    name: "Flutter (Mobile / Web)",
    desc: "Applications fluides et performantes, responsive mobile & web, architecture modulaire"
  },
  {
    name: "GetX / State Management",
    desc: "Gestion d'état locale efficace, navigation et gestion des dépendances simplifiées"
  },
  {
    name: "Material Design",
    desc: "Interfaces élégantes et cohérentes avec les guidelines Material Design, composants personnalisables"
  },
  {
  name: "ObjectBox / Local Persistence",
  desc: "Stockage local rapide et efficace, synchronisation des données offline/online, accès instantané aux objets Dart, gestion de relations complexes et requêtes performantes"
}

];

const devOpsSkills = [
  { name: "CI/CD (GitHub Actions / Pipelines)", desc: "Automatisation des déploiements fiables et rapides" },
  { name: "Docker & Containerization", desc: "Isolation des applications et portabilité multi-environnements" },
  { name: "VPS / Nginx / Hosting", desc: "Configuration et maintenance de serveurs performants" },
  { name: "Testing & QA", desc: "Tests unitaires, d'intégration et E2E pour un code robuste et maintenable" },
];

export default function ExpertiseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-block", {
        opacity: 0,
        y: 50,
        stagger: 0.5,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Expertise</h2>

        {/* Frontend: Web & Mobile */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Frontend Web */}
          <div className="skill-block space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Frontend Web</h3>
            <ul className="flex flex-col gap-4">
              {webSkills.map((skill) => (
                <li key={skill.name} className="hover:translate-x-2 transition-transform duration-300">
                  <span className="font-semibold">{skill.name}</span> — {skill.desc}
                </li>
              ))}
            </ul>
          </div>

          {/* Frontend Mobile */}
          <div className="skill-block space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Frontend Mobile</h3>
            <ul className="flex flex-col gap-4">
              {mobileSkills.map((skill) => (
                <li key={skill.name} className="hover:translate-x-2 transition-transform duration-300">
                  <span className="font-semibold">{skill.name}</span> — {skill.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DevOps */}
        <div className="skill-block space-y-6">
          <h3 className="text-2xl font-semibold mb-6">DevOps</h3>
          <ul className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            {devOpsSkills.map((skill) => (
              <li key={skill.name} className="hover:translate-x-2 transition-transform duration-300">
                <span className="font-semibold">{skill.name}</span> — {skill.desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
