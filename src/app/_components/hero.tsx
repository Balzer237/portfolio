"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        // gsap.set(".hero-img", {
        //     scale: 1.3,
        // });
        gsap.from(".hero-img", {
            scale: 1.3,
            duration:1,
        });
        gsap.to(".hero-img", {
            y: 80,
            scale:1,
            scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            },
        });
        gsap.from(".hero-title", {
            opacity: 0,
            y: 40,
            duration: 1.2,
            ease: "power3.out",
        });

        gsap.from(".hero-subtitle", {
            opacity: 0,
            y: 20,
            delay: 0.2,
            duration: 1.2,
            ease: "power3.out",
        });

        gsap.from(".hero-cta", {
            opacity: 0,
            y: 10,
            delay: 0.4,
            duration: 1.2,
            ease: "power3.out",
        });

        
    }, heroRef);

    return () => ctx.revert();
  }, []);
const {t}= useTranslation()
  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src="/images/me.jpeg"
        alt="Kevin Portrait"
        className="hero-img absolute inset-0 w-full h-full object-cover object-center opacity-80"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />

      <div className="relative z-10 text-center px-4">
        <h1 className="hero-title text-4xl md:text-5xl font-bold text-white">
         Je suis Kevin, 
          développeur Frontend & Mobile.
        </h1>

        <p className="hero-subtitle mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Je crée des interfaces modernes, performantes, et animées avec Next.js et Flutter.
        </p>

        <div className="hero-cta mt-8 flex gap-4 justify-center">
          <a
            href={`/me/services`}
            className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-gray-100"
          >
            Voir mes service
          </a>

          <a
            href={`/me/contact`}
            className="px-8 py-4 border border-white text-white font-semibold rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-white/10"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
