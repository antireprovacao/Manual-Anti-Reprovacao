import Image from "next/image"
import { Check, Lock, ShieldCheck, Flame } from "lucide-react"
import { CtaButton } from "./cta-button"

const included = [
  "E-book completo Método 7 Dias",
  "Protocolo Pele Firme (bônus)",
  "Desafio Zero Papada (bônus)",
  "Glúteos na Prática (bônus)",
  "Cardápio 7 dias + lista de compras (bônus)",
  "Manual Anti-Efeito Sanfona (bônus)",
  "Acesso imediato e vitalício",
]

export function Pricing() {
  return (
    <section id="comprar" className="relative border-t border-white/5 py-20 sm:py-28 scroll-mt-10">
      <div className="animate-glow-drift pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-neon/15 blur-[110px]" />

      <div className="relative mx-auto max-w-4xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-neon uppercase">Oferta por tempo limitado</span>
          <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-4xl">
            Comece a secar hoje por menos que um lanche
          </h2>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-salmon/40 bg-salmon/10 px-4 py-2 text-sm font-bold text-salmon-soft">
            <Flame className="h-4 w-4" />
            72% de desconto só nas próximas horas
          </div>
        </div>

        <div className="glow-neon relative mt-12 overflow-hidden rounded-[2rem] border border-neon/30 bg-ink-soft">
          <div className="grid md:grid-cols-2">
            {/* left: product */}
            <div className="relative flex items-center justify-center border-b border-white/10 bg-gradient-to-b from-neon/5 to-transparent p-8 md:border-b-0 md:border-r">
              <div className="animate-float-slow w-full max-w-xs">
                <Image
                  src="/images/product-cover.jpeg"
                  alt="Capa do produto Método 7 Dias"
                  width={720}
                  height={389}
                  className="h-auto w-full rounded-xl border border-white/10 shadow-2xl shadow-black/50"
                />
                <p className="mt-4 text-center text-xs font-semibold tracking-wide text-white/50">
                  + 5 bônus exclusivos inclusos hoje
                </p>
              </div>
            </div>

            {/* right: offer */}
            <div className="p-8">
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-neon/15 text-neon">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm text-white/50">
                  De <span className="font-semibold text-white/70 line-through decoration-salmon">R$ 97,00</span> por
                  apenas
                </p>
                <div className="mt-1 flex items-end gap-2">
                  <span className="text-5xl font-black tracking-tight text-neon">R$ 27</span>
                  <span className="mb-1.5 text-lg font-bold text-neon">,00</span>
                  <span className="mb-2 text-sm text-white/50">à vista</span>
                </div>
                <p className="mt-1 text-sm text-white/50">ou 3x de R$ 9,63 no cartão</p>

                <CtaButton className="mt-6 w-full" subtitle="Compra 100% segura">
                  Quero garantir agora
                </CtaButton>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/50">
                  <span className="inline-flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5 text-neon" /> Pagamento seguro
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-neon" /> Garantia de 7 dias
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* guarantee */}
        <div className="mx-auto mt-10 flex max-w-2xl items-center gap-5 rounded-3xl border border-white/10 bg-ink-soft p-6">
          <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-neon/10 text-neon ring-1 ring-neon/20">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <div>
            <h3 className="font-bold text-white">Garantia incondicional de 7 dias</h3>
            <p className="mt-1 text-sm text-white/60">
              Se por qualquer motivo você não gostar, devolvemos 100% do seu dinheiro. Sem perguntas, sem
              burocracia. O risco é todo nosso.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
