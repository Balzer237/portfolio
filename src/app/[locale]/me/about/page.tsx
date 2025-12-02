'use client'
import ExpertiseSection from "@/src/app/_components/expertiseSection";
import SkillsTech from "@/src/app/_components/skillSection";
import { motion } from "framer-motion";
export default function AboutPage() {
  return (
    <div className="w-full flex flex-col min-h-screen px-6 md:px-20 py-20 text-white ">
      {/* Introduction */}
      
     <div>
        <div className="flex flex-col-reverse lg:flex-row">
            <div>
                <section className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">À propos de moi</h1>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                    Je suis <span className="text-white font-semibold">Kevin</span>, un développeur spécialisé en
                    <span className="text-white"> ingénierie Frontend, Mobile</span>. Je crée
                    des expériences digitales modernes, animées et scalables avec <span className="text-white">Next.js, Flutter</span>.
                </p>
                </section>

                {/* Histoire */}
                <section className="mt-16 max-w-4xl space-y-4">
                    <h2 className="text-3xl font-semibold">Mon Parcours</h2>
                    <p className="text-neutral-300">
                        Mon aventure dans la tech a débuté au lycée avec la série <span className="text-white font-semibold">Silicon Valley</span> (superbe serie). 
                        Son univers m'a inspiré et depuis, je vis selon ce cycle : <span className="text-white">découvrir</span>, 
                        <span className="text-white"> apprendre</span>, <span className="text-white">réaliser</span>.
                    </p>
                    <p className="text-neutral-300">
                        De cette inspiration est née une passion. J'ai mis ces compétences au service de projets concrets dans la finance, 
                        la micro‑banque et le développement web moderne.
                    </p>
                    <p className="text-neutral-300">
                        Aujourd'hui, j'accompagne les entreprises dans la création de produits digitaux performants, 
                        en maîtrisant chaque étape : UI/UX, développement, optimisation et DevOps.
                    </p>
                    </section>

                {/* Différenciateurs */}
                <section className="mt-16 max-w-4xl">
                <h2 className="text-3xl font-semibold mb-4">Ce qui me distingue</h2>
                <ul className="list-disc ml-6 space-y-2 text-neutral-300">
                    <li>Expertise solide en animations (GSAP, Framer Motion, Locomotive)</li>
                    <li>Architecture propre : Domain‑Driven Design & Hexagonale</li>
                    <li>Capacité full‑stack : web, mobile & DevOps</li>
                    <li>Expérience avec les systèmes fintech & microfinance</li>
                    <li>Code de haute qualité, maintenable et scalable</li>
                </ul>
                </section>
            </div>

  <div className="w-full flex items-center justify-end">
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-white rounded-full blur-xl"></div>
      <motion.img
        layoutId="profil"
        src="/images/me.jpeg"
        alt="Profil"
        className="relative w-40 h-40 md:w-100 md:h-100 rounded-full object-cover border-4 border-white/10 shadow-2xl"
      />
    </div>
  </div>
</div>

      

      {/* Tech Stack */}
      <section className="mt-20">
       <SkillsTech/>
      </section>

      <ExpertiseSection/>
      <section className="mt-24 text-center flex flex-col items-center justify-center gap-3">
        <h2 className="text-3xl font-semibold">Interested in working together?</h2>
        <p className="text-neutral-400 mt-2">Let’s build something great.</p>
          <a
            href={`/me/contact`}
            className="px-8 py-4 w-fit border border-white text-white font-semibold rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-white/10"
          >
            Me contacter
          </a>
      </section>
     </div>
     
    </div>
  );
}
