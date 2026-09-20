import { Flame, Clock, Salad, HeartPulse, Sparkles, TrendingDown } from "lucide-react"

const benefits = [
  {
    icon: Flame,
    title: "Choque Metabólico",
    desc: "Ative a queima de gordura acelerada com o protocolo exclusivo que reprograma seu metabolismo em 7 dias.",
  },
  {
    icon: Clock,
    title: "Prático e Rápido",
    desc: "Cardápios simples com ingredientes acessíveis. Nada de receitas caras ou horas na cozinha.",
  },
  {
    icon: Salad,
    title: "Sem Passar Fome",
    desc: "Coma bem, se sinta saciada e ainda assim emagreça. O segredo está na combinação certa dos alimentos.",
  },
  {
    icon: TrendingDown,
    title: "Resultado Visível",
    desc: "Perca medidas logo nos primeiros dias e sinta suas roupas mais folgadas antes do fim de semana.",
  },
  {
    icon: HeartPulse,
    title: "Mais Energia",
    desc: "Acorde disposta, sem aquele inchaço e cansaço constante. Seu corpo funcionando como deveria.",
  },
  {
    icon: Sparkles,
    title: "Autoestima Renovada",
    desc: "Volte a se olhar no espelho com orgulho e vista o que quiser com total confiança.",
  },
]

export function Benefits() {
  return (
    <section className="relative border-t border-white/5 py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-neon/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-neon uppercase">O que você recebe</span>
          <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-4xl">
            Tudo que você precisa para transformar seu corpo
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon/40"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-neon/0 blur-2xl transition-all duration-300 group-hover:bg-neon/20" />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neon/10 text-neon ring-1 ring-neon/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
