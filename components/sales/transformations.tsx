import Image from "next/image"
import { TrendingDown, Star } from "lucide-react"
import { CtaButton } from "./cta-button"

const transformations = [
  {
    name: "Juliana, 34 anos",
    image: "/images/before-after-1.png",
    result: "-5,2 kg",
    days: "em 7 dias",
    quote: "Minha barriga desinchou já no 3º dia. Não acreditei quando subi na balança.",
  },
  {
    name: "Márcia, 41 anos",
    image: "/images/before-after-2.png",
    result: "-4,8 kg",
    days: "em 7 dias",
    quote: "Voltei a fechar o zíper da calça que não usava há 2 anos. Chorei de emoção.",
  },
  {
    name: "Beatriz, 28 anos",
    image: "/images/before-after-3.png",
    result: "-5,6 kg",
    days: "em 7 dias",
    quote: "A cintura afinou de verdade. Todo mundo perguntou o que eu tinha feito.",
  },
]

export function Transformations() {
  return (
    <section id="resultados" className="relative border-t border-white/5 py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-neon/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-4 py-1.5 text-xs font-bold tracking-wide text-neon uppercase">
            <TrendingDown className="h-3.5 w-3.5" />
            Resultados reais
          </span>
          <h2 className="mt-6 text-balance text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Elas perderam até{" "}
            <span className="text-neon">5 kg em 7 dias</span> — e você é a próxima
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            Não é montagem, não é filtro. São mulheres reais que seguiram o Método 7 Dias à risca e viram a barriga
            secar em menos de uma semana.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {transformations.map((t) => (
            <figure
              key={t.name}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-ink-soft transition-colors hover:border-neon/40"
            >
              <div className="relative">
                <Image
                  src={t.image || "/placeholder.svg"}
                  alt={`Antes e depois de ${t.name}`}
                  width={520}
                  height={640}
                  className="h-72 w-full object-cover sm:h-80"
                />
                <div className="absolute right-3 top-3 flex flex-col items-end rounded-2xl border border-neon/30 bg-ink/80 px-3 py-1.5 backdrop-blur-md">
                  <span className="text-lg font-black leading-none text-neon">{t.result}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-white/60">{t.days}</span>
                </div>
              </div>
              <figcaption className="p-5">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-salmon text-salmon" />
                  ))}
                </div>
                <blockquote className="mt-3 text-pretty text-sm leading-relaxed text-white/80">“{t.quote}”</blockquote>
                <p className="mt-4 text-sm font-semibold text-white">{t.name}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3">
          <CtaButton subtitle="Comece hoje e veja resultado nesta semana">Quero esse resultado também</CtaButton>
          <p className="text-xs text-white/50">Resultados podem variar de pessoa para pessoa.</p>
        </div>
      </div>
    </section>
  )
}
