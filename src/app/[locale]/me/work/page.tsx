'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiRedux, SiFramer } from 'react-icons/si';

const projects = [
  {
    name: "Mendo Coti",
    description: "Plateforme innovante de tontine en ligne, affiliée à une micro-finance, permettant la gestion digitale des cotisations, épargnes collectives et prêts solidaires avec suivi transparent des transactions.",
    technologies: ["Next.js", "Tailwind CSS", "React", "Redux"],
    stackIcons: [SiNextdotjs, SiTailwindcss, FaReact, SiRedux],
    image: "/images/coti.png",
    link: "#",
    github: "#",
    category: "web",
    features: ["Gestion multi-rôles", "Transactions sécurisées", "Tableau de bord analytique", "Notifications automatisées"]
  },
  {
    name: "MendoLearn",
    description: "Réseau social éducatif connectant apprenants et formateurs à travers des cours interactifs, forums de discussion et outils collaboratifs pour un apprentissage communautaire.",
    technologies: ["Next.js", "Tailwind CSS", "React", "Redux", "Framer Motion"],
    stackIcons: [SiNextdotjs, SiTailwindcss, FaReact, SiRedux, SiFramer],
    image: "/images/mendoLearn.png",
    link: "#",
    github: "#",
    category: "web",
    features: ["Classes virtuelles", "Messagerie intégrée", "Progress tracking", "Certifications digitales"]
  },
  {
    name: "MVP Core Banking",
    description: "Solution bancaire digitale complète offrant une gestion centralisée des comptes, transactions, prêts et services financiers, interface administrateur.",
    technologies: ["Next.js", "Tailwind CSS", "React", "Redux", "Framer Motion"],
    stackIcons: [SiNextdotjs, SiTailwindcss, FaReact, SiRedux, SiFramer],
    link: "#",
    github: "#",
    category: "web",
    features: ["Multi-agences", "Reporting avancé", "API banking", "Sécurité bancaire"]
  },
  {
    name: "Portfolio Personnel",
    description: "Vitrine digitale interactive présentant mon expertise technique et mes réalisations à travers une expérience utilisateur immersive et des animations fluides.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    stackIcons: [SiNextdotjs, SiTailwindcss, SiFramer],
    image: "/images/portfolio.png",
    link: "#",
    github: "#",
    category: "web",
    features: ["Design responsive", "Animations Framer", "Performance optimale", "SEO technique"]
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen text-white p-6 max-w-7xl mx-auto">
        <div className='w-full flex flex-col justify-center items-center lg:flex-row-reverse  justify-around'>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-white rounded-full blur-xl">
            </div>
              <motion.img
                layoutId="profil"
                src="/images/me.jpeg"
                alt="Profil"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/10 shadow-2xl"
              />
          </div>
          {/* En-tête */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r  text-white">
              Mes Projets
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Des solutions digitales qui allient innovation technique, design élégant et expérience utilisateur exceptionnelle.
            </p>
          </motion.div>
        </div>

      {/* Projets avec design horizontal/vertical alterné */}
      <div className="space-y-24">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          
          return (
            <motion.article
              key={idx}
              className={`relative group ${isEven ? 'md:pr-8' : 'md:pl-8'}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Ligne de connexion entre les projets */}
              {idx < projects.length - 1 && (
                <div className="absolute left-1/2 top-full h-24 w-0.5 bg-gradient-to-b from-cyan-500/30 to-purple-500/30 hidden md:block"></div>
              )}

              {/* Cercle indicateur */}
              <div className={`absolute top-0 ${isEven ? 'right-0 md:right-[-12px]' : 'left-0 md:left-[-12px]'} z-10`}>
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{idx + 1}</span>
                  </div>
                </div>
              </div>

              <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                {/* Image avec effets */}
                <motion.div 
                  className={`flex-1 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                    
                    {/* Effet de brillance */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {!project.image&&
                    <div className='absolute text-xl font-bold flex w-full h-full justify-center items-center'>
                        Private (Private service)
                    </div>}
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Badge catégorie */}
                    <div className={`absolute top-4 ${isEven ? 'right-4' : 'left-4'} z-20`}>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.category === 'web' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-purple-500/20 text-purple-300'}`}>
                        {project.category === 'web' ? 'WEB' : 'MOBILE'}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Contenu */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2 text-gray-100 group-hover:text-white transition-colors">
                      {project.name}
                    </h2>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex gap-2">
                        {project.stackIcons.map((Icon, i) => (
                          <div key={i} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                            <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                          </div>
                        ))}
                      </div>
                      
                      {/* Badges technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-400 hover:text-white transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-4">
                   
                    
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Code source</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Call to action */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-xl text-gray-400 mb-6">
          Un projet en tête ? <span className="text-white font-semibold">Transformons-le ensemble</span>
        </p>
        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Discutons de votre projet</span>
          <FaExternalLinkAlt className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </div>
  );
}