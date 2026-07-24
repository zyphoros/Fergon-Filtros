import React from 'react';
import { brandsData, companyData } from '../data/content';
import { ShieldCheck, Check, MessageSquare } from 'lucide-react';

export const BrandsSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F5F7FA] text-[#0B1E4D] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1E4D]/10 text-xs font-bold uppercase tracking-wider text-[#0B1E4D]">
            <ShieldCheck className="w-4 h-4 text-[#2E9BF0]" />
            <span>Multimarcas Especializada</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1E4D]">
            Manutenção e Refis para as Principais Marcas
          </h2>

          <p className="text-sm text-slate-600">
            Trabalhamos com elementos filtrantes, peças de reposição e suporte técnico especializado para todos os modelos consagrados.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {brandsData.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-[#2E9BF0]"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-extrabold text-lg text-[#0B1E4D] group-hover:text-[#2E9BF0] transition-colors">
                    {brand.name}
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-[#3DBE6C]"></span>
                </div>

                <p className="text-[11px] font-semibold text-slate-500 mb-3">
                  {brand.category}
                </p>

                {/* Popular Models List */}
                <div className="flex flex-wrap gap-1">
                  {brand.models.map((model) => (
                    <span
                      key={model}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-700"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick WhatsApp Quote for this specific brand */}
              <a
                href={`${companyData.whatsappUrl}?text=${encodeURIComponent(`Olá! Preciso de refil ou manutenção para meu filtro da marca ${brand.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 pt-3 border-t border-slate-100 inline-flex items-center justify-between text-xs font-bold text-[#2E9BF0] group-hover:text-[#0B1E4D] transition-colors"
              >
                <span>Cotar Refil {brand.name}</span>
                <MessageSquare className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <Check className="w-4 h-4 text-[#3DBE6C]" />
          <span>Não encontrou sua marca acima? Entre em contato e consulte nosso estoque de adaptadores e refis universais.</span>
        </div>

      </div>
    </section>
  );
};
