'use client'
 import { motion } from "framer-motion";
 import gsap from 'gsap';
 import { ScrollTrigger } from 'gsap/ScrollTrigger';
 import { useLayoutEffect } from 'react';
 gsap.registerPlugin(ScrollTrigger)
 export default function MedescriptionAtHome({d}:{d:string}) {
 
 useLayoutEffect(() => {
 const ctx = gsap.context(() => {
 const tl = gsap.timeline({
 scrollTrigger: {
 trigger: ".d-section",
 start: "top 55%",
 end: "bottom 40%",
 scrub: true,
 }}
 )
 tl.from(
 ".d-text",{ y: 70, opacity: 0, duration: 1.5, ease: "expo.out" }
 )
 
 })
 return () => ctx.revert()
 }, [])
 return (
 <motion.div 
 
 className='d-section w-full flex text-white text-3xl flex-col justify-center items-center '>
 <div
 
 >
 <motion.img 
 layoutId='profil'
 src="/images/me4.png"
 alt="arrow down"
 className=' profil w-20 h-20 mx-auto rounded-full mb-4'/>
 </div>
 <h1 className='d-text w-[80%] md:w-[60%] lg:w-[40%] text-center py-20 pt-4 text-lg md:text-xl font-inter text-white/80 max-w-2xl mx-auto'>
 {d}
 </h1>
 </motion.div>
 )
 }