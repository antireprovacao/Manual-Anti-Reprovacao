import { Flame } from "lucide-react"
import { CtaButton } from "./cta-button"

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-20 sm:py-28">
      <div className="animate-glow-drift pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/15 blur-[120px]" />
      <div className="relative mx-auto max-w-2xl px-5 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-1.5 text-xs font-bold tracking-wide text-neon uppercase">
          <Flame className="h-3.5 w-3.5" />
          Sua transformação começa hoje
        </span>
        <h2 className="mt-6 text-balance text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
          O corpo que você quer está a <span className="text-neon">7 dias</span> de distância
        </h2>
        <p className="mt-5 text-pretty text-white/65">
          Você pode continuar adiando ou pode começar agora por apenas R$ 27. A decisão que muda tudo leva só um
          clique.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButton subtitle="Acesso imediato · Garantia de 7 dias">Sim, quero começar agora</CtaButton>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink py-10">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <p className="text-lg font-black tracking-tight">
          MÉTODO <span className="text-neon">7 DIAS</span>
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-white/40">
          Este produto não substitui o parecer médico profissional. Os resultados podem variar de pessoa para
          pessoa. Consulte sempre um profissional de saúde antes de iniciar qualquer programa alimentar.
        </p>
        <p className="mt-6 text-xs text-white/30">
          © {new Date().getFullYear()} Método 7 Dias. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
