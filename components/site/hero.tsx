import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const coverageRows = [
  { label: 'Vidas ativas', value: '128' },
  { label: 'Rede credenciada', value: '2.400+' },
  { label: 'Economia vs. plano individual', value: 'até 35%' },
]

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-10 pb-16 md:px-6 md:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        <div className="flex flex-col gap-7 lg:col-span-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-primary">
            <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
            Seguro Saúde Empresarial · a partir de 2 vidas
          </p>

          <h1
            id="hero-title"
            className="text-4xl leading-[1.08] font-extrabold tracking-tight text-balance text-primary sm:text-5xl xl:text-6xl"
          >
            Saúde para sua equipe.{' '}
            <span className="underline decoration-accent decoration-4 underline-offset-8 sm:decoration-[6px]">
              Economia para sua empresa.
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Comparamos as principais operadoras do mercado e montamos o plano de saúde ideal para o seu CNPJ — de
            MEIs a grandes empresas — com implantação acompanhada e suporte dedicado ao RH.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/#cotacao" className={cn(buttonVariants({ size: 'lg' }), 'h-12 px-6 text-base')}>
              Cotar plano de saúde
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Link>
            <Link
              href="/#planos"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-12 px-6 text-base')}
            >
              Conhecer os planos
            </Link>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {['Comparativo em até 24h', 'Operadoras reguladas pela ANS', 'Cotação sem custo'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-success" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-6 animate-in fade-in zoom-in-95 duration-1000">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted lg:aspect-[5/5.2]">
            <Image
              src="/images/hero-saude.png"
              alt="Gestora de RH com tablet ao lado de colaboradores sorrindo em um escritório moderno"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="relative -mt-20 mx-4 rounded-2xl border border-border bg-card p-5 shadow-xl shadow-primary/10 sm:absolute sm:bottom-6 sm:-left-6 sm:mx-0 sm:mt-0 sm:w-80 lg:-left-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground">Plano de saúde empresarial</p>
                <p className="font-heading text-sm font-bold text-foreground">Tech Exemplo Ltda.</p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs font-semibold text-success">
                <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
                Vigente
              </span>
            </div>
            <dl className="mt-4 flex flex-col gap-2.5">
              {coverageRows.map((row) => (
                <div key={row.label} className="flex items-center justify-between text-sm">
                  <dt className="text-muted-foreground">{row.label}</dt>
                  <dd className="font-semibold tabular-nums text-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted" aria-hidden="true">
              <div className="h-full w-[96%] rounded-full bg-accent" />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{'Adesão dos colaboradores: 96% — ilustrativo'}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
