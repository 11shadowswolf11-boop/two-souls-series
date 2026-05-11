"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref,{once:true,amount:.12});
  const ctrl = useAnimation();
  useEffect(()=>{ if(inView) ctrl.start("vis"); },[inView,ctrl]);
  return {ref,ctrl};
}

const vFadeUp = {
  hidden:{opacity:0,y:40},
  vis:(i=0)=>({opacity:1,y:0,transition:{duration:.9,delay:i*.1,ease:[.16,1,.3,1]}})
};
const vScale = {
  hidden:{opacity:0,scale:.92},
  vis:(i=0)=>({opacity:1,scale:1,transition:{duration:.85,delay:i*.08,ease:[.16,1,.3,1]}})
};

export function SeriesSection() {
  const L = useReveal(), R = useReveal();
  return (
    <section id="series" className="relative py-32 px-8 md:px-14"
      style={{background:"linear-gradient(180deg,#04060E 0%,#0C1020 50%,#04060E 100%)"}}>
      <div className="absolute inset-0 pointer-events-none"
        style={{background:"radial-gradient(ellipse 50% 40% at 70% 50%,rgba(30,140,170,0.05) 0%,transparent 65%)"}}/>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <motion.div ref={L.ref} animate={L.ctrl} initial="hidden">
          <motion.p variants={vFadeUp} custom={0} className="font-cinzel text-[9px] tracking-[.55em] uppercase text-amber-warm/60 mb-3">About the Series</motion.p>
          <motion.h2 variants={vFadeUp} custom={1}
            className="font-display font-semibold leading-[1.05] text-[clamp(36px,5vw,60px)] mb-5">
            This is not<br/><em className="text-amber-grad font-light">a love story.</em>
          </motion.h2>
          <motion.span variants={vFadeUp} custom={2} className="rule-amber block"/>
          {["This is the story <strong>before</strong> the love story. The healing. The becoming. The long quiet work of learning to stand whole inside your own life — and then, against all expectation, choosing again.",
            "The Two Souls Series follows one woman across six books, six years, and an ocean — through illness and survival, through a love found online that refuses to stay in its lane, through the dissolution of a marriage and the terrifying freedom of the after.",
          ].map((p,i)=>(
            <motion.p key={i} variants={vFadeUp} custom={i+3}
              className="font-body text-[15px] text-pearl/45 leading-relaxed mb-4"
              dangerouslySetInnerHTML={{__html:p.replace("<strong>","<strong class='text-pearl/80 font-normal'>")}}/>
          ))}
          <motion.blockquote variants={vFadeUp} custom={5}
            className="border-l-2 border-amber-warm/35 pl-5 mt-6">
            <p className="font-display italic text-[18px] text-amber-warm/65 leading-relaxed">
              "These pages are not about fantasy. They are about truth — the kind that unsettles you, unravels you, but also brings you home to yourself."
            </p>
            <p className="font-cinzel text-[8px] tracking-[.4em] text-pearl/25 mt-2">— SHADOW WOLF</p>
          </motion.blockquote>

          {/* Bundle */}
          <motion.div variants={vFadeUp} custom={6}
            className="mt-7 border border-amber-warm/18 p-6 hover:border-amber-warm/32 hover:bg-amber-warm/3 transition-all duration-500 cursor-pointer flex items-center justify-between">
            <div>
              <p className="font-cinzel text-[8px] tracking-[.4em] text-amber-warm/55">COMPLETE COLLECTION</p>
              <p className="font-display text-[19px] font-medium mt-1">All 6 Books · 120 Songs · Instant Download</p>
            </div>
            <span className="font-display text-[36px] font-bold text-amber-grad ml-6 flex-shrink-0">$49.99</span>
          </motion.div>
        </motion.div>

        {/* Right — stats + series cover */}
        <motion.div ref={R.ref} animate={R.ctrl} initial="hidden">
          <div className="grid grid-cols-2 gap-4 mb-5">
            {[["6","Books"],["120","Songs"],["6","Soundtracks"],["∞","Without End"]].map(([n,l],i)=>(
              <motion.div key={l} variants={vScale} custom={i}
                className="border border-amber-warm/10 p-6 hover:border-amber-warm/22 transition-colors duration-400 group">
                <div className="font-display font-bold text-amber-grad" style={{fontSize:"clamp(2.5rem,6vw,4rem)",lineHeight:1}}>{n}</div>
                <p className="font-cinzel text-[8px] tracking-[.35em] text-pearl/30 mt-3 uppercase">{l}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={vScale} custom={4} className="border border-amber-warm/12 overflow-hidden">
            <Image src="/images/series.jpg" alt="The Complete Series — Two Souls by Shadow Wolf"
              width={460} height={460} className="w-full object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
