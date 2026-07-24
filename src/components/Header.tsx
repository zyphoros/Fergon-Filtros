import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { companyData } from '../data/content';
import { Phone, MapPin, Clock, MessageSquare, Menu, X, Instagram } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Por que a Fêrgon', href: '#diferenciais' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de falar com a Fêrgon sobre atendimento técnico ou orçamento para filtro/purificador.'
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar with quick info - desktop */}
      <div className="bg-[#071333] border-b border-[#1C3675]/50 text-xs text-slate-300 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#2E9BF0]" />
              <span>{companyData.address} - Asa Norte, Brasília - DF</span>
            </span>
            <span className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Clock className="w-3.5 h-3.5 text-[#3DBE6C]" />
              <span>Seg a Sex: {companyData.hours} | Sáb: {companyData.saturdayHours}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${companyData.phoneRaw}`}
              className="inline-flex items-center gap-1.5 hover:text-[#2E9BF0] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#2E9BF0]" />
              <span className="font-semibold">{companyData.phoneFormatted}</span>
            </a>
            <a
              href={companyData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#3DBE6C] transition-colors"
              title="Siga no Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-[#3DBE6C]" />
              <span>@fergonfiltros_refrigeracao</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1E4D]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#1C3675]/80'
            : 'bg-[#0B1E4D] py-4 border-b border-[#1C3675]/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="focus:outline-none">
            <BrandLogo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-[#2E9BF0] transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2E9BF0] to-[#3DBE6C] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Header Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`${companyData.whatsappUrl}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-brand-gradient hover:opacity-95 shadow-brand-glow hover:shadow-brand-glow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4 text-white fill-white/20" />
              <span>Fale no WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`${companyData.whatsappUrl}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 rounded-full bg-brand-gradient text-white shadow-md"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-[#1C3675]/50 focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay / drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#071333] border-b border-[#1C3675] px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-[#1C3675]/40 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#1C3675]/60 flex flex-col gap-3">
              <a
                href={`${companyData.whatsappUrl}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-brand-gradient shadow-brand-glow text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Fale no WhatsApp</span>
              </a>

              <div className="text-xs text-slate-400 space-y-1.5 pt-1 px-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#2E9BF0]" />
                  <span>{companyData.fullAddress}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#3DBE6C]" />
                  <span>{companyData.days}: {companyData.hours}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
