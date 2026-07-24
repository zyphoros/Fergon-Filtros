import React, { useState } from 'react';
import { servicesData, companyData } from '../data/content';
import { ServiceItem } from '../types';
import {
  Wrench,
  Filter,
  ThermometerSnowflake,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Clock,
  X,
  Droplets
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Icon mapping
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-white" />;
      case 'Filter':
        return <Filter className="w-6 h-6 text-white" />;
      case 'ThermometerSnowflake':
        return <ThermometerSnowflake className="w-6 h-6 text-white" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-white" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-white" />;
      default:
        return <Droplets className="w-6 h-6 text-white" />;
    }
  };

  const getWhatsAppServiceLink = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento para o serviço: *${serviceTitle}*. Meu endereço fica em Brasília.`
    );
    return `${companyData.whatsappUrl}?text=${text}`;
  };

  return (
    <section id="servicos" className="py-20 bg-[#F5F7FA] text-[#0B1E4D] relative overflow-hidden">
      {/* Background graphic subtle elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-brand-gradient"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1E4D]/10 border border-[#0B1E4D]/20 text-xs font-bold uppercase tracking-widest text-[#0B1E4D]">
            <Droplets className="w-4 h-4 text-[#2E9BF0]" />
            <span>Nossos Serviços Especializados</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1E4D] tracking-tight">
            Soluções completas para a sua água
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Da troca de refil ao conserto do sistema de refrigeração: atendemos residências, escritórios, clínicas e indústrias na Asa Norte e região de Brasília.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Badge top right */}
              {service.badge && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#2E9BF0]/15 to-[#3DBE6C]/15 text-[#0B1E4D] border border-[#2E9BF0]/30">
                  {service.badge}
                </div>
              )}

              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-brand-gradient p-0.5 shadow-md mb-6 inline-block group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-[#0B1E4D] rounded-[14px] flex items-center justify-center">
                    {renderIcon(service.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0B1E4D] mb-3 group-hover:text-[#2E9BF0] transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-5 leading-relaxed font-normal">
                  {service.shortDesc}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 mb-6">
                  {service.highlights.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#3DBE6C] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                {service.recommendedInterval && (
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-[#2E9BF0]" />
                    <span>{service.recommendedInterval}</span>
                  </div>
                )}

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={getWhatsAppServiceLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-brand-gradient hover:opacity-95 shadow-sm transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Orçar no WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="px-3 py-2.5 rounded-xl text-xs font-semibold text-[#0B1E4D] bg-slate-100 hover:bg-slate-200 transition-colors"
                    title="Mais detalhes"
                  >
                    Detalhes
                  </button>
                </div>
              </div>

            </div>
          ))}

          {/* Special Custom Request Card */}
          <div className="bg-gradient-to-br from-[#0B1E4D] to-[#071333] rounded-2xl p-7 text-white shadow-xl flex flex-col justify-between relative overflow-hidden border border-[#1C3675]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2E9BF0]/10 rounded-full blur-2xl"></div>
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#2E9BF0]/20 flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-[#2E9BF0]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Outro modelo ou problema técnico?</h3>
              <p className="text-sm text-slate-300 mb-6">
                Possui bebedouro industrial, sistema filtrante sob medida ou precisa de peças específicas? Fale diretamente com o nosso técnico especialista na Asa Norte.
              </p>
            </div>

            <a
              href={`${companyData.whatsappUrl}?text=${encodeURIComponent('Olá! Preciso de ajuda com um modelo ou problema específico no meu purificador de água.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-[#0B1E4D] bg-white hover:bg-slate-100 transition-colors shadow-lg"
            >
              <span>Falar com Técnico no Whats</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Modal for Detailed Service View */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-[#0B1E4D] border border-slate-200">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-gradient p-0.5">
                <div className="w-full h-full bg-[#0B1E4D] rounded-[10px] flex items-center justify-center">
                  {renderIcon(selectedService.iconName)}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1E4D]">{selectedService.title}</h3>
                <span className="text-xs text-[#2E9BF0] font-semibold">Atendimento Fêrgon - Brasília DF</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-200/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                O que está incluso neste serviço:
              </h4>
              <ul className="space-y-2">
                {selectedService.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#3DBE6C] flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppServiceLink(selectedService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-brand-gradient shadow-brand-glow text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Solicitar este serviço agora</span>
              </a>

              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
