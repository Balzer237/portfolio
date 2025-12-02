"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { SiReact, SiNextdotjs, SiFlutter, SiNodedotjs, SiNestjs, SiDocker, SiGithubactions, SiMysql, SiRedis, SiMongodb, SiRedux } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", icon: <SiReact size={40} color="#61dafb" /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} color="#fff" /> },
  { name: "Flutter", icon: <SiFlutter size={40} color="#02569B" /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} color="#339933" /> },
  { name: "Redux", icon: <SiRedux size={40} color="#E0234E" /> },
  { name: "Docker", icon: <SiDocker size={40} color="#2496ED" /> },
  { name: "GitHub Actions", icon: <SiGithubactions size={40} color="#2088FF" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" /> },,
  { name: "Redis", icon: <SiRedis size={40} color="#DC382D" /> },
];

export default function SkillsTech() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-item", {
        opacity: 0,
        scale: 0.5,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Compétences Techniques</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill) => (
            <div key={skill?.name} className="skill-item flex flex-col items-center gap-2">
              {skill?.icon}
              <span className="text-sm mt-2">{skill?.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
