import { SectionHeading } from '@/components/site/section-heading'

const testimonials = [
  {
    quote:
      'Como MEI, eu pagava um plano individual caríssimo. Migrei pelo CNPJ, incluí minha família e a mensalidade caiu quase pela metade.',
    name: 'Mariana Duarte',
    role: 'Arquiteta e MEI (fictício)',
  },
  {
    quote:
      'Oferecer plano de saúde mudou nossa retenção. O comparativo deixou claro o custo por vida e a implantação foi toda conduzida por eles.',
    name: 'Rafael Nogueira',
    role: 'CEO, Startup com 24 colaboradores (fictício)',
  },
  {
    quote:
      'Com os relatórios de utilização e o programa de prevenção, conseguimos negociar um reajuste bem abaixo do proposto pela operadora.',
    name: 'Carla Menezes',
    role: 'Gerente de RH, Indústria com 350 vidas (fictício)',
  },
]

export function Testimonials() {
  return (
    <section aria-labelledby="depoimentos-title" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          id="depoimentos-title"
          eyebrow="Clientes"
          title="Empresas que cuidam de quem faz o negócio acontecer"
          align="center"
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col justify-between gap-6 rounded-2xl bg-muted p-7">
                <blockquote className="text-base leading-relaxed text-pretty text-foreground">
                  {`“${t.quote}”`}
                </blockquote>
                <figcaption className="flex flex-col gap-0.5 border-t border-border pt-4">
                  <span className="font-heading font-bold text-foreground">{t.name}</span>
                  <span className="text-sm text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
