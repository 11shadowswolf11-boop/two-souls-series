"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BOOKS } from "@/lib/data";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref,{once:true,amount:.08});
  const ctrl = useAnimation();
  useEffect(()=>{ if(inView) ctrl.start("vis"); },[inView,ctrl]);
  return {ref,ctrl};
}

export function BooksSection() {
  const hdr = useReveal(), grid = useReveal();
  const [active, setActive] = useState<typeof BOOKS[0]|null>(null);

  return (
    <section id="books" className="relative py-32 px-8 md:px-14 bg-abyss">
      <div className="fade-top"/>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div ref={hdr.ref} animate={hdr.ctrl} initial="hidden" className="text-center mb-16">
          {[
            {v:{hidden:{opacity:0,y:40},vis:{opacity:1,y:0,transition:{duration:.9,ease:[.16,1,.3,1]}}},c:"font-cinzel text-[9px] tracking-[.55em] uppercase text-amber-warm/60",t:"The Library"},
            {v:{hidden:{opacity:0,y:40},vis:{opacity:1,y:0,transition:{duration:.9,delay:.1,ease:[.16,1,.3,1]}}},c:"font-display font-semibold text-[clamp(36px,5vw,60px)] leading-[1.05]",t:null},
          ].map((_, i) => null)}
          <motion.p variants={{hidden:{opacity:0,y:40},vis:{opacity:1,y:0,transition:{duration:.9,ease:[.16,1,.3,1]}}}} initial="hidden" animate={hdr.ctrl}
            className="font-cinzel text-[9px] tracking-[.55em] uppercase text-amber-warm/60 mb-3">The Library</motion.p>
          <motion.h2 variants={{hidden:{opacity:0,y:40},vis:{opacity:1,y:0,transition:{duration:.9,delay:.1,ease:[.16,1,.3,1]}}}} initial="hidden" animate={hdr.ctrl}
            className="font-display font-semibold text-[clamp(36px,5vw,60px)] leading-[1.05] mb-5">
            Six Books. <em className="text-amber-grad font-light">One Journey.</em>
          </motion.h2>
          <motion.span variants={{hidden:{scaleX:0},vis:{scaleX:1,transition:{duration:1,delay:.2,ease:[.25,.46,.45,.94]}}}} initial="hidden" animate={hdr.ctrl}
            className="rule-center rule-amber block mb-5"/>
          <motion.p variants={{hidden:{opacity:0,y:20},vis:{opacity:1,y:0,transition:{duration:.9,delay:.3,ease:[.16,1,.3,1]}}}} initial="hidden" animate={hdr.ctrl}
            className="font-body text-[15px] text-pearl/40 max-w-lg mx-auto leading-relaxed">
            Each volume its own world, its own light, its own 20-song original soundtrack.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div ref={grid.ref} animate={grid.ctrl} initial="hidden"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {BOOKS.map((b,i)=>(
            <motion.div key={b.id}
              variants={{hidden:{opacity:0,scale:.9},vis:{opacity:1,scale:1,transition:{duration:.8,delay:i*.07,ease:[.16,1,.3,1]}}}}
              className="book-card cursor-pointer group" onClick={()=>setActive(b)}>
              <div className="relative overflow-hidden border border-pearl/7 shadow-2xl">
                <Image src={`/images/${b.key}.jpg`} alt={b.title}
                  width={300} height={460} className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"/>
                {/* Lock */}
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-void/80 border border-amber-warm/25 flex items-center justify-center text-[10px]">🔒</div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-void/97 via-void/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-3">
                  <p className="font-cinzel text-[7px] tracking-[.4em] mb-1" style={{color:b.color}}>{b.number}</p>
                  <p className="font-display text-[14px] font-semibold text-pearl leading-tight">{b.title}</p>
                  <p className="text-[10px] text-pearl/40 italic mt-1">{b.tagline}</p>
                  <p className="font-cinzel text-[10px] mt-2" style={{color:b.color}}>{b.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing */}
        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-3">
            <span className="font-body text-sm text-pearl/30">Individual books from</span>
            <span className="font-display text-[26px] font-semibold text-amber-warm">$9.99</span>
          </div>
          <div className="hidden md:block w-px h-5 bg-pearl/10"/>
          <div className="flex items-center gap-3">
            <span className="font-body text-sm text-pearl/30">Complete bundle</span>
            <span className="font-display text-[26px] font-semibold text-amber-grad">$49.99</span>
          </div>
          <a href="#newsletter" className="font-cinzel text-[10px] tracking-[.35em] uppercase bg-gradient-to-r from-amber-warm to-amber-glow text-void px-8 py-3.5 hover:opacity-88 transition-opacity">Get Access</a>
        </div>
      </div>
      <div className="fade-bottom"/>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className="fixed inset-0 z-50 flex items-center justify-center bg-void/92 backdrop-blur-xl px-5"
            onClick={()=>setActive(null)}>
            <motion.div initial={{opacity:0,y:40,scale:.96}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:20,scale:.98}}
              transition={{duration:.5,ease:[.16,1,.3,1]}}
              className="bg-abyss border border-amber-warm/14 max-w-2xl w-full relative overflow-hidden"
              onClick={e=>e.stopPropagation()}>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-warm/45 to-transparent"/>
              <div className="p-8 md:p-10 flex gap-6 md:gap-8">
                <div className="w-28 md:w-36 flex-shrink-0">
                  <Image src={`/images/${active.key}.jpg`} alt={active.title} width={180} height={280} className="w-full object-cover border border-pearl/8"/>
                </div>
                <div className="flex-1">
                  <p className="font-cinzel text-[8px] tracking-[.5em] uppercase mb-2" style={{color:active.color}}>Book {active.number}</p>
                  <h3 className="font-display text-[28px] font-semibold text-pearl mb-1">{active.title}</h3>
                  <p className="font-display italic text-pearl/38 mb-4">{active.tagline}</p>
                  <div className="w-8 h-px mb-4" style={{background:active.color+"80"}}/>
                  <p className="font-body text-sm text-pearl/45 leading-relaxed mb-6">{active.desc}</p>
                  <div className="flex items-center gap-5">
                    <div>
                      <span className="font-display text-[32px] font-bold text-amber-grad">{active.price}</span>
                      <p className="font-body text-xs text-pearl/28 mt-0.5">ebook + 20 songs</p>
                    </div>
                    <a href="#newsletter" onClick={()=>setActive(null)}
                      className="font-cinzel text-[9px] tracking-[.3em] uppercase border px-5 py-3 hover:text-void transition-all duration-300"
                      style={{borderColor:active.color+"60",color:active.color}}>
                      Unlock
                    </a>
                  </div>
                </div>
              </div>
              <button onClick={()=>setActive(null)} className="absolute top-4 right-4 font-body text-pearl/25 hover:text-amber-warm transition-colors text-xl">✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
