"use client";
import { useEffect, useRef } from "react";

export function OceanCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
    resize(); window.addEventListener("resize", resize);

    type P = { x:number;y:number;vx:number;vy:number;r:number;a:number;col:string;life:number;max:number };
    const colors = ["rgba(212,146,76,","rgba(30,140,170,","rgba(212,175,55,","rgba(240,236,230,"];
    const ps: P[] = [];
    const mk = (): P => ({ x:Math.random()*c.width, y:c.height+5, vx:(Math.random()-.5)*.4, vy:-(Math.random()*.6+.2), r:Math.random()*2+.5, a:Math.random()*.5+.1, col:colors[Math.floor(Math.random()*colors.length)], life:0, max:Math.random()*280+180 });
    for (let i=0;i<70;i++) { const p=mk(); p.y=Math.random()*c.height; ps.push(p); }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0,0,c.width,c.height);
      if (Math.random()<.3) ps.push(mk());
      if (ps.length>130) ps.splice(0,1);
      ps.forEach((p,i) => {
        p.x+=p.vx; p.y+=p.vy; p.life++;
        const alpha = p.a * Math.sin((p.life/p.max)*Math.PI);
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = p.col+alpha+")"; ctx.fill();
        if (p.life>=p.max||p.y<-5) ps[i]=mk();
      });
      // wave lines
      ctx.save(); ctx.strokeStyle="rgba(30,140,170,0.04)"; ctx.lineWidth=1;
      const t = Date.now()/8000;
      for (let w=0;w<3;w++) {
        ctx.beginPath();
        for (let x=0;x<=c.width;x+=4) {
          const y = c.height*(0.3+w*.25) + Math.sin(x/180+t+w)*18 + Math.sin(x/80-t*1.5)*7;
          x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
        }
        ctx.stroke();
      }
      ctx.restore();
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener("resize",resize); cancelAnimationFrame(raf); };
  }, []);
  return <canvas ref={ref} aria-hidden className="fixed inset-0 pointer-events-none z-0 opacity-30" />;
}
