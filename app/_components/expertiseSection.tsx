"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frontendSkills = [
  { name: "Next.js / React", desc: "Applications rapides et scalables" },
  { name: "Flutter (Mobile / Web)", desc: "Interfaces fluides et performantes" },
  { name: "Animations Web (GSAP, Framer Motion)", desc: "Micro-interactions" },
  { name: "UI/UX Design", desc: "Expérience utilisateur moderne" },
  { name: "Tailwind CSS", desc: "Design responsive et propre" },
];

const devOpsSkills = [
  { name: "CI/CD (GitHub Actions / Pipelines)", desc: "Déploiements fiables" },
  { name: "Docker & Containerization", desc: "Isolation et portabilité" },
  { name: "VPS / Nginx / Hosting", desc: "Serveurs performants" },
  { name: "Monitoring / Logs", desc: "Applications stables" },
  { name: "Testing & QA", desc: "Code robuste et maintenable" },
];

export default function ExpertiseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-block", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
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
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Expertise</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Frontend */}
          <div className="skill-block space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Frontend</h3>
            <ul className="flex flex-col gap-4">
              {frontendSkills.map((skill) => (
                <li key={skill.name} className="hover:translate-x-2 transition-transform duration-300">
                  <span className="font-semibold">{skill.name}</span> — {skill.desc}
                </li>
              ))}
            </ul>
          </div>

          {/* DevOps */}
          <div className="skill-block space-y-6">
            <h3 className="text-2xl font-semibold mb-6">DevOps</h3>
            <ul className="flex flex-col gap-4">
              {devOpsSkills.map((skill) => (
                <li key={skill.name} className="hover:translate-x-2 transition-transform duration-300">
                  <span className="font-semibold">{skill.name}</span> — {skill.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
