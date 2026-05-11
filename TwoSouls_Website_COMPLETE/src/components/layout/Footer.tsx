import Image from "next/image";
import { BOOKS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-void border-t border-amber-warm/8 pt-16 pb-8 px-8 md:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Image src="/images/logo_white.png" alt="Shadow Wolf" width={160} height={60} className="object-contain mb-4 opacity-80" />
            <p className="font-body text-sm text-pearl/30 leading-relaxed max-w-xs mt-3">
              Shadow Wolf's Home. The official home of the Two Souls series — six books, six soundtracks, one journey without end.
            </p>
          </div>
          <div>
            <h4 className="font-cinzel text-[9px] tracking-[.4em] text-amber-warm/55 uppercase mb-5">The Series</h4>
            <ul className="space-y-2.5">
              {BOOKS.map(b=>(
                <li key={b.id}><a href="#books" className="font-body text-xs text-pearl/35 hover:text-amber-warm transition-colors">{b.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-cinzel text-[9px] tracking-[.4em] text-amber-warm/55 uppercase mb-5">Connect</h4>
            <ul className="space-y-2.5">
              {["Newsletter","Community","Music","Audiobooks","Film Project"].map(l=>(
                <li key={l}><a href={`#${l.toLowerCase().replace(" ","-")}`} className="font-body text-xs text-pearl/35 hover:text-amber-warm transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-pearl/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] text-pearl/20 tracking-wide">© 2026 Shadow Wolf's Home · All rights reserved</p>
          <p className="font-cinzel text-[8px] tracking-[.45em] text-amber-warm/25 uppercase">Heal · Reconnect · Rise</p>
        </div>
      </div>
    </footer>
  );
}
