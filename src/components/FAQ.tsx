import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { question: "Como funciona a primeira avaliação?",       answer: "Na sua primeira visita, realizamos uma avaliação completa da sua pele e necessidades. A partir dessa análise, montamos um protocolo de tratamento personalizado, alinhado aos seus objetivos e expectativas." },
  { question: "Os tratamentos são seguros?",                answer: "Todos os nossos procedimentos são realizados por profissionais especializados, seguindo rigorosos protocolos de segurança e higiene. Utilizamos apenas produtos e equipamentos certificados pela ANVISA." },
  { question: "Quanto tempo dura cada sessão?",             answer: "O tempo pode variar conforme o tipo de procedimento realizado. Na avaliação inicial, informamos com clareza a duração estimada do seu protocolo, respeitando o seu conforto e bem-estar." },
  { question: "É necessário agendar com antecedência?",     answer: "Sim, recomendamos o agendamento prévio para garantir um atendimento exclusivo e sem pressa. Você pode agendar diretamente pelo WhatsApp." },
  { question: "A clínica atende todos os tipos de pele?",   answer: "Sim! Nossos protocolos são personalizados para todos os tipos e fototipos de pele. Na avaliação inicial, identificamos as necessidades específicas para oferecer o melhor resultado." },
  { question: "Quais formas de pagamento são aceitas?",     answer: "Aceitamos cartões de crédito e débito, Pix e dinheiro. Para tratamentos com múltiplas sessões, oferecemos condições especiais de parcelamento." },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-fantasy">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="eyebrow mb-5">Dúvidas Frequentes</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-tobago leading-[1.1]">
            Perguntas <span className="italic text-rose">frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-tobago/10 rounded-2xl px-7 bg-vanilla data-[state=open]:bg-warm-cream transition-colors duration-500"
            >
              <AccordionTrigger className="text-left font-serif text-base md:text-lg font-medium text-tobago hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-tobago/65 leading-relaxed pb-6">
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
