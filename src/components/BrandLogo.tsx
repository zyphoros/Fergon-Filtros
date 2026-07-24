import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'header';
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'header',
  size = 'md',
}) => {
  const isLightBg = variant === 'light';

  // Sizing mapping
  const dropSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const titleSize = size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-3xl' : 'text-2xl';
  const subtitleSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-[11px]' : 'text-[10px]';

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Organic fluid water drop symbol with brand diagonal gradient #2E9BF0 -> #3DBE6C */}
      <div className={`relative ${dropSize} flex-shrink-0 flex items-center justify-center`}>
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2E9BF0] to-[#3DBE6C] rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-none rotate-45 opacity-30 blur-sm group-hover:opacity-70 transition-opacity duration-300"></div>

        {/* Outer drop container */}
        <div className="relative w-full h-full bg-gradient-to-tr from-[#2E9BF0] to-[#3DBE6C] rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-none rotate-45 p-[2px] shadow-md transition-transform duration-300 group-hover:scale-105">
          <div className="w-full h-full bg-[#0B1E4D] rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-none flex items-center justify-center">
            {/* Inner drop icon core */}
            <svg
              className="-rotate-45 w-3/5 h-3/5 text-[#2E9BF0] group-hover:text-[#3DBE6C] transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Typography: Fêrgon + FILTROS E REFRIGERAÇÃO */}
      <div className="flex flex-col">
        <span
          className={`font-black tracking-tight ${titleSize} leading-none ${
            isLightBg ? 'text-[#0B1E4D]' : 'text-white'
          }`}
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Fêrgon
        </span>
        <span
          className={`font-bold uppercase tracking-[0.22em] ${subtitleSize} leading-tight mt-1 ${
            isLightBg ? 'text-[#1C3675]' : 'text-[#2E9BF0]'
          }`}
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Filtros e Refrigeração
        </span>
      </div>
    </div>
  );
};
