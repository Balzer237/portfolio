'use client';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaPalette, 
  FaMobileAlt, 
  FaGlobe, 
  FaBolt, 
  FaDatabase, 
  FaMicrochip,
  FaLayerGroup,
  FaShieldAlt,
  FaReact,
} from 'react-icons/fa';

const webServices = [
  { title: "Conception d'application web", desc: "SPA, SSR, SSG avec Next.js, architecture scalable et maintenable.", icon: FaGlobe },
  { title: "Intégration d'API", desc: "Connexion REST / GraphQL pour récupérer et afficher des données dynamiques.", icon: FaMicrochip },
  { title: "Gestion d'état", desc: "Redux et TanStack Query pour des apps web performantes et réactives.", icon: FaLayerGroup },
  { title: "UI / UX Design", desc: "Tailwind CSS, responsive design, dark mode, animations Framer Motion.", icon: FaPalette },
  { title: "Optimisation & performance", desc: "Lazy loading, code splitting, SEO et bonnes pratiques web.", icon: FaBolt },
];

const mobileServices = [
  { title: "Conception d'application mobile", desc: "Apps Flutter performantes et cross-platform pour iOS et Android.", icon: FaMobileAlt },
  { title: "Gestion d'état", desc: "GetX pour un état fluide et réactif.", icon: FaLayerGroup },
  { title: "UI / UX & Material Design", desc: "Design intuitif, transitions et animations fluides.", icon: FaPalette },
  { title: "Persistance locale", desc: "Stockage efficace avec ObjectBox pour données offline.", icon: FaDatabase },
  { title: "Intégration d'API & backend", desc: "Communication avec REST / GraphQL et synchronisation des données.", icon: FaMicrochip },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen text-white p-6 mx-auto">
        
      {/* En-tête avec photo intégrée */}
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-between mb-16 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-2/3">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Mes Services
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Je crée des expériences digitales sur mesure, alliant performance, élégance et fonctionnalité. 
            Chaque projet est une opportunité d'innover et de dépasser les attentes.
          </motion.p>
        </div>
        
        <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-white rounded-full blur-xl"></div>
                   <motion.img
            layoutId="profil"
            src="/images/me.jpeg"
            alt="Profil"
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/10 shadow-2xl"
          />
        </div>
      </motion.div>

      {/* Section Web avec timeline verticale */}
      <section className="mb-24 relative">
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
            <FaReact className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold">Développement Web</h2>
          <span className="ml-auto px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium">
            Next.js / React
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Ligne verticale décorative */}
          <div className="absolute left-0 md:left-1/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 to-purple-500/30"></div>
          
          {webServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                className="relative mb-10 pl-8 md:pl-32"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Point sur la timeline */}
                <div className="absolute left-[-4px] md:left-[calc(25%-4px)] top-6 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className="group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-100 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed pl-10 group-hover:text-gray-300 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Section Mobile avec grille asymétrique */}
      <section className="relative">
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
            {/* <FaFlutter className="w-8 h-8" /> */}
          </div>
          <h2 className="text-3xl font-bold">Développement Mobile</h2>
          <span className="ml-auto px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-medium">
            Flutter
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Arrière-plan décoratif */}
          <div className="absolute -inset-4 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl blur-3xl"></div>
          
          {mobileServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                className="relative mb-10 pl-8 md:pl-32"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Point sur la timeline */}
                <div className="absolute left-[-4px] md:left-[calc(25%-4px)] top-6 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className="group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-100 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed pl-10 group-hover:text-gray-300 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Section supplémentaire - Approche */}
      <motion.div 
        className="mt-24 p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 backdrop-blur-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-6">
          <h3 className="text-2xl font-bold">Mon Approche</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <FaCode className="w-5 h-5 text-blue-400" />
              </div>
              <h4 className="font-semibold text-lg text-blue-300">Code Maintenable</h4>
            </div>
            <p className="text-gray-400">Architecture propre, documentation complète et tests automatisés.</p>
          </div>
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-green-500/20">
                <FaBolt className="w-5 h-5 text-green-400" />
              </div>
              <h4 className="font-semibold text-lg text-green-300">Performance</h4>
            </div>
            <p className="text-gray-400">Optimisation continue pour des applications rapides et fluides.</p>
          </div>
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <FaShieldAlt className="w-5 h-5 text-purple-400" />
              </div>
              <h4 className="font-semibold text-lg text-purple-300">Collaboration</h4>
            </div>
            <p className="text-gray-400">Communication transparente et itérations basées sur vos retours.</p>
          </div>
        </div>
      </motion.div>

      {/* Call-to-action subtil */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-xl text-gray-400">
          Prêt à donner vie à votre projet ? <span className="text-white font-semibold">Discutons-en</span>
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
        </div>
      </motion.div>
    </div>
  );
}