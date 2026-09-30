import { SectionHeading } from '@/components/site/section-heading'

const steps = [
  {
    title: 'Perfil das vidas',
    text: 'Levantamos quantidade de vidas, faixas etárias, cidades e preferências de rede e acomodação.',
  },
  {
    title: 'Comparativo de operadoras',
    text: 'Cotamos com as principais operadoras e mostramos preço, rede e carências lado a lado.',
  },
  {
    title: 'Implantação',
    text: 'Cuidamos da proposta, documentação e envio das carteirinhas, sem sobrecarregar o seu RH.',
  },
  {
    title: 'Pós-venda e renovação',
    text: 'Inclusões e exclusões de vidas, suporte a autorizações e negociação do reajuste anual.',
  },
]

export function Process() {
  return (
    <section id="como-funciona" aria-labelledby="processo-title" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 md:px-6">
        <SectionHeading
          id="processo-title"
          eyebrow="Como funciona"
          title="Da cotação à carteirinha em quatro etapas"
          description="Um processo transparente e acompanhado por um único consultor do início ao fim."
          inverted
        />

        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex flex-col gap-4 border-t border-primary-foreground/20 pt-6">
              <span
                aria-hidden="true"
                className="absolute -top-px left-0 h-0.5 w-12 bg-accent"
              />
              <span className="font-heading text-sm font-bold tabular-nums text-accent">
                {`Etapa ${i + 1}`}
              </span>
              <h3 className="text-xl font-bold text-primary-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/75">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
