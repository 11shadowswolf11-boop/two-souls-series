"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start","end start"] });
  const y       = useTransform(scrollYProgress,[0,1],["0%","35%"]);
  const opacity = useTransform(scrollYProgress,[0,.55],[1,0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden text-center"
      style={{background:"radial-gradient(ellipse 110% 80% at 50% 100%,#0A2030 0%,#04060E 65%)"}}>

      {/* Horizon amber glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
        style={{background:"radial-gradient(ellipse 80% 60% at 50% 100%,rgba(212,146,76,0.08) 0%,transparent 70%)"}}/>

      {/* Floating orbs */}
      {[...Array(6)].map((_,i)=>(
        <div key={i} className="absolute rounded-full bg-amber-warm/15 pointer-events-none"
          style={{width:`${2+i*.5}px`,height:`${2+i*.5}px`,left:`${12+i*14}%`,bottom:`${22+(i%3)*14}%`,
            animation:`float ${4+i*.9}s ease-in-out infinite`,animationDelay:`${i*.7}s`}}/>
      ))}

      <motion.div style={{y,opacity}} className="relative z-10 px-6 max-w-5xl mx-auto">
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
          transition={{duration:1.2,delay:.4,ease:[.16,1,.3,1]}}
          className="font-cinzel text-[9px] tracking-[.7em] uppercase text-amber-warm/55 mb-8">
          A Cinematic Literary Universe
        </motion.p>

        <motion.h1 initial={{opacity:0,y:60}} animate={{opacity:1,y:0}}
          transition={{duration:1.4,delay:.65,ease:[.16,1,.3,1]}}
          className="font-display font-bold leading-[.88] text-amber-grad amber-glow"
          style={{fontSize:"clamp(5.5rem,14vw,12rem)"}}>
          Two
        </motion.h1>
        <motion.h1 initial={{opacity:0,y:60}} animate={{opacity:1,y:0}}
          transition={{duration:1.4,delay:.82,ease:[.16,1,.3,1]}}
          className="font-display font-light leading-[.88] text-pearl/88"
          style={{fontSize:"clamp(5.5rem,14vw,12rem)"}}>
          Souls
        </motion.h1>

        <motion.div initial={{scaleX:0}} animate={{scaleX:1}}
          transition={{duration:1.2,delay:1.3,ease:[.25,.46,.45,.94]}}
          className="w-28 h-px mx-auto my-8 origin-left"
          style={{background:"linear-gradient(90deg,transparent,#D4924C,transparent)"}}/>

        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
          transition={{duration:1,delay:1.5,ease:[.16,1,.3,1]}}
          className="font-display font-light italic text-[clamp(16px,2vw,21px)] text-pearl/45 mb-12 tracking-wide">
          Six books. Six soundtracks. One journey without end.<br/>
          <strong className="text-pearl/70 not-italic font-normal">Heal. Reconnect. Rise.</strong>
        </motion.p>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
          transition={{duration:1,delay:1.7,ease:[.16,1,.3,1]}}
          className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#books"
            className="font-cinzel text-[10px] tracking-[.4em] uppercase bg-gradient-to-r from-amber-warm to-amber-glow text-void px-10 py-4 hover:opacity-88 hover:scale-[1.02] transition-all duration-300">
            Explore the Series
          </a>
          <a href="#music"
            className="font-cinzel text-[10px] tracking-[.4em] uppercase border border-pearl/18 text-pearl/55 px-10 py-4 hover:border-amber-warm/45 hover:text-amber-warm transition-all duration-300">
            Hear the Music
          </a>
        </motion.div>

        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.1,duration:1}}
          className="mt-10 font-cinzel text-[8px] tracking-[.6em] uppercase text-pearl/22">By Shadow Wolf</motion.p>
      </motion.div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.3,duration:1}}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 z-10">
        <span className="font-cinzel text-[7px] tracking-[.5em] text-pearl/20">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-amber-warm/40 to-transparent"
          style={{animation:"scrollPulse 2.5s ease infinite"}}/>
      </motion.div>
    </section>
  );
}
