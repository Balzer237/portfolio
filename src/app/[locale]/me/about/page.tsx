'use client'
import ExpertiseSection from "@/src/app/_components/expertiseSection";
import SkillsTech from "@/src/app/_components/skillSection";
import { motion } from "framer-motion";
export default function AboutPage() {
  return (
    <div className="w-full flex flex-col min-h-screen px-6 md:px-20 py-20 text-white ">
      {/* Introduction */}
      
     <div>
        <div className="flex flex-col-reverse lg:flex-row ">
            <div>
                <section className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">About Me</h1>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                I’m <span className="text-white font-semibold">Kevin</span>, a developer specialized in
                <span className="text-white"> Frontend, Mobile and Backend engineering</span>. I build
                modern, animated and scalable digital experiences with <span className="text-white">Next.js, Flutter and NestJS</span>.
                </p>
            </section>

            {/* Story */}
            <section className="mt-16 max-w-4xl space-y-4">
                <h2 className="text-3xl font-semibold">My Journey</h2>
                <p className="text-neutral-300">
                I started coding with curiosity and quickly discovered my passion for clean interfaces,
                smooth animations and strong architectures. Over the years, I’ve built professional
                applications for finance, micro‑banking, internal systems and modern web platforms.
                </p>
                <p className="text-neutral-300">
                Today, I help companies build high‑quality products from design to deployment: UI/UX,
                development, optimization and DevOps pipelines.
                </p>
            </section>

            {/* Differentiators */}
            <section className="mt-16 max-w-4xl">
                <h2 className="text-3xl font-semibold mb-4">What Makes Me Different</h2>
                <ul className="list-disc ml-6 space-y-2 text-neutral-300">
                <li>Strong expertise in animations (GSAP, Framer Motion,Locomotive lenix)</li>
                <li>Clean architecture: Domain‑Driven Design & Hexagonal</li>
                <li>Full‑stack capability: web, mobile, backend & DevOps</li>
                <li>Experience with fintech & microfinance systems</li>
                <li>High‑quality, maintainable and scalable code</li>
                </ul>
            </section>
            </div>

            <div className="w-full flex items-center justify-end">
                <motion.img
                    layoutId="profil"
                    src="/images/me.jpeg"
                    alt="arrow down"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className='profil border-r border-t border-white w-50 h-50 lg:w-100 lg:h-100 rounded-full mx-auto mb-4' 
                />
            </div>
        </div>

      

      {/* Tech Stack */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-8">Technical Stack</h2>

       <SkillsTech/>
      </section>

      <ExpertiseSection/>
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-semibold">Interested in working together?</h2>
        <p className="text-neutral-400 mt-2">Let’s build something great.</p>
        <a
          href="/contact"
          className="inline-block mt-6 px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition"
        >
          Contact Me
        </a>
      </section>
     </div>
     
    </div>
  );
}
