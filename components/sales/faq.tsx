"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "Como recebo o acesso após a compra?",
    a: "O acesso é imediato! Assim que o pagamento for aprovado, você recebe o e-book diretamente no seu e-mail cadastrado. Em segundos você já pode começar.",
  },
  {
    q: "Preciso de academia ou equipamentos?",
    a: "Não. O Método 7 Dias foi criado para funcionar no seu dia a dia, com foco na reprogramação metabólica através da alimentação. Você pode aplicar em casa, sem gastar nada a mais.",
  },
  {
    q: "Funciona mesmo em apenas 7 dias?",
    a: "Sim. O protocolo foi desenhado para gerar o choque metabólico e resultados visíveis já na primeira semana. A constância é o que garante que os resultados continuem depois.",
  },
  {
    q: "E se não funcionar pra mim?",
    a: "Você tem garantia incondicional de 7 dias. Se não ficar satisfeita por qualquer motivo, é só pedir o reembolso e devolvemos 100% do valor. Você não corre nenhum risco.",
  },
  {
    q: "O pagamento é seguro?",
    a: "Totalmente. Utilizamos uma plataforma de pagamento criptografada e reconhecida no mercado. Seus dados estão protegidos do início ao fim.",
  },
  {
    q: "Posso acessar pelo celular?",
    a: "Sim! O e-book é digital e pode ser acessado pelo celular, tablet ou computador, quando e onde você quiser.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-neon uppercase">Dúvidas frequentes</span>
          <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-4xl">
            Ainda com alguma dúvida?
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-ink-soft transition-colors",
                  isOpen ? "border-neon/40" : "border-white/10",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-white">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 flex-none text-neon transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-white/65">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
