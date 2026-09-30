'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SectionHeading } from '@/components/site/section-heading'

const sectors = [
  {
    id: 'mei',
    label: 'MEI',
    title: 'Plano empresarial a partir de 2 vidas',
    text: 'Com um CNPJ ativo, o titular e seus dependentes acessam preços de plano coletivo, geralmente menores que os individuais.',
    items: ['CNPJ com no mínimo 6 meses de abertura', 'Titular, sócio e dependentes', 'Economia frente ao plano individual'],
  },
  {
    id: 'pme',
    label: 'PME (2 a 29 vidas)',
    title: 'Benefício que atrai e retém talentos',
    text: 'Para pequenas empresas que querem oferecer saúde de qualidade sem comprometer o caixa.',
    items: ['Carências reduzidas conforme a operadora', 'Opções com coparticipação', 'Odontológico incluso ou à parte'],
  },
  {
    id: 'media',
    label: 'Médias (30 a 199)',
    title: 'Mais poder de negociação com as operadoras',
    text: 'A partir de 30 vidas é possível isentar carências e personalizar rede, acomodação e reajuste.',
    items: ['Isenção de carências', 'Planos diferentes por cargo', 'Relatórios de utilização para o RH'],
  },
  {
    id: 'grande',
    label: 'Grandes (200+)',
    title: 'Gestão estratégica da saúde corporativa',
    text: 'Consultoria contínua para controlar a sinistralidade e previsibilidade do orçamento de benefícios.',
    items: ['Estudos de sinistralidade e renovação', 'Programas de prevenção e saúde mental', 'Atendimento exclusivo ao RH'],
  },
]

export function Sectors() {
  return (
    <section id="portes" aria-labelledby="portes-title" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeading
            id="portes-title"
            eyebrow="Para cada porte"
            title="Do MEI à grande empresa"
            description="As regras de contratação mudam conforme o número de vidas. Mostramos o que vale para o seu caso."
          />

          <Tabs defaultValue="mei" className="gap-6">
            <TabsList
              variant="line"
              className="h-auto! w-full flex-wrap justify-start gap-2 p-0"
              aria-label="Selecione o porte da empresa"
            >
              {sectors.map((s) => (
                <TabsTrigger
                  key={s.id}
                  value={s.id}
                  className="h-10 flex-none rounded-full border border-border px-4 text-sm after:hidden data-active:border-primary! data-active:bg-primary! data-active:text-primary-foreground!"
                >
                  {s.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {sectors.map((s) => (
              <TabsContent key={s.id} value={s.id} className="flex flex-col gap-4 animate-in fade-in duration-300">
                <h3 className="text-2xl font-bold text-balance text-foreground">{s.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">{s.text}</p>
                <ul className="flex flex-col gap-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-base text-foreground">
                      <span className="flex size-6 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <Check className="size-3.5" aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="relative min-h-80 overflow-hidden rounded-3xl bg-muted lg:min-h-full">
          <Image
            src="/images/consultoria-saude.png"
            alt="Consultor apresentando um comparativo de planos de saúde para uma empresária e uma analista de RH"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
