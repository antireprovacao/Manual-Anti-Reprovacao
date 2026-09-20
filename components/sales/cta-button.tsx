import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type CtaButtonProps = {
  children: React.ReactNode
  subtitle?: string
  className?: string
  href?: string
}

export function CtaButton({ children, subtitle, className, href = "#comprar" }: CtaButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group animate-cta-pulse relative inline-flex w-full max-w-md flex-col items-center justify-center gap-0.5 rounded-2xl bg-neon px-8 py-4 text-center font-extrabold text-ink transition-transform duration-200 hover:scale-[1.03] active:scale-95 sm:w-auto",
        className,
      )}
    >
      <span className="flex items-center gap-2 text-base sm:text-lg">
        {children}
        <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
      {subtitle ? <span className="text-[11px] font-semibold tracking-wide text-ink/70 uppercase">{subtitle}</span> : null}
    </a>
  )
}
