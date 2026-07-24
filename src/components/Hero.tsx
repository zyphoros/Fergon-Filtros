import React from 'react';
import { companyData } from '../data/content';
import { MessageSquare, ArrowRight, ShieldCheck, MapPin, CheckCircle, Droplet, Sparkles, Wrench } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappQuoteMsg = encodeURIComponent(
    'Olá! Gostaria de solicitar um orçamento para o meu filtro/purificador de água.'
  );

  return (
    <section id="inicio" className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden bg-[#0B1E4D]">
      {/* Background ambient light glowing bubbles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#2E9BF0]/20 to-[#3DBE6C]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#2E9BF0]/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Decorative water wave pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2E9BF0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headlines and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C3675]/60 border border-[#2E9BF0]/30 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#3DBE6C] animate-ping"></span>
              <MapPin className="w-4 h-4 text-[#2E9BF0]" />
              <span>Atendimento em Brasília - Plano Piloto (CLN 103)</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Água pura,{' '}
              <span className="text-brand-gradient inline-block">
                equipamentos que funcionam.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Assistência técnica especializada, higienização, manutenção preventiva e venda de refis para filtros, purificadores e bebedouros no <strong className="text-white font-semibold">Plano Piloto</strong> e toda Brasília.
            </p>

            {/* Quick Benefits Bullet Points */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-200 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3DBE6C] flex-shrink-0" />
                <span>Técnicos especializados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3DBE6C] flex-shrink-0" />
                <span>Peças e refis originais</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3DBE6C] flex-shrink-0" />
                <span>Atendimento rápido no local</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#3DBE6C] flex-shrink-0" />
                <span>Garantia de serviço formal</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={`${companyData.whatsappUrl}?text=${whatsappQuoteMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white bg-brand-gradient hover:opacity-95 shadow-brand-glow hover:shadow-brand-glow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5 fill-white/20" />
                <span>Solicitar Orçamento Grátis</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#servicos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-slate-200 hover:text-white bg-[#1C3675]/50 hover:bg-[#1C3675] border border-[#2E9BF0]/20 hover:border-[#2E9BF0]/50 transition-all duration-300"
              >
                <Wrench className="w-4 h-4 text-[#2E9BF0]" />
                <span>Ver Serviços</span>
              </a>
            </div>

            {/* Quick Contact Footer Bar inside Hero */}
            <div className="pt-6 border-t border-[#1C3675]/40 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div>
                <span className="block text-slate-500 uppercase tracking-wider text-[10px] font-bold">Endereço Técnico:</span>
                <span className="font-semibold text-slate-200">{companyData.address}</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-[#1C3675]"></div>
              <div>
                <span className="block text-slate-500 uppercase tracking-wider text-[10px] font-bold">Horário de Atendimento:</span>
                <span className="font-semibold text-slate-200">{companyData.days}, {companyData.hours}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Visual Card & Pure Water Illustration */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Main Card */}
              <div className="relative bg-gradient-to-b from-[#102761] to-[#08183F] border border-[#1C3675] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden group">
                
                {/* Diagonal brand accent line */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#3DBE6C]/30 via-[#2E9BF0]/20 to-transparent rounded-bl-full pointer-events-none"></div>

                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-gradient p-0.5 flex items-center justify-center shadow-md">
                      <div className="w-full h-full bg-[#0B1E4D] rounded-[10px] flex items-center justify-center">
                        <Droplet className="w-5 h-5 text-[#2E9BF0]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Fêrgon Assistência</h3>
                      <p className="text-xs text-[#2E9BF0]">Filtros & Refrigeração em Brasília</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-[#3DBE6C]/10 border border-[#3DBE6C]/30 text-[11px] font-bold text-[#3DBE6C]">
                    CLN 103
                  </span>
                </div>

                {/* Technical Service Points Feature Box */}
                <div className="bg-[#071333]/80 rounded-2xl p-5 border border-[#1C3675]/60 space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#2E9BF0]/10 text-[#2E9BF0]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Água 100% Pura e Sem Odor</h4>
                      <p className="text-xs text-slate-300 mt-0.5">Remoção de cloro, ferrugem e impurezas microscópicas com refis homologados.</p>
                    </div>
                  </div>

                  <div className="h-px bg-[#1C3675]/50"></div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#3DBE6C]/10 text-[#3DBE6C]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Refrigeração Rápida & Eficiente</h4>
                      <p className="text-xs text-slate-300 mt-0.5">Reparo de compressor, termostato e carga de gás refrigerante de alto rendimento.</p>
                    </div>
                  </div>
                </div>

                {/* Supported Brands Marquee Tag Cloud */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Marcas Atendidas:
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-xs font-semibold">
                    {['IBBL', 'Soft Everest', 'Europa', 'Consul', 'Electrolux', 'Latina', 'Colormaq', 'Lorenzetti'].map((brand) => (
                      <span
                        key={brand}
                        className="px-2.5 py-1 rounded-md bg-[#1C3675]/40 text-slate-200 border border-[#1C3675] hover:border-[#2E9BF0] hover:text-white transition-colors"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="mt-6 pt-4 border-t border-[#1C3675]/50 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#3DBE6C]"></span>
                    Atendimento Plano Piloto e todo DF
                  </span>
                  <a
                    href={`tel:${companyData.phoneRaw}`}
                    className="font-bold text-[#2E9BF0] hover:underline"
                  >
                    {companyData.phoneFormatted}
                  </a>
                </div>

              </div>

              {/* Decorative floating badge outside card */}
              <div className="absolute -bottom-5 -left-5 bg-[#0B1E4D] border border-[#2E9BF0]/40 rounded-2xl p-4 shadow-xl hidden sm:flex items-center gap-3 animate-float backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center text-white font-black text-sm">
                  100%
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Garantia Técnica</p>
                  <p className="text-[10px] text-slate-300">Peças & Mão de Obra</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
