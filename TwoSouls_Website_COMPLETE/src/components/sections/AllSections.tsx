"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { BOOKS, SONGS, TESTIMONIALS } from "@/lib/data";

function useReveal(amount=.1) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref,{once:true,amount});
  const ctrl = useAnimation();
  useEffect(()=>{ if(inView) ctrl.start("vis"); },[inView,ctrl]);
  return {ref,ctrl};
}
const vU = (d=0) => ({hidden:{opacity:0,y:40},vis:{opacity:1,y:0,transition:{duration:.9,delay:d,ease:[.16,1,.3,1]}}});
const vL = (d=0) => ({hidden:{opacity:0,x:-50},vis:{opacity:1,x:0,transition:{duration:.9,delay:d,ease:[.16,1,.3,1]}}});
const vS = (d=0) => ({hidden:{opacity:0,scale:.92},vis:{opacity:1,scale:1,transition:{duration:.8,delay:d,ease:[.16,1,.3,1]}}});

/* ── MUSIC ─────────────────────────────────────── */
export function MusicSection() {
  const L = useReveal(), R = useReveal();
  const [playing, setPlaying] = useState<number|null>(null);
  return (
    <section id="music" className="relative py-32 px-8 md:px-14"
      style={{background:"linear-gradient(180deg,#04060E 0%,#081420 50%,#04060E 100%)"}}>
      <div className="absolute inset-0 pointer-events-none"
        style={{background:"radial-gradient(ellipse 55% 45% at 25% 50%,rgba(30,140,170,0.06) 0%,transparent 65%)"}}/>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <motion.div ref={L.ref} animate={L.ctrl} initial="hidden">
          <motion.p variants={vL(0)} className="font-cinzel text-[9px] tracking-[.55em] uppercase text-amber-warm/60 mb-3">The Soundtracks</motion.p>
          <motion.h2 variants={vL(.1)} className="font-display font-semibold text-[clamp(34px,4.5vw,58px)] leading-[1.05] mb-5">
            Every book has<br/>its own <em className="text-ocean-grad font-light">music.</em>
          </motion.h2>
          <motion.span variants={vL(.2)} className="rule-amber block"/>
          <motion.p variants={vL(.3)} className="font-body text-[15px] text-pearl/44 leading-relaxed mb-4">120 original songs composed chapter by chapter with full commercial rights. The world's first literary series with a complete original soundtrack for every volume.</motion.p>
          <motion.p variants={vL(.4)} className="font-body text-[15px] text-pearl/44 leading-relaxed mb-8">Play while you read. Let the story arrive twice — through the eyes and through the ears.</motion.p>
          <motion.div variants={vL(.5)} className="grid grid-cols-3 gap-2.5">
            {BOOKS.map(b=>(
              <div key={b.id} className="aspect-square border border-pearl/6 flex flex-col items-center justify-center gap-1.5 p-2.5 hover:border-amber-warm/22 hover:bg-amber-warm/3 transition-all cursor-pointer group"
                style={{background:`${b.color}08`}}>
                <span className="font-cinzel text-[7px] tracking-[.3em] text-pearl/25 group-hover:text-pearl/40 transition-colors">{b.number}</span>
                <span className="font-display text-[9px] text-pearl/40 text-center leading-tight">{b.title}</span>
                <span className="font-cinzel text-[7px] tracking-[.2em] text-pearl/18">20 songs</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div ref={R.ref} animate={R.ctrl} initial="hidden" variants={vU(.15)} className="border border-pearl/5">
          <div className="border-b border-pearl/5 px-5 py-3.5 flex items-center justify-between">
            <span className="font-cinzel text-[8px] tracking-[.4em] text-pearl/35">Featured Tracks</span>
            <span className="text-[9px] text-amber-warm/45">🔒 Members Only</span>
          </div>
          {SONGS.map((s,i)=>(
            <div key={i} className="track-row px-5 py-3.5 flex items-center gap-4 cursor-pointer" onClick={()=>setPlaying(playing===i?null:i)}>
              <span className="font-cinzel text-[10px] text-pearl/18 w-5 text-right flex-shrink-0">{s.num}</span>
              <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 text-[9px] transition-all duration-250 ${playing===i?"bg-amber-warm/15 border-amber-warm/40 text-amber-warm":"border-pearl/12 text-pearl/35"}`}>
                {playing===i?"■":"▶"}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display text-[14px] font-medium text-pearl/65 truncate">{s.title}</p>
                <p className="font-cinzel text-[7px] tracking-[.2em] text-pearl/25 mt-0.5">{s.book}</p>
              </div>
              <span className="text-[11px] text-pearl/15">🔒</span>
            </div>
          ))}
          <div className="border-t border-pearl/5 px-5 py-3.5 flex items-center justify-between">
            <span className="font-body text-xs text-pearl/25">+ 110 more songs</span>
            <a href="#newsletter" className="font-cinzel text-[8px] tracking-[.3em] text-amber-warm/55 hover:text-amber-warm transition-colors">Access All →</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── AUDIOBOOKS ────────────────────────────────── */
export function AudiobooksSection() {
  const hdr = useReveal(), grid = useReveal();
  return (
    <section id="audiobooks" className="relative py-32 px-8 md:px-14"
      style={{background:"linear-gradient(180deg,#04060E 0%,#0C1020 60%,#04060E 100%)"}}>
      <div className="max-w-7xl mx-auto">
        <motion.div ref={hdr.ref} animate={hdr.ctrl} initial="hidden" className="text-center mb-14">
          <motion.p variants={vU(0)} className="font-cinzel text-[9px] tracking-[.55em] uppercase text-amber-warm/60 mb-3">Audiobooks</motion.p>
          <motion.h2 variants={vU(.1)} className="font-display font-semibold text-[clamp(34px,4.5vw,58px)] leading-[1.05] mb-5">
            Hear the story<br/><em className="text-amber-grad font-light">the way it was felt.</em>
          </motion.h2>
          <motion.span variants={{hidden:{scaleX:0},vis:{scaleX:1,transition:{duration:1,ease:[.25,.46,.45,.94]}}}} className="rule-center rule-amber block mb-5"/>
          <motion.p variants={vU(.3)} className="font-body text-[15px] text-pearl/40 max-w-md mx-auto">Each book narrated with the intimacy it was written with, paired with its original soundtrack.</motion.p>
        </motion.div>

        <motion.div ref={grid.ref} animate={grid.ctrl} initial="hidden" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BOOKS.map((b,i)=>(
            <motion.div key={b.id} variants={vS(i*.07)}
              className="border border-pearl/6 p-6 hover:border-amber-warm/18 hover:bg-amber-warm/2 hover:-translate-y-1 transition-all duration-400 cursor-pointer group">
              <div className="flex items-end gap-0.5 h-8 mb-5">
                {[...Array(14)].map((_,j)=>(
                  <div key={j} className="w-0.5 rounded-full transition-opacity duration-300 group-hover:opacity-70"
                    style={{height:`${14+Math.abs(Math.sin(j*1.2+i))*18}px`,background:b.color,opacity:.28+(j%3)*.1}}/>
                ))}
              </div>
              <p className="font-cinzel text-[8px] tracking-[.4em] uppercase mb-1" style={{color:b.color+"90"}}>Book {b.number}</p>
              <h3 className="font-display text-[17px] font-semibold text-pearl mb-1">{b.title}</h3>
              <p className="font-body text-xs text-pearl/32 italic leading-relaxed mb-5">{b.tagline}</p>
              <div className="flex items-center justify-between border-t border-pearl/5 pt-4">
                <span className="font-display text-[22px] font-semibold" style={{color:b.color+"BB"}}>$12.99</span>
                <div className="w-8 h-8 rounded-full border flex items-center justify-center text-[9px] transition-all duration-250 group-hover:bg-amber-warm/10 group-hover:border-amber-warm/35"
                  style={{borderColor:b.color+"35",color:b.color+"70"}}>▶</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a href="#newsletter" className="font-cinzel text-[10px] tracking-[.35em] uppercase border border-pearl/18 text-pearl/45 px-9 py-3.5 hover:border-amber-warm/35 hover:text-amber-warm transition-all duration-300 inline-block">Pre-order Complete Audio Bundle</a>
        </div>
      </div>
    </section>
  );
}

/* ── AUTHOR ─────────────────────────────────────── */
export function AuthorSection() {
  const L = useReveal(), R = useReveal();
  return (
    <section id="author" className="relative py-32 px-8 md:px-14 bg-void">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div ref={L.ref} animate={L.ctrl} initial="hidden" variants={vL(0)} className="relative">
          <div className="relative aspect-[3/4] max-w-[340px] border border-amber-warm/10 overflow-hidden"
            style={{background:"radial-gradient(ellipse 80% 80% at 50% 40%,rgba(30,140,170,0.1) 0%,rgba(212,146,76,0.07) 55%,rgba(4,6,14,0.95) 100%)"}}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display font-light text-amber-grad opacity-10" style={{fontSize:"7rem",lineHeight:1}}>SW</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-warm/25 to-transparent"/>
          </div>
          <div className="absolute -inset-3 border border-amber-warm/6 -z-10"/>
          <div className="absolute -inset-7 border border-amber-warm/3 -z-10"/>
          <div className="flex flex-wrap gap-2.5 mt-6">
            {["South African","Author","Musician","Mother of Six","Survivor"].map(t=>(
              <span key={t} className="font-cinzel text-[8px] tracking-[.25em] border border-pearl/8 text-pearl/28 px-3.5 py-2 hover:border-amber-warm/25 hover:text-amber-warm transition-all cursor-default">{t}</span>
            ))}
          </div>
        </motion.div>

        <motion.div ref={R.ref} animate={R.ctrl} initial="hidden">
          <motion.p variants={vU(0)} className="font-cinzel text-[9px] tracking-[.55em] uppercase text-amber-warm/60 mb-3">About Shadow Wolf</motion.p>
          <motion.h2 variants={vU(.1)} className="font-display font-semibold text-[clamp(34px,4.5vw,58px)] leading-[1.05] mb-5">
            She lived it<br/><em className="text-amber-grad font-light">before she wrote it.</em>
          </motion.h2>
          <motion.span variants={vU(.2)} className="rule-amber block"/>
          {["<strong>Shadow Wolf</strong> is the creative identity of a woman who spent years carrying stories she wasn't sure she was allowed to tell.",
            "South African by blood, English by circumstance, and now returning home — she built the Two Souls Series from lived experience. From years of illness and healing. From a love found online that refused to stay in its lane. From the dissolution of a long marriage and the terrifying beauty of what came after.",
            "She is also a musician, a mother of six, and a person who believes that the most radical thing a woman can do is tell the full truth of her interior life.",
          ].map((p,i)=>(
            <motion.p key={i} variants={vU(i*.1+.3)}
              className="font-body text-[15px] text-pearl/44 leading-relaxed mb-4"
              dangerouslySetInnerHTML={{__html:p.replace("<strong>","<strong class='text-pearl/80 font-normal'>")}}/>
          ))}
          <motion.blockquote variants={vU(.6)} className="border-l-2 border-amber-warm/30 pl-5 mt-6">
            <p className="font-display italic text-[17px] text-amber-warm/60 leading-relaxed">
              "I wrote this series because the truth of these years was too heavy to keep inside and too precious to let dissolve into silence."
            </p>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}

/* ── COMMUNITY ─────────────────────────────────── */
export function CommunitySection() {
  const hdr = useReveal(), test = useReveal(), pil = useReveal();
  return (
    <section id="community" className="relative py-32 px-8 md:px-14"
      style={{background:"linear-gradient(180deg,#04060E 0%,#0C1020 50%,#04060E 100%)"}}>
      <div className="max-w-7xl mx-auto">
        <motion.div ref={hdr.ref} animate={hdr.ctrl} initial="hidden" className="text-center mb-16">
          <motion.p variants={vU(0)} className="font-cinzel text-[9px] tracking-[.55em] uppercase text-amber-warm/60 mb-3">Community</motion.p>
          <motion.h2 variants={vU(.1)} className="font-display font-semibold text-[clamp(34px,4.5vw,58px)] leading-[1.05] mb-5">
            You are not<br/><em className="text-amber-grad font-light">reading alone.</em>
          </motion.h2>
          <motion.span variants={{hidden:{scaleX:0},vis:{scaleX:1,transition:{duration:1,ease:[.25,.46,.45,.94]}}}} className="rule-center rule-amber block mb-5"/>
          <motion.p variants={vU(.3)} className="font-body text-[15px] text-pearl/40 max-w-md mx-auto">The Two Souls community is for people who recognised something in these pages.</motion.p>
        </motion.div>

        <motion.div ref={test.ref} animate={test.ctrl} initial="hidden" className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {TESTIMONIALS.map((t,i)=>(
            <motion.div key={i} variants={vU(i*.08)} className="border border-pearl/5 p-8 hover:border-amber-warm/14 transition-colors duration-400">
              <div className="text-amber-warm/28 text-[28px] font-display mb-3">"</div>
              <p className="font-display italic text-[17px] text-pearl/50 leading-relaxed mb-4" dangerouslySetInnerHTML={{__html:t.q.replace(/<em>/g,"<em class='text-pearl/75 not-italic font-normal'>")}}/>
              <p className="font-cinzel text-[8px] tracking-[.4em] text-amber-warm/38">— {t.by}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div ref={pil.ref} animate={pil.ctrl} initial="hidden" className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[["◎","Reader Community","A private space for readers who felt the frequency."],
            ["✦","Soul Letters","Monthly notes from Shadow Wolf — beyond the pages."],
            ["♫","Soundtrack Sessions","Live listening with chapter commentary."],
            ["↗","Early Access","First to read, hear, and see what comes next."],
          ].map(([icon,title,desc],i)=>(
            <motion.div key={i} variants={vS(i*.07)}
              className="text-center p-7 border border-pearl/5 hover:border-amber-warm/18 hover:bg-amber-warm/2 transition-all duration-400 cursor-default group">
              <div className="text-[18px] text-amber-warm/35 mb-4 group-hover:text-amber-warm/65 transition-colors">{icon}</div>
              <h3 className="font-display text-[15px] font-semibold text-pearl/75 mb-2.5">{title}</h3>
              <p className="font-body text-xs text-pearl/30 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <a href="#newsletter" className="font-cinzel text-[10px] tracking-[.35em] uppercase bg-gradient-to-r from-amber-warm to-amber-glow text-void px-9 py-3.5 hover:opacity-88 transition-opacity inline-block">Join the Community</a>
        </div>
      </div>
    </section>
  );
}

/* ── FILM ───────────────────────────────────────── */
export function FilmSection() {
  const L = useReveal(), R = useReveal();
  return (
    <section id="film" className="relative py-32 px-8 md:px-14 overflow-hidden"
      style={{background:"linear-gradient(180deg,#04060E 0%,#08121C 60%,#04060E 100%)"}}>
      <div className="film-bar top-0"/>
      <div className="film-bar bottom-0"/>
      <div className="absolute inset-0 pointer-events-none"
        style={{background:"radial-gradient(ellipse 65% 45% at 50% 50%,rgba(212,146,76,0.05) 0%,rgba(30,140,170,0.03) 40%,transparent 70%)"}}/>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div ref={L.ref} animate={L.ctrl} initial="hidden">
          <motion.p variants={vL(0)} className="font-cinzel text-[9px] tracking-[.55em] uppercase text-amber-warm/60 mb-3">Future Project</motion.p>
          <motion.h2 variants={vL(.1)} className="font-display font-semibold text-[clamp(34px,4.5vw,58px)] leading-[1.05] mb-5">
            The film<br/><em className="text-amber-grad font-light">is waiting.</em>
          </motion.h2>
          <motion.span variants={vL(.2)} className="rule-amber block"/>
          <motion.p variants={vL(.3)} className="font-body text-[15px] text-pearl/44 leading-relaxed mb-4">The Two Souls Series was written to live on screen. The visual language, the emotional architecture, the cinematic momentum across six volumes — this was always a story for camera and light.</motion.p>
          <motion.p variants={vL(.4)} className="font-body text-[15px] text-pearl/44 leading-relaxed mb-8">Shadow Wolf is actively developing the Two Souls film project. If you are in film, television, or streaming, this is an invitation.</motion.p>
          <motion.div variants={vL(.5)} className="flex flex-col sm:flex-row gap-3">
            <a href="#newsletter" className="font-cinzel text-[10px] tracking-[.35em] uppercase bg-gradient-to-r from-amber-warm to-amber-glow text-void px-8 py-4 hover:opacity-88 transition-opacity text-center">Follow the Project</a>
            <a href="#newsletter" className="font-cinzel text-[10px] tracking-[.35em] uppercase border border-pearl/18 text-pearl/45 px-8 py-4 hover:border-amber-warm/35 hover:text-amber-warm transition-all text-center">Industry Enquiries</a>
          </motion.div>
        </motion.div>

        <motion.div ref={R.ref} animate={R.ctrl} initial="hidden" variants={vU(.15)}>
          <div className="relative aspect-video border border-amber-warm/10 overflow-hidden"
            style={{background:"linear-gradient(135deg,#0A2030 0%,#1A0E04 55%,#04060E 100%)"}}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full border border-amber-warm/20 flex items-center justify-center mx-auto mb-3 font-cinzel text-[8px] tracking-[.3em] text-amber-warm/28">◎</div>
                <p className="font-cinzel text-[9px] tracking-[.5em] text-amber-warm/28 uppercase">In Development</p>
              </div>
            </div>
            {[["top-3 left-3","border-t border-l"],["top-3 right-3","border-t border-r"],["bottom-3 left-3","border-b border-l"],["bottom-3 right-3","border-b border-r"]].map(([pos,b],i)=>(
              <div key={i} className={`absolute ${pos} w-4 h-4 ${b} border-amber-warm/22`}/>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {[["Format","Feature Film / Series"],["Status","Active Development"],["Based on","Two Souls (Books 1–6)"]].map(([l,v])=>(
              <div key={l} className="border border-pearl/5 p-3.5">
                <p className="font-cinzel text-[7px] tracking-[.3em] text-pearl/20 uppercase mb-1">{l}</p>
                <p className="font-body text-xs text-pearl/45">{v}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── NEWSLETTER ─────────────────────────────────── */
export function NewsletterSection() {
  const { ref, ctrl } = useReveal();
  const [email, setEmail] = useState("");
  const [done,  setDone]  = useState(false);
  const submit = (e: React.FormEvent) => { e.preventDefault(); if(email){setDone(true);setEmail("");} };

  return (
    <section id="newsletter" className="relative py-40 px-8 md:px-14 overflow-hidden text-center"
      style={{background:"radial-gradient(ellipse 90% 60% at 50% 100%,#0A2030 0%,#04060E 65%)"}}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-warm/18 to-transparent"/>
      {[...Array(4)].map((_,i)=>(
        <div key={i} className="absolute rounded-full bg-amber-warm/12 pointer-events-none"
          style={{width:`${1.5+i}px`,height:`${1.5+i}px`,left:`${18+i*18}%`,top:`${20+i*12}%`,
            animation:`float ${3.5+i}s ease-in-out infinite`,animationDelay:`${i*.9}s`}}/>
      ))}

      <motion.div ref={ref} animate={ctrl} initial="hidden" className="max-w-[520px] mx-auto relative z-10">
        <motion.p variants={vU(0)} className="font-cinzel text-[9px] tracking-[.55em] uppercase text-amber-warm/60 mb-3">Stay Close</motion.p>
        <motion.h2 variants={vU(.1)} className="font-display font-semibold text-[clamp(34px,4.5vw,58px)] leading-[1.05] mb-5">
          The journey<br/><em className="text-amber-grad font-light">continues.</em>
        </motion.h2>
        <motion.span variants={{hidden:{scaleX:0},vis:{scaleX:1,transition:{duration:1,ease:[.25,.46,.45,.94]}}}} className="rule-center rule-amber block mb-5"/>
        <motion.p variants={vU(.3)} className="font-body text-[15px] text-pearl/40 leading-relaxed mb-9">
          New releases. Exclusive songs. Behind-the-story notes. The film project. Letters from Shadow Wolf — and early access to everything that comes next.
        </motion.p>

        {!done ? (
          <motion.form variants={vU(.4)} onSubmit={submit} className="flex max-w-md mx-auto">
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Your email address"
              className="flex-1 bg-pearl/4 border border-amber-warm/18 border-r-0 px-5 py-4 text-pearl/65 font-body text-sm outline-none focus:border-amber-warm/40 placeholder:text-pearl/22 transition-colors"/>
            <button type="submit"
              className="bg-gradient-to-r from-amber-warm to-amber-glow text-void font-cinzel text-[9px] tracking-[.35em] uppercase px-7 py-4 hover:opacity-88 transition-opacity font-semibold whitespace-nowrap">
              Join
            </button>
          </motion.form>
        ) : (
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}
            className="border border-amber-warm/20 py-5 px-8 max-w-md mx-auto">
            <p className="font-display italic text-[20px] text-amber-warm/80">You're in.</p>
            <p className="font-cinzel text-[8px] tracking-[.4em] text-pearl/25 mt-2">Welcome to the Two Souls world.</p>
          </motion.div>
        )}

        <motion.p variants={vU(.5)} className="font-cinzel text-[8px] tracking-[.45em] uppercase text-pearl/15 mt-8">
          Heal · Reconnect · Rise
        </motion.p>
      </motion.div>
    </section>
  );
}
