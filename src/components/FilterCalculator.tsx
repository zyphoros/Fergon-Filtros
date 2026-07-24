import React, { useState } from 'react';
import { companyData } from '../data/content';
import { Calculator, Calendar, Droplet, MessageSquare, AlertTriangle, CheckCircle } from 'lucide-react';

export const FilterCalculator: React.FC = () => {
  const [peopleCount, setPeopleCount] = useState<string>('3-5');
  const [filterBrand, setFilterBrand] = useState<string>('Soft Everest');
  const [lastChangeMonths, setLastChangeMonths] = useState<number>(6);

  // Calculation logic
  const getMonthsRecommendation = () => {
    if (peopleCount === '1-2') return 9;
    if (peopleCount === '3-5') return 6;
    if (peopleCount === '6+') return 4;
    return 3; // Empresa
  };

  const recMonths = getMonthsRecommendation();
  const isOverdue = lastChangeMonths >= recMonths;

  const whatsappCalculatorMsg = encodeURIComponent(
    `Olá Fêrgon! Usei a calculadora do site. Tenho um filtro/purificador *${filterBrand}*, com consumo para *${peopleCount} pessoas*, e troquei o refil há *${lastChangeMonths} meses*. Gostaria de cotar um refil novo com instalação.`
  );

  return (
    <section className="py-16 bg-[#071333] text-white relative overflow-hidden border-b border-[#1C3675]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="bg-gradient-to-br from-[#0B1E4D] via-[#102761] to-[#08183F] border border-[#1C3675] rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">

            {/* Left Column: Form Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E9BF0]/15 border border-[#2E9BF0]/30 text-xs font-bold text-[#2E9BF0] mb-3">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Guia Interativo de Manutenção</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Quando devo trocar o refil do meu purificador?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Selecione o perfil de uso da sua casa ou empresa e descubra o intervalo recomendado para manter sua água 100% livre de cloro e bactérias.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                
                {/* Field 1: Brand */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Marca do Purificador:
                  </label>
                  <select
                    value={filterBrand}
                    onChange={(e) => setFilterBrand(e.target.value)}
                    className="w-full bg-[#071333] border border-[#1C3675] rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-[#2E9BF0] transition-colors"
                  >
                    <option value="Soft Everest">Soft Everest</option>
                    <option value="IBBL">IBBL</option>
                    <option value="Europa">Europa</option>
                    <option value="Consul">Consul</option>
                    <option value="Electrolux">Electrolux</option>
                    <option value="Latina">Latina</option>
                    <option value="Colormaq">Colormaq</option>
                    <option value="Lorenzetti">Lorenzetti</option>
                    <option value="Outras Marcas">Outra Marca</option>
                  </select>
                </div>

                {/* Field 2: People Count */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                    Volume de Pessoas / Perto de Uso:
                  </label>
                  <select
                    value={peopleCount}
                    onChange={(e) => setPeopleCount(e.target.value)}
                    className="w-full bg-[#071333] border border-[#1C3675] rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white focus:outline-none focus:border-[#2E9BF0] transition-colors"
                  >
                    <option value="1-2">1 a 2 pessoas (Residencial baixo)</option>
                    <option value="3-5">3 a 5 pessoas (Residencial padrão)</option>
                    <option value="6+">6+ pessoas (Família grande / Escritório)</option>
                    <option value="Empresa 20+">Empresa / Clínica / Academia (20+)</option>
                  </select>
                </div>

              </div>

              {/* Slider: Months since last change */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-300 uppercase tracking-wider">
                    Há quanto tempo não troca o refil?
                  </span>
                  <span className="text-[#2E9BF0] text-sm font-black">
                    {lastChangeMonths} {lastChangeMonths === 1 ? 'mês' : 'meses'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={lastChangeMonths}
                  onChange={(e) => setLastChangeMonths(parseInt(e.target.value))}
                  className="w-full accent-[#2E9BF0] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>1 mês</span>
                  <span>6 meses</span>
                  <span>12 meses</span>
                  <span>24 meses</span>
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Recommendation Display */}
            <div className="lg:col-span-5 bg-[#071333] border border-[#1C3675] rounded-2xl p-6 relative overflow-hidden shadow-xl">
              
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-[#2E9BF0]" />
                <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider">
                  Diagnóstico de Troca
                </h4>
              </div>

              {/* Result Status */}
              {isOverdue ? (
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-5 flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-amber-300 text-sm">Troca Recomendada Urgente!</h5>
                    <p className="text-xs text-slate-300 mt-1">
                      Seu refil já ultrapassou o período ideal de retenção. O carvão ativado pode estar saturado, reduzindo a capacidade de retenção de microorganismos.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-[#3DBE6C]/10 border border-[#3DBE6C]/30 rounded-xl p-4 mb-5 flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#3DBE6C] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-[#3DBE6C] text-sm">Refil Dentro do Prazo</h5>
                    <p className="text-xs text-slate-300 mt-1">
                      Com base no seu perfil, o intervalo máximo ideal de troca é a cada <strong className="text-white">{recMonths} meses</strong>. Fique atento a alterações no gosto da água.
                    </p>
                  </div>
                </div>
              )}

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs mb-6">
                <div className="bg-[#0B1E4D] p-3 rounded-xl border border-[#1C3675]/80">
                  <span className="text-slate-400 block text-[10px]">Periodicidade Ideal:</span>
                  <span className="font-extrabold text-[#2E9BF0] text-sm">A cada {recMonths} meses</span>
                </div>
                <div className="bg-[#0B1E4D] p-3 rounded-xl border border-[#1C3675]/80">
                  <span className="text-slate-400 block text-[10px]">Marca Selecionada:</span>
                  <span className="font-extrabold text-white text-sm">{filterBrand}</span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={`${companyData.whatsappUrl}?text=${whatsappCalculatorMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-gradient hover:opacity-95 shadow-brand-glow transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Solicitar Troca de Refil Fêrgon</span>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
