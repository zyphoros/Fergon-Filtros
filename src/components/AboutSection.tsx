import React from 'react';
import { companyData } from '../data/content';
import { MapPin, Clock, Phone, Award, ShieldCheck, Instagram, ExternalLink, MessageSquare } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-[#0B1E4D] text-white relative overflow-hidden border-b border-[#1C3675]/60">
      
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E9BF0]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Visual Card / Storefront Presentation */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-[#102761] to-[#08183F] border border-[#1C3675] rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-gradient p-0.5 shadow-md">
                  <div className="w-full h-full bg-[#0B1E4D] rounded-[14px] flex items-center justify-center">
                    <Award className="w-6 h-6 text-[#2E9BF0]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">Fêrgon</h3>
                  <p className="text-xs text-[#3DBE6C] font-semibold">Filtros e Refrigeração • Plano Piloto</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Sediada estrategicamente no <strong className="text-white">Comércio Local Norte 103 (CLN 103)</strong>, a Fêrgon nasceu para oferecer um atendimento técnico humanizado, ágil e altamente especializado para famílias e empresas de Brasília.
              </p>

              {/* Info Details List */}
              <div className="space-y-4 bg-[#071333]/90 rounded-2xl p-5 border border-[#1C3675]/60 text-xs">
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#2E9BF0] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Localização em Brasília:</span>
                    <span className="text-slate-300">{companyData.fullAddress}</span>
                  </div>
                </div>

                <div className="h-px bg-[#1C3675]/50"></div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#3DBE6C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Horário de Funcionamento:</span>
                    <span className="text-slate-300">{companyData.days}, das {companyData.hours}</span>
                  </div>
                </div>

                <div className="h-px bg-[#1C3675]/50"></div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#2E9BF0] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Telefone / WhatsApp:</span>
                    <a href={`tel:${companyData.phoneRaw}`} className="text-[#2E9BF0] font-bold hover:underline">
                      {companyData.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="h-px bg-[#1C3675]/50"></div>

                <div className="flex items-start gap-3">
                  <Instagram className="w-4 h-4 text-[#3DBE6C] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Instagram Oficial:</span>
                    <a
                      href={companyData.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3DBE6C] font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>@fergonfiltros_refrigeracao</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={companyData.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-[#1C3675]/60 hover:bg-[#1C3675] border border-[#2E9BF0]/30 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#2E9BF0]" />
                  <span>Ver no Google Maps</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C3675]/60 border border-[#2E9BF0]/30 text-xs font-bold uppercase tracking-widest text-[#2E9BF0]">
              <ShieldCheck className="w-4 h-4 text-[#3DBE6C]" />
              <span>Tradição & Confiabilidade</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              A garantia de água verdadeiramente pura para a sua família
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Sabemos que a qualidade da água que você consome diariamente afeta diretamente a saúde, o bem-estar e a produtividade da sua rotina. Por isso, a <strong className="text-white">Fêrgon Filtros e Refrigeração</strong> atua com rigor técnico, utilizando refis certificados e componentes de alta durabilidade.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#071333] border border-[#1C3675] rounded-2xl p-5">
                <h4 className="font-bold text-white text-sm mb-1 text-[#2E9BF0]">
                  Água Pura e Sem Contaminantes
                </h4>
                <p className="text-xs text-slate-300">
                  Substituição periódica de elementos filtrantes com retenção de micropartículas e bactericida ativo.
                </p>
              </div>

              <div className="bg-[#071333] border border-[#1C3675] rounded-2xl p-5">
                <h4 className="font-bold text-white text-sm mb-1 text-[#3DBE6C]">
                  Refrigeração de Alta Performance
                </h4>
                <p className="text-xs text-slate-300">
                  Conserto de compressores e cargas de gás para manter a água gelada mesmo nos dias mais quentes.
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Atendemos no local em apartamentos, casas, escritórios comerciais, clínicas médicas, escolas e galpões industriais por todo o Plano Piloto, Asa Norte, Asa Sul, Noroeste, Sudoeste, Lago Norte, Lago Sul e demais Regiões Administrativas do Distrito Federal.
            </p>

            {/* CTA */}
            <div className="pt-2">
              <a
                href={`${companyData.whatsappUrl}?text=${encodeURIComponent('Olá! Gostaria de agendar uma visita técnica com a Fêrgon na minha residência ou empresa.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-gradient hover:opacity-95 shadow-brand-glow transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Agendar Atendimento Técnico</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
