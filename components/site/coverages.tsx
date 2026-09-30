import { Brain, Building2, HeartPulse, Hospital, Receipt, Smile, Stethoscope, Video } from 'lucide-react'
import { SectionHeading } from '@/components/site/section-heading'

const plans = [
  {
    icon: HeartPulse,
    title: 'Saúde PME',
    text: 'Para empresas de 2 a 29 vidas, incluindo MEI. Preços de plano coletivo com carências reduzidas.',
  },
  {
    icon: Building2,
    title: 'Saúde Empresarial',
    text: 'A partir de 30 vidas, com negociação de reajuste, isenção de carências e condições personalizadas.',
  },
  {
    icon: Smile,
    title: 'Odontológico',
    text: 'Benefício de alto valor percebido e baixo custo, contratado junto ou separado do plano de saúde.',
  },
  {
    icon: Receipt,
    title: 'Coparticipação',
    text: 'Mensalidade menor com participação em consultas e exames, ideal para controlar a sinistralidade.',
  },
  {
    icon: Hospital,
    title: 'Rede e reembolso',
    text: 'Planos regionais ou nacionais, com hospitais de referência e opção de livre escolha com reembolso.',
  },
  {
    icon: Video,
    title: 'Telemedicina 24h',
    text: 'Pronto atendimento por vídeo para toda a equipe, reduzindo idas desnecessárias ao pronto-socorro.',
  },
  {
    icon: Brain,
    title: 'Saúde mental',
    text: 'Acesso a psicólogos e programas de apoio emocional, alinhados à NR-1 e aos riscos psicossociais.',
  },
  {
    icon: Stethoscope,
    title: 'Gestão de saúde',
    text: 'Relatórios de utilização, programas de prevenção e ações para conter o reajuste na renovação.',
  },
]

export function Coverages() {
  return (
    <section id="planos" aria-labelledby="planos-title" className="bg-muted py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          id="planos-title"
          eyebrow="Planos e benefícios"
          title="O plano certo para o tamanho da sua equipe"
          description="Comparamos operadoras, rede credenciada e reajustes para indicar a melhor relação entre custo e cobertura."
        />

        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {plans.map(({ icon: Icon, title, text }) => (
            <li key={title} className="group flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-secondary md:p-7">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
