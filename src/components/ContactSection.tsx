import React, { useState } from 'react';
import { companyData } from '../data/content';
import { ContactFormData } from '../types';
import { MapPin, Phone, Clock, MessageSquare, Instagram, Send, CheckCircle2, ExternalLink, Navigation } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    neighborhood: 'Plano Piloto',
    serviceType: 'Troca de Refil / Elemento Filtrante',
    filterBrand: 'Soft Everest',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct pre-formatted WhatsApp text from form submission
    const messageText = `*Solicitação de Atendimento via Site Fêrgon*
👤 *Nome:* ${formData.name}
📞 *Telefone:* ${formData.phone}
📍 *Bairro/Local:* ${formData.neighborhood}
🔧 *Serviço:* ${formData.serviceType}
💧 *Marca/Modelo:* ${formData.filterBrand}
💬 *Mensagem:* ${formData.message || 'Gostaria de agendar um orçamento.'}`;

    const encoded = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/5561982049206?text=${encoded}`;

    setSubmitted(true);
    
    // Open WhatsApp after brief delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <section id="contato" className="py-20 bg-[#071333] text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#2E9BF0]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C3675]/60 border border-[#2E9BF0]/30 text-xs font-bold uppercase tracking-widest text-[#2E9BF0]">
            <Phone className="w-4 h-4 text-[#3DBE6C]" />
            <span>Fale com Nossa Equipe</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Entre em Contato ou Solicite um Orçamento
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Estamos localizados na Asa Norte (CLN 309, Bloco B, Loja 36) e prontos para atender você em todo o Distrito Federal.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Contact Info & Map Link */}
          <div className="lg:col-span-5 space-y-6">

            {/* Address & Hours Box */}
            <div className="bg-gradient-to-b from-[#102761] to-[#08183F] border border-[#1C3675] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              <h3 className="text-xl font-bold text-white border-b border-[#1C3675]/80 pb-4">
                Informações de Atendimento
              </h3>

              <div className="space-y-5 text-sm">

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#2E9BF0]/15 text-[#2E9BF0] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block text-xs uppercase tracking-wider text-slate-400">
                      Endereço da Loja / Oficina:
                    </span>
                    <p className="text-slate-200 mt-0.5 font-medium leading-snug">
                      {companyData.fullAddress}
                    </p>
                    <a
                      href={companyData.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E9BF0] hover:underline mt-1.5"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Abrir Rota no Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#3DBE6C]/15 text-[#3DBE6C] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block text-xs uppercase tracking-wider text-slate-400">
                      Telefone & WhatsApp:
                    </span>
                    <a
                      href={`https://wa.me/${companyData.phoneRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-extrabold text-[#3DBE6C] hover:underline block mt-0.5"
                    >
                      {companyData.phoneFormatted}
                    </a>
                    <span className="text-[11px] text-slate-400">Atendimento rápido no WhatsApp</span>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#2E9BF0]/15 text-[#2E9BF0] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block text-xs uppercase tracking-wider text-slate-400">
                      Horário de Funcionamento:
                    </span>
                    <p className="text-slate-200 font-semibold mt-0.5">
                      {companyData.days}
                    </p>
                    <p className="text-xs text-[#3DBE6C] font-bold">
                      Das {companyData.hours}
                    </p>
                  </div>
                </div>

                {/* Instagram Social */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-[#1C3675]/60">
                  <div className="p-2.5 rounded-xl bg-pink-500/15 text-pink-400 flex-shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-white block text-xs uppercase tracking-wider text-slate-400">
                      Instagram Oficial:
                    </span>
                    <a
                      href={companyData.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-pink-400 hover:underline inline-flex items-center gap-1 mt-0.5"
                    >
                      <span>@fergonfiltros_refrigeracao</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Big direct WhatsApp CTA Button */}
              <a
                href={`https://wa.me/5561982049206?text=${encodeURIComponent('Ol%C3%A1!%20Vim%20pelo%20site%20da%20F%C3%AArgon%20e%20gostaria%20de%20falar%20com%20o%20atendimento.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-sm font-bold text-white bg-brand-gradient hover:opacity-95 shadow-brand-glow hover:shadow-brand-glow-lg transition-all text-center"
              >
                <MessageSquare className="w-5 h-5 fill-white/20" />
                <span>Conversar Agora no WhatsApp</span>
              </a>

            </div>

          </div>

          {/* Right Column: Contact Form & Embedded Map */}
          <div className="lg:col-span-7 space-y-8">

            {/* Interactive Form */}
            <div className="bg-[#0B1E4D] border border-[#1C3675] rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-2">
                Solicite seu Orçamento Sem Compromisso
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Preencha os dados abaixo e o formulário abrirá a mensagem preenchida diretamente no seu WhatsApp para atendimento imediato.
              </p>

              {submitted && (
                <div className="bg-[#3DBE6C]/15 border border-[#3DBE6C]/40 rounded-xl p-4 mb-6 flex items-center gap-3 text-xs text-[#3DBE6C] font-bold animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Redirecionando para o WhatsApp da Fêrgon Filtros...</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Seu Nome:
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Ex: Maria Silva"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#071333] border border-[#1C3675] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2E9BF0] transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Telefone / WhatsApp:
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(61) 90000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#071333] border border-[#1C3675] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2E9BF0] transition-colors"
                    />
                  </div>

                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  
                  {/* Neighborhood */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Bairro / Região (DF):
                    </label>
                    <input
                      type="text"
                      name="neighborhood"
                      required
                      placeholder="Ex: Plano Piloto"
                      value={formData.neighborhood}
                      onChange={handleChange}
                      className="w-full bg-[#071333] border border-[#1C3675] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2E9BF0] transition-colors"
                    />
                  </div>

                  {/* Service Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Tipo de Serviço:
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full bg-[#071333] border border-[#1C3675] rounded-xl px-3 py-3 text-xs font-semibold text-white focus:outline-none focus:border-[#2E9BF0] transition-colors"
                    >
                      <option value="Troca de Refil / Elemento Filtrante">Troca de Refil</option>
                      <option value="Instalação de Purificador">Instalação</option>
                      <option value="Manutenção em Refrigeração / Não gela">Manutenção (Não Gela)</option>
                      <option value="Higienização e Sanitização">Higienização</option>
                      <option value="Conserto de Vazamento">Conserto de Vazamento</option>
                      <option value="Manutenção em Bebedouro Industrial">Bebedouro Industrial</option>
                      <option value="Outro assunto">Outro assunto</option>
                    </select>
                  </div>

                  {/* Filter Brand */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      Marca / Modelo:
                    </label>
                    <select
                      name="filterBrand"
                      value={formData.filterBrand}
                      onChange={handleChange}
                      className="w-full bg-[#071333] border border-[#1C3675] rounded-xl px-3 py-3 text-xs font-semibold text-white focus:outline-none focus:border-[#2E9BF0] transition-colors"
                    >
                      <option value="Soft Everest">Soft Everest</option>
                      <option value="IBBL">IBBL</option>
                      <option value="Europa">Europa</option>
                      <option value="Consul">Consul</option>
                      <option value="Electrolux">Electrolux</option>
                      <option value="Latina">Latina</option>
                      <option value="Colormaq">Colormaq</option>
                      <option value="Lorenzetti">Lorenzetti</option>
                      <option value="Não sei / Outra marca">Não sei / Outra</option>
                    </select>
                  </div>

                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Observações / Detalhes (Opcional):
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Descreva brevemente o problema ou dúvida..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#071333] border border-[#1C3675] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2E9BF0] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white bg-brand-gradient hover:opacity-95 shadow-brand-glow transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Pedido de Orçamento via WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Embedded Google Maps Container */}
            <div className="bg-[#0B1E4D] border border-[#1C3675] rounded-3xl p-4 shadow-xl space-y-3">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#2E9BF0]" />
                  Localização da Fêrgon no Google Maps (CLN 309 - Asa Norte, Brasília)
                </span>
                <a
                  href={companyData.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#2E9BF0] hover:underline font-bold"
                >
                  Abrir Mapa
                </a>
              </div>

              {/* Map Iframe */}
              <div className="w-full h-64 rounded-2xl overflow-hidden border border-[#1C3675]/80 bg-[#071333]">
                <iframe
                  title="Fêrgon Filtros e Refrigeração Google Maps"
                  src={companyData.mapsEmbedIframe}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
