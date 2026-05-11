"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  ["Series","#series"],["Books","#books"],["Music","#music"],
  ["Audiobooks","#audiobooks"],["Author","#author"],["Community","#community"],["Film","#film"],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>60);
    window.addEventListener("scroll",fn); return ()=>window.removeEventListener("scroll",fn);
  },[]);
  return (
    <>
      <motion.nav
        initial={{y:-80,opacity:0}} animate={{y:0,opacity:1}}
        transition={{duration:1,delay:.4,ease:[.16,1,.3,1]}}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 transition-all duration-500 ${scrolled?"nav-glass py-3":"py-5 bg-transparent"}`}
      >
        <a href="#" className="flex items-center gap-3 group">
          <Image src="/images/logo_cyan.png" alt="Shadow Wolf" width={48} height={34} className="object-contain" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-[17px] font-semibold text-amber-grad">Two Souls</span>
            <span className="font-cinzel text-[7px] tracking-[.5em] text-pearl/30 uppercase mt-0.5">Shadow Wolf</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(([l,h])=>(
            <a key={l} href={h} className="font-body text-[10px] tracking-[.28em] uppercase text-pearl/45 hover:text-amber-warm transition-colors duration-300">{l}</a>
          ))}
        </div>

        <a href="#newsletter" className="hidden md:block font-cinzel text-[9px] tracking-[.35em] uppercase border border-amber-warm/30 text-amber-warm px-5 py-2.5 hover:bg-amber-warm hover:text-void transition-all duration-300">Enter</a>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={()=>setOpen(v=>!v)} aria-label="Menu">
          <span className={`block h-px w-6 bg-pearl transition-all duration-300 ${open?"rotate-45 translate-y-2":""}`}/>
          <span className={`block h-px w-4 bg-pearl/50 transition-all duration-300 ${open?"opacity-0":""}`}/>
          <span className={`block h-px w-6 bg-pearl transition-all duration-300 ${open?"-rotate-45 -translate-y-2":""}`}/>
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className="fixed inset-0 z-40 bg-void/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
            {links.map(([l,h],i)=>(
              <motion.a key={l} href={h} onClick={()=>setOpen(false)}
                initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*.06}}
                className="font-display text-3xl font-light text-pearl/70 hover:text-amber-warm transition-colors">{l}</motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
