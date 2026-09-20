import { X } from "lucide-react"

const pains = [
  "Você evita fotos e se esconde nas roupas largas para disfarçar o corpo.",
  "Já tentou mil dietas e sempre desistiu na primeira semana por serem impossíveis.",
  "Sente aquele desânimo ao se olhar no espelho e não reconhecer quem você é.",
  "Tem um evento chegando e sente que o tempo está passando rápido demais.",
  "Está cansada de promessas vazias que só te fazem gastar dinheiro e perder tempo.",
]

export function Pain() {
  return (
    <section className="relative border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <span className="text-xs font-bold tracking-[0.2em] text-salmon-soft uppercase">Chega de sofrer</span>
        <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-4xl">
          Se você se identifica com <span className="text-salmon">pelo menos um</span> destes pontos, este método é
          pra você
        </h2>
        <p className="mt-4 text-white/60">
          O problema nunca foi você. Foi o método errado. Dietas restritivas e treinos impossíveis só te fazem
          desistir.
        </p>
      </div>

      <ul className="mx-auto mt-12 grid max-w-3xl gap-3 px-5">
        {pains.map((pain) => (
          <li
            key={pain}
            className="flex items-start gap-4 rounded-2xl border border-salmon/15 bg-salmon/[0.04] px-5 py-4 text-left transition-colors hover:border-salmon/30"
          >
            <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-salmon/15 text-salmon">
              <X className="h-4 w-4" strokeWidth={3} />
            </span>
            <span className="text-white/80">{pain}</span>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-10 max-w-2xl px-5 text-center text-lg font-semibold text-white">
        Respira. A partir de hoje, isso muda. <span className="text-neon">Em apenas 7 dias.</span>
      </p>
    </section>
  )
}
