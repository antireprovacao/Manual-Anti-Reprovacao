import { Gift, Sparkles, Check } from "lucide-react"
import { CtaButton } from "./cta-button"

const bonuses = [
  {
    tag: "Bônus #1",
    title: "Protocolo Pele Firme",
    anchor: "R$ 97,00",
    pain: "O medo de ficar com a pele flácida, murcha ou pendurada depois de eliminar peso rápido.",
    what: "Guia com os nutrientes essenciais, truques de hidratação e rotinas diárias para a pele acompanhar a queima de gordura — tonificada, elástica e firme.",
  },
  {
    tag: "Bônus #2",
    title: "O Desafio Zero Papada",
    anchor: "R$ 77,00",
    pain: "O inchaço facial e a gordura no rosto que incomodam nas fotos e no espelho.",
    what: "Massagens faciais de 3 minutos e manobras de drenagem linfática para desinchar o rosto, definir o contorno e eliminar a papada já na primeira semana.",
  },
  {
    tag: "Bônus #3",
    title: "Protocolo Glúteos na Prática",
    anchor: "R$ 87,00",
    pain: "O medo de perder massa muscular e ficar com o bumbum caído ou sem forma ao emagrecer.",
    what: "Movimentos e estímulos localizados para tonificar, levantar e enrijecer o glúteo, combatendo a flacidez em uma das áreas mais desejadas.",
  },
  {
    tag: "Bônus #4",
    title: "Cardápio dos 7 Dias + Lista de Compras",
    anchor: "R$ 97,00",
    pain: "A ansiedade de não saber o que comer e o gasto excessivo com ingredientes caros.",
    what: "Cronograma alimentar completo para cada um dos 7 dias, com lista de supermercado inteligente: ingredientes simples, baratos e fáceis de achar.",
  },
  {
    tag: "Bônus #5",
    title: "Manual Anti-Efeito Sanfona",
    anchor: "R$ 77,00",
    pain: "O pânico de recuperar todo o peso perdido assim que terminar o desafio de 7 dias.",
    what: "Estratégias mentais, truques comportamentais e o plano de manutenção para estabilizar o novo peso e manter os resultados a longo prazo, sem sofrimento.",
  },
]

export function Bonuses() {
  return (
    <section id="bonus" className="relative border-t border-white/5 py-20 sm:py-28 scroll-mt-10">
      <div className="animate-glow-drift pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-salmon/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-salmon/40 bg-salmon/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-salmon-soft">
            <Gift className="h-4 w-4" />
            Bônus exclusivos de hoje
          </span>
          <h2 className="mt-5 text-balance text-3xl font-black leading-tight sm:text-4xl">
            Leve <span className="text-neon">5 bônus</span> que sozinhos valem R$ 435,00
          </h2>
          <p className="mt-4 text-pretty text-white/60">
            Cada bônus resolve um medo real de quem quer emagrecer rápido — pele firme, rosto definido, corpo
            tonificado e resultado que não volta. Hoje, todos entram de graça na sua compra.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {bonuses.map((b, i) => (
            <div
              key={b.title}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-soft p-6 transition-colors hover:border-neon/30 ${
                i === bonuses.length - 1 && bonuses.length % 2 !== 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-neon/10 px-3 py-1 text-xs font-bold text-neon ring-1 ring-neon/20">
                  <Sparkles className="h-3.5 w-3.5" />
                  {b.tag}
                </span>
                <div className="text-right">
                  <span className="block text-xs text-white/40 line-through decoration-salmon">{b.anchor}</span>
                  <span className="block text-sm font-black text-neon">GRÁTIS</span>
                </div>
              </div>

              <h3 className="mt-4 text-lg font-bold text-white">{b.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                <span className="font-semibold text-salmon-soft">Resolve: </span>
                {b.pain}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{b.what}</p>
            </div>
          ))}
        </div>

        {/* value stack */}
        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-neon/25 bg-gradient-to-b from-neon/5 to-transparent p-7 text-center">
          <ul className="mx-auto max-w-md space-y-2 text-left">
            {[
              ["Método 7 Dias completo", "R$ 97,00"],
              ["5 bônus exclusivos", "R$ 435,00"],
            ].map(([label, value]) => (
              <li key={label} className="flex items-center justify-between text-sm text-white/70">
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-neon" strokeWidth={3} />
                  {label}
                </span>
                <span className="text-white/40 line-through decoration-salmon">{value}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 border-t border-white/10 pt-5">
            <p className="text-sm text-white/50">
              Valor total real: <span className="font-bold text-white/70 line-through decoration-salmon">R$ 532,00</span>
            </p>
            <p className="mt-2 text-sm text-white/60">Hoje você leva tudo por apenas</p>
            <p className="mt-1 text-4xl font-black text-neon">R$ 27,00</p>
          </div>
          <CtaButton className="mx-auto mt-6" subtitle="Bônus liberados na hora do pagamento">
            Quero os 5 bônus grátis
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
