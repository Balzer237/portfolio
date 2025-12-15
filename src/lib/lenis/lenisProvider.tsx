'use client'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)
export default function LenisProvider({children}:{children:React.ReactNode}) {
    useEffect(()=>{
        const lenis= new Lenis({
            lerp:0.09,
            smoothWheel:true,
            wheelMultiplier:1,
        
        })
        lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(timer=>lenis.raf(timer*1000))
    gsap.ticker.lagSmoothing(0)
        return ()=>{
            lenis.destroy()
        }
    },[])

  return (
    <>
      {children}
    </>
  )
}
