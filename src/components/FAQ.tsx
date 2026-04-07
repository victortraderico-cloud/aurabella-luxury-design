import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a primeira avaliação?",
    answer:
      "Na sua primeira visita, realizamos uma avaliação completa da sua pele e necessidades. A partir dessa análise, montamos um protocolo de tratamento personalizado, alinhado aos seus objetivos e expectativas.",
  },
  {
    question: "Os tratamentos são seguros?",
    answer:
      "Todos os nossos procedimentos são realizados por profissionais especializados, seguindo rigorosos protocolos de segurança e higiene. Utilizamos apenas produtos e equipamentos certificados pela ANVISA.",
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer:
      "A duração varia conforme o tratamento. Procedimentos faciais costumam durar de 40 a 90 minutos, enquanto tratamentos corporais podem levar de 60 a 120 minutos. Na avaliação inicial, informamos a duração exata.",
  },
  {
    question: "É necessário agendar com antecedência?",
    answer:
      "Sim, recomendamos o agendamento prévio para garantir um atendimento exclusivo e sem pressa. Você pode agendar diretamente pelo WhatsApp.",
  },
  {
    question: "A clínica atende todos os tipos de pele?",
    answer:
      "Sim! Nossos protocolos são personalizados para todos os tipos e fototipos de pele. Na avaliação inicial, identificamos as necessidades específicas para oferecer o melhor resultado.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos cartões de crédito e débito, Pix e dinheiro. Para tratamentos com múltiplas sessões, oferecemos condições especiais de parcelamento.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.25em] uppercase text-primary mb-4">
            Dúvidas Frequentes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Perguntas <span className="italic">frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-2xl px-6 bg-card/30 data-[state=open]:bg-card/60 transition-colors duration-300"
            >
              <AccordionTrigger className="text-left font-serif text-base font-medium text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
