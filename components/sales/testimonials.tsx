import Image from "next/image"
import { Star, BadgeCheck } from "lucide-react"

const testimonials = [
  {
    name: "Juliana Prado",
    role: "perdeu 5kg em 7 dias",
    avatar: "/images/avatar-1.png",
    text: "Eu já tinha tentado de tudo e nada funcionava. No 4º dia a calça jeans que não fechava há meses entrou fácil. Chorei de felicidade — nunca foi tão rápido.",
  },
  {
    name: "Márcia Oliveira",
    role: "-4,8kg e barriga seca",
    avatar: "/images/avatar-2.png",
    text: "Sou mãe de 3, achei que não teria tempo. É tão simples que segui mesmo na correria. Em uma semana desinchei a barriga toda e voltei a me olhar no espelho com orgulho.",
  },
  {
    name: "Beatriz Lima",
    role: "cintura afinou em 6 dias",
    avatar: "/images/avatar-3.png",
    text: "O choque metabólico é real. Já no 2º dia parei de estufar depois das refeições. Minha cintura afinou tanto que todo mundo no trabalho perguntou o que eu fiz.",
  },
  {
    name: "Sônia Ribeiro",
    role: "-5kg aos 52 anos",
    avatar: "/images/avatar-4.png",
    text: "Achei que na minha idade e com meu metabolismo lento seria impossível. Perdi 5kg, ganhei disposição e minha autoestima voltou. Só me arrependo de não ter começado antes.",
  },
]

export function Testimonials() {
  return (
    <section className="relative border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-salmon-soft uppercase">Prova social</span>
          <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-4xl">
            Milhares de mulheres já transformaram o corpo
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-soft px-4 py-2">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-salmon text-salmon" />
              ))}
            </span>
            <span className="text-sm font-semibold text-white">4,9/5</span>
            <span className="text-sm text-white/50">· +680 mulheres</span>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-white/10 bg-ink-soft p-6 transition-colors hover:border-white/20"
            >
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-salmon text-salmon" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-white/80">“{t.text}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={t.avatar || "/placeholder.svg"}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full border border-white/10 object-cover"
                />
                <div>
                  <p className="flex items-center gap-1.5 font-semibold text-white">
                    {t.name}
                    <BadgeCheck className="h-4 w-4 text-neon" />
                  </p>
                  <p className="text-sm text-white/50">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
