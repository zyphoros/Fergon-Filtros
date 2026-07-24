import React from 'react';
import { BrandLogo } from './BrandLogo';
import { companyData } from '../data/content';
import { MapPin, Phone, Clock, Instagram, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071333] text-slate-300 border-t border-[#1C3675]/80 pt-16 pb-12 relative overflow-hidden">
      
      {/* Top brand accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gradient"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1C3675]/60">

          {/* Col 1: Brand Info & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="md" />
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed pt-1">
              Assistência técnica especializada, higienização, manutenção preventiva e venda de filtros, purificadores e bebedouros residenciais e industriais em Brasília - DF.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0B1E4D] border border-[#1C3675] hover:border-[#3DBE6C] flex items-center justify-center text-slate-300 hover:text-[#3DBE6C] transition-colors"
                title="Instagram @fergonfiltros_refrigeracao"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={companyData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0B1E4D] border border-[#1C3675] hover:border-[#2E9BF0] flex items-center justify-center text-slate-300 hover:text-[#2E9BF0] transition-colors"
                title="Google Maps CLN 103"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#2E9BF0]">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#inicio" className="hover:text-white hover:underline transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white hover:underline transition-colors">Nossos Serviços</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white hover:underline transition-colors">Por Que Escolher a Fêrgon</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white hover:underline transition-colors">Sobre a Empresa</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white hover:underline transition-colors">Depoimentos de Clientes</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white hover:underline transition-colors">Contato & Localização</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#3DBE6C]">
              Atendimento em Brasília
            </h4>

            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#2E9BF0] flex-shrink-0 mt-0.5" />
                <span>{companyData.fullAddress}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#3DBE6C] flex-shrink-0" />
                <a href={`tel:${companyData.phoneRaw}`} className="font-bold text-white hover:underline">
                  {companyData.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#2E9BF0] flex-shrink-0" />
                <span>{companyData.days}, das {companyData.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Fêrgon Filtros e Refrigeração. Todos os direitos reservados.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B1E4D] border border-[#1C3675] text-slate-300 hover:text-white hover:border-[#2E9BF0] transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
