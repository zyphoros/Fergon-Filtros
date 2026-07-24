import React, { useState } from 'react';
import { faqsData } from '../data/content';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#0B1E4D] text-white relative border-b border-[#1C3675]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1C3675]/60 border border-[#2E9BF0]/30 text-xs font-bold uppercase tracking-widest text-[#2E9BF0]">
            <HelpCircle className="w-4 h-4 text-[#3DBE6C]" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes
          </h2>

          <p className="text-sm text-slate-300">
            Respostas diretas sobre a manutenção do seu filtro e nosso atendimento em Brasília.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#071333] border border-[#1C3675] rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-[#2E9BF0] transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#2E9BF0] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 border-t border-[#1C3675]/50 pt-3 leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center text-xs text-slate-400">
          Ainda tem dúvidas sobre o seu modelo de filtro?{' '}
          <a
            href="https://wa.me/5561982049206?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20meu%20filtro%20de%20%C3%A1gua."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E9BF0] font-bold hover:underline inline-flex items-center gap-1"
          >
            <span>Fale direto no WhatsApp com o técnico</span>
            <MessageSquare className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
