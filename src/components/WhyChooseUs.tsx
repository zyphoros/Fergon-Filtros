import React from 'react';
import { differentialsData } from '../data/content';
import { Award, Clock, CheckCircle2, Shield, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-7 h-7 text-[#2E9BF0]" />;
      case 'Clock':
        return <Clock className="w-7 h-7 text-[#3DBE6C]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-7 h-7 text-[#2E9BF0]" />;
      case 'Shield':
        return <Shield className="w-7 h-7 text-[#3DBE6C]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#2E9BF0]" />;
    }
  };

  return (
    <section id="diferenciais" className="py-20 bg-[#0B1E4D] text-white relative overflow-hidden border-t border-b border-[#1C3675]/60">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#2E9BF0]/10 via-[#3DBE6C]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C3675]/60 border border-[#2E9BF0]/30 text-xs font-bold uppercase tracking-widest text-[#2E9BF0]">
            <Sparkles className="w-4 h-4 text-[#3DBE6C]" />
            <span>Por Que Escolher a Fêrgon</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Compromisso com a sua saúde e tranquilidade
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Conheça os diferenciais que fazem da Fêrgon Filtros e Refrigeração a referência técnica em Brasília.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentialsData.map((diff) => (
            <div
              key={diff.id}
              className="bg-gradient-to-b from-[#102761] to-[#08183F] border border-[#1C3675] rounded-2xl p-6 shadow-xl hover:border-[#2E9BF0]/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-xl bg-[#0B1E4D] border border-[#1C3675] flex items-center justify-center mb-6 group-hover:border-[#2E9BF0] shadow-md transition-colors">
                  {getIcon(diff.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#2E9BF0] transition-colors">
                  {diff.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {diff.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="w-full h-1 bg-gradient-to-r from-[#2E9BF0]/20 to-[#3DBE6C]/20 rounded-full mt-6 group-hover:from-[#2E9BF0] group-hover:to-[#3DBE6C] transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* High impact guarantee banner */}
        <div className="mt-14 bg-gradient-to-r from-[#102761] via-[#15347E] to-[#102761] border border-[#2E9BF0]/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-gradient flex-shrink-0 flex items-center justify-center text-white shadow-lg">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Transparência e Preço Justo</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Avaliamos o seu equipamento e apresentamos o orçamento prévio antes de realizar qualquer substituição de peça ou reparo técnico.
              </p>
            </div>
          </div>

          <a
            href="#contato"
            className="flex-shrink-0 px-6 py-3 rounded-xl text-sm font-bold text-[#0B1E4D] bg-white hover:bg-slate-100 transition-colors shadow-md"
          >
            Falar com Atendimento
          </a>
        </div>

      </div>
    </section>
  );
};
