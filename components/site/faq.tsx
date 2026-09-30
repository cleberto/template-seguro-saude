import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SectionHeading } from '@/components/site/section-heading'

const questions = [
  {
    q: 'Qual o mínimo de vidas para contratar um plano empresarial?',
    a: 'A partir de 2 vidas, inclusive para MEI. Normalmente é exigido que o titular tenha vínculo com o CNPJ (sócio ou colaborador registrado) e que a empresa esteja ativa há alguns meses, conforme a operadora.',
  },
  {
    q: 'Existe carência no plano de saúde empresarial?',
    a: 'Em planos PME as carências costumam ser reduzidas. Acima de 30 vidas, a regulamentação da ANS permite a isenção de carências quando a adesão ocorre em até 30 dias da contratação ou do ingresso na empresa.',
  },
  {
    q: 'Posso incluir dependentes?',
    a: 'Sim. Cônjuge e filhos podem ser incluídos, e algumas operadoras aceitam outros graus de parentesco. O custo pode ser integral ou parcialmente pago pela empresa.',
  },
  {
    q: 'Como funciona o reajuste anual?',
    a: 'Planos com até 29 vidas seguem o reajuste do agrupamento definido pela operadora. Acima disso, o reajuste considera a sinistralidade do contrato — por isso a gestão de saúde faz diferença na renovação.',
  },
  {
    q: 'Vocês pedem dados de saúde dos colaboradores?',
    a: 'Não na cotação. Declarações de saúde só são exigidas pela operadora na contratação, quando aplicável, e são tratadas como dados sensíveis conforme a LGPD, com acesso restrito e finalidade exclusiva.',
  },
]

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="duvidas-title"
            eyebrow="Dúvidas frequentes"
            title="Perguntas que ouvimos toda semana"
            description="Não encontrou o que procurava? Fale com um consultor pelo formulário de cotação."
          />
        </div>
        <Accordion className="lg:col-span-7">
          {questions.map((item) => (
            <AccordionItem key={item.q} value={item.q} className="border-border">
              <AccordionTrigger className="py-5 font-heading text-base font-bold text-foreground hover:no-underline md:text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
