'use client'
import { motion } from "framer-motion";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
gsap.registerPlugin(ScrollTrigger)
export default function MedescriptionAtHome() {

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".d-section",
                    start: "top 70%",
                    end: "bottom 40%",
                    //scrub: true,
                }
            }
            )
            tl.from(
                ".profil", { y: 40, opacity: 0, duration: 1, ease: "expo.out" }
            )
            tl.from(
                ".d-text", { y: 60, opacity: 0, duration: 0.5, ease: "expo.out" }
            )
        })
        return () => ctx.revert()
    }, [])
    return (
        <motion.div
            className='d-section pt-6 w-full flex text-white text-3xl flex-col justify-center items-center '>
            <div>
                <motion.img
                layoutId="profil"
                    src="/images/me.jpeg"
                    alt="arrow down"
                    className='profil w-20 h-20 mx-auto rounded-full mb-4' />
            </div>
            <h1 className='d-text w-[80%] md:w-[60%] lg:w-[40%] text-center py-20 pt-4 text-lg md:text-xl font-inter text-white/80 max-w-2xl mx-auto'>
                Développeur spécialisé en Flutter & Next.js, j’aide les entreprises à créer des applications performantes, animées et fiables. Passionné par l’UX, le code propre et les architectures modernes.
            </h1>
        </motion.div>
    )
}