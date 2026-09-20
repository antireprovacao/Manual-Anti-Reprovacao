import Image from "next/image"
import { Flame, ShieldCheck, Star, Zap } from "lucide-react"
import { CtaButton } from "./cta-button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid">
      {/* ambient glows */}
      <div className="animate-glow-drift pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-neon/20 blur-[120px]" />
      <div className="animate-glow-drift pointer-events-none absolute -top-20 right-0 h-[28rem] w-[28rem] rounded-full bg-salmon/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-20 lg:grid-cols-2 lg:gap-8 lg:pt-24 lg:pb-28">
        {/* copy */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-salmon/40 bg-salmon/10 px-4 py-1.5 text-xs font-bold tracking-wide text-salmon-soft uppercase">
            <Flame className="h-3.5 w-3.5" />
            Choque Metabólico em 7 dias
          </span>

          <h1 className="mt-6 text-balance text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Perca até{" "}
            <span className="relative whitespace-nowrap text-neon">
              5 kg em 7 dias
              <span className="absolute inset-x-0 -bottom-1 h-1 rounded-full bg-neon/50 blur-[2px]" />
            </span>{" "}
            sem passar fome
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            Imagine olhar no espelho daqui a 7 dias e ver a barriga seca de novo. O{" "}
            <strong className="text-white">Método 7 Dias</strong> ativa seu metabolismo com um protocolo simples e
            comprovado — sem academia, sem dieta maluca e sem sofrimento. Só o resultado que você já devia ter há muito
            tempo.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            <CtaButton subtitle="Acesso imediato no seu e-mail">Quero meu corpo em 7 dias</CtaButton>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/60 lg:justify-start">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-neon" />
              Garantia de 7 dias
            </span>
            <span className="inline-flex items-center gap-2">
              <Zap className="h-4 w-4 text-neon" />
              Acesso imediato
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-salmon text-salmon" />
                ))}
              </span>
              +680 mulheres
            </span>
          </div>
        </div>

        {/* image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="animate-float-slow relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-neon/10 blur-2xl" />
            <div className="ring-glow relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-soft">
              <Image
                src="/images/hero-fitness.png"
                alt="Mulher em forma vestindo roupa fitness"
                width={520}
                height={640}
                priority
                className="h-auto w-[300px] object-cover sm:w-[400px] lg:w-[460px]"
              />
            </div>

            {/* floating stat card */}
            <div className="glow-neon absolute -left-4 bottom-16 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink/90 px-4 py-3 backdrop-blur sm:-left-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon/15 text-neon">
                <Flame className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-lg font-black leading-none text-white">-5kg</p>
                <p className="text-xs text-white/60">na 1ª semana</p>
              </div>
            </div>

            <div className="glow-salmon absolute -right-3 top-10 flex items-center gap-2 rounded-2xl border border-white/10 bg-ink/90 px-4 py-3 backdrop-blur sm:-right-8">
              <div className="flex -space-x-2">
                {["/images/avatar-1.png", "/images/avatar-3.png", "/images/avatar-2.png"].map((src) => (
                  <Image
                    key={src}
                    src={src || "/placeholder.svg"}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-full border-2 border-ink object-cover"
                  />
                ))}
              </div>
              <p className="text-xs font-semibold text-white">
                aprovado <br /> por milhares
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
