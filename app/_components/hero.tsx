"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ dict }: { dict: Record<string, string> }) {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.set(".hero-img", {
            scale: 1.3,
        });
        gsap.from(".hero-img", {
            scale: 1.3,
            duration:1,
        });
        gsap.to(".hero-img", {
            y: 80,
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

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src="/images/me-portrait-hero.jpg"
        alt="Kevin Portrait"
        className="hero-img absolute inset-0 w-full h-full object-cover object-center opacity-80"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />

      <div className="relative z-10 text-center px-4">
        <h1 className="hero-title text-5xl md:text-6xl font-bold text-white">
          {dict.welcome}
        </h1>

        <p className="hero-subtitle mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          {dict.hero_subtitle}
        </p>

        <div className="hero-cta mt-8 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition">
            {dict.view_work}
          </button>

          <button className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition">
            {dict.contact_me}
          </button>
        </div>
      </div>
    </section>
  );
}
