"use client";
import { useEffect, useRef } from "react";
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window==="undefined"||window.innerWidth<768) return;
    let mx=0,my=0,rx=0,ry=0;
    window.addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY});
    let raf: number;
    const tick = () => {
      rx+=(mx-rx)*.11; ry+=(my-ry)*.11;
      if(dot.current){dot.current.style.left=mx+"px";dot.current.style.top=my+"px";}
      if(ring.current){ring.current.style.left=rx+"px";ring.current.style.top=ry+"px";}
      raf=requestAnimationFrame(tick);
    };
    tick();
    const enter=()=>{if(dot.current)dot.current.style.transform="translate(-50%,-50%) scale(2.5)";if(ring.current)ring.current.style.transform="translate(-50%,-50%) scale(1.6)"};
    const leave=()=>{if(dot.current)dot.current.style.transform="translate(-50%,-50%) scale(1)";if(ring.current)ring.current.style.transform="translate(-50%,-50%) scale(1)"};
    document.querySelectorAll("a,button").forEach(el=>{el.addEventListener("mouseenter",enter);el.addEventListener("mouseleave",leave)});
    return ()=>cancelAnimationFrame(raf);
  },[]);
  return (<><div ref={dot} className="cursor-dot" aria-hidden /><div ref={ring} className="cursor-ring" aria-hidden /></>);
}
