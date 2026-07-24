import React, { useState } from 'react';
import { companyData } from '../data/content';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  const whatsappUrl = `https://wa.me/${companyData.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de falar com a Fêrgon sobre filtro/purificador de água.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      
      {/* Tooltip message box */}
      {tooltipVisible && (
        <div className="relative bg-white text-[#0B1E4D] border border-slate-200 shadow-xl rounded-2xl p-3 max-w-xs text-xs font-semibold animate-fadeIn flex items-start gap-2">
          <button
            onClick={() => setTooltipVisible(false)}
            className="text-slate-400 hover:text-slate-600 transition-colors p-0.5"
            aria-label="Fechar recado"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div>
            <span className="block font-bold text-slate-800">Precisa de ajuda com seu filtro?</span>
            <span className="text-[11px] text-slate-600 font-normal">
              Fale com nosso técnico em Brasília no WhatsApp!
            </span>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-brand-gradient text-white shadow-brand-glow-lg hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Atendimento no WhatsApp"
      >
        {/* Animated pulse ping */}
        <span className="absolute inset-0 rounded-full bg-[#3DBE6C] opacity-75 animate-ping pointer-events-none"></span>

        <MessageSquare className="w-7 h-7 fill-white/20 relative z-10" />
      </a>

    </div>
  );
};
