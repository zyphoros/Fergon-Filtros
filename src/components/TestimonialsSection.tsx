import React from 'react';
import { testimonialsData } from '../data/content';
import { Star, Quote, CheckCircle, MessageSquare } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-[#F5F7FA] text-[#0B1E4D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0B1E4D]/10 text-xs font-bold uppercase tracking-widest text-[#0B1E4D]">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Avaliações de Clientes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1E4D] tracking-tight">
            Quem aprova recomenda a Fêrgon
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Confira a experiência de moradores e empresários de Brasília que contam com nosso suporte para seus purificadores e bebedouros.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              {/* Quote icon background */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 group-hover:text-[#2E9BF0]/15 transition-colors pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-500 ml-1.5">{t.rating}.0</span>
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & Location info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-sm text-[#0B1E4D]">{t.name}</h4>
                    <CheckCircle className="w-3.5 h-3.5 text-[#3DBE6C]" />
                  </div>
                  <p className="text-xs text-slate-500">{t.role} • <strong className="text-slate-700">{t.location}</strong></p>
                </div>

                {t.filterModel && (
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-[#0B1E4D]/5 text-[#0B1E4D]">
                    {t.filterModel}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Call to leave feedback or ask for reference */}
        <div className="mt-12 text-center bg-white border border-slate-200/80 rounded-2xl p-6 max-w-xl mx-auto shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-[#0B1E4D]">Já é nosso cliente?</h4>
            <p className="text-xs text-slate-500">Deixe sua opinião ou peça uma indicação direta no WhatsApp.</p>
          </div>

          <a
            href="https://maps.app.goo.gl/Zf9D4mW2cDwDqMdB6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold text-[#0B1E4D] bg-slate-100 hover:bg-slate-200 transition-colors inline-flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#2E9BF0]" />
            <span>Ver no Google</span>
          </a>
        </div>

      </div>
    </section>
  );
};
