import { CompanyInfo, DifferentialItem, FilterBrand, ServiceItem, TestimonialItem } from '../types';

export const companyData: CompanyInfo = {
  name: 'Fêrgon',
  tagline: 'FILTROS E REFRIGERAÇÃO',
  subtitle: 'Assistência Técnica Especializada em Filtros, Purificadores e Bebedouros',
  address: 'CLN 309, Bloco B, Loja 36',
  cityState: 'Asa Norte, Brasília - DF',
  cep: '70755-520',
  fullAddress: 'CLN 309, Bloco B, Loja 36, Asa Norte, Brasília - DF, CEP 70755-520',
  phoneFormatted: '(61) 98204-9206',
  phoneRaw: '5561982049206',
  whatsappUrl: 'https://wa.me/5561982049206',
  instagramUrl: 'https://www.instagram.com/fergonfiltros_refrigeracao/',
  mapsUrl: 'https://www.google.com/maps/search/CLN+309+Bloco+B+Loja+36+Asa+Norte+Bras%C3%ADlia+DF+70755-520/@-15.7533,-47.8897,17z?hl=pt-BR',
  mapsEmbedIframe: 'https://maps.google.com/maps?q=CLN+309+Bloco+B+Loja+36+Asa+Norte+Bras%C3%ADlia+70755-520&hl=pt-BR&z=17&output=embed',
  hours: '08:30 às 17:30',
  days: 'Segunda a Sexta-feira',
};

export const servicesData: ServiceItem[] = [
  {
    id: 'venda-troca-refis',
    title: 'Venda e Reposição de Refis e Elementos Filtrantes',
    shortDesc: 'Refis originais e homologados para as principais marcas do mercado (IBBL, Soft Everest, Europa, Consul, Electrolux e mais).',
    fullDesc: 'O elemento filtrante é o coração do seu purificador. Fornecemos e substituímos refis com carvão ativado e prata coloidal, eliminando cloro, odores, sabão, barro e bactérias da sua água.',
    iconName: 'Filter',
    highlights: [
      'Refis originais e compatíveis de alta performance com selo Inmetro',
      'Eliminação comprovada de cloro e retenção de partículas classe A',
      'Troca rápida no local com desinfecção do reservatório',
      'Aviso e lembrete preventivo de próxima troca para clientes'
    ],
    recommendedInterval: 'Substituição recomendada a cada 6 meses',
    badge: 'Saúde Garantida'
  },
  {
    id: 'instalacao-manutencao',
    title: 'Instalação e Manutenção de Filtros',
    shortDesc: 'Instalação adequada com regulagem de pressão, conectores antifuga e suporte para linhas residenciais e industriais.',
    fullDesc: 'Realizamos a instalação completa e manutenção preventiva ou corretiva do seu filtro de água. Garantimos a fixação correta, ausência de vazamentos e ajuste ideal da vazão para o perfeito funcionamento.',
    iconName: 'Wrench',
    highlights: [
      'Instalação em pontos hidráulicos de cozinha, escritórios e indústrias',
      'Testes de pressão d\'água e estanqueidade',
      'Kits de fixação e mangueiras atóxicas de alta resistência',
      'Atendimento em toda Brasília e regiões administrativas'
    ],
    recommendedInterval: 'Revisão periódica a cada 6 a 12 meses',
    badge: 'Mais Solicitado'
  },
  {
    id: 'manutencao-bebedouros-purificadores',
    title: 'Manutenção de Bebedouros e Purificadores',
    shortDesc: 'Conserto do sistema de refrigeração, troca de compressor, carga de gás ecológico e regulagem de termostato.',
    fullDesc: 'Seu purificador não está gelando ou apresenta barulho estranho? Nossa equipe especializada em refrigeração faz o diagnóstico rápido, troca de gás ecológico R134a, reparo do termostato e substituição do motor compressor com garantia.',
    iconName: 'ThermometerSnowflake',
    highlights: [
      'Recarga de gás refrigerante e reparo de micro-vazamentos',
      'Troca e regulagem de termostatos e relés de partida',
      'Reparo de placas eletrônicas e sensores de temperatura',
      'Assistência para bebedouros de coluna, bancada e industriais'
    ],
    recommendedInterval: 'Diagnóstico imediato aos primeiros sinais de aquecimento',
    badge: 'Especialidade Técnica'
  },
  {
    id: 'higienizacao-sanitizacao',
    title: 'Higienização e Sanitização Profissional',
    shortDesc: 'Limpeza profunda do reservatório de água e tubulações internas com produtos bactericidas alimentícios atóxicos.',
    fullDesc: 'Com o tempo, biofilmes e resíduos podem se acumular nas tubulações internas do seu equipamento. Nossa sanitização elimina 99,9% de germes, algas e fungos, devolvendo o sabor puro e cristalino da sua água.',
    iconName: 'Sparkles',
    highlights: [
      'Desinfecção com solução atóxica homologada pela vigilância sanitária',
      'Remoção de incrustações e limo nos reservatórios internos',
      'Limpeza de bicos dosadores e torneiras',
      'Ideal para residências, clínicas, academias e empresas'
    ],
    badge: 'Proteção Máxima'
  },
  {
    id: 'diagnostico-visita-preventiva',
    title: 'Diagnóstico Técnico e Visita Preventiva',
    shortDesc: 'Avaliação presencial em seu endereço em Brasília para identificar vazamentos, perda de pressão ou falha elétrica.',
    fullDesc: 'Agende uma visita técnica especializada em sua residência ou empresa. Nosso técnico avalia todo o sistema hidráulico e elétrico do purificador com transparência e orçamento sem surpresas.',
    iconName: 'ShieldCheck',
    highlights: [
      'Verificação completa da vazão e qualidade de filtragem',
      'Análise de ruídos no compressor e consumo de energia',
      'Orçamento claro antes da execução de qualquer reparo',
      'Atendimento agendado no horário mais conveniente para você'
    ]
  }
];

export const differentialsData: DifferentialItem[] = [
  {
    id: 'tecnicos-qualificados',
    title: 'Técnicos Qualificados',
    description: 'Profissionais experientes treinados em refrigeração e sistemas hidráulicos de purificação de água.',
    iconName: 'Award'
  },
  {
    id: 'atendimento-rapido',
    title: 'Atendimento Rápido em Brasília',
    description: 'Agilidade na visita técnica no Plano Piloto e demais regiões do DF, direto no seu endereço.',
    iconName: 'Clock'
  },
  {
    id: 'pecas-originais',
    title: 'Peças & Refis Originais',
    description: 'Trabalhamos exclusivamente com componentes homologados e elementos filtrantes com certificação Inmetro.',
    iconName: 'CheckCircle2'
  },
  {
    id: 'garantia-servico',
    title: 'Garantia do Serviço',
    description: 'Total transparência, orçamento sem compromisso e garantia formal em todos os serviços e peças aplicadas.',
    iconName: 'Shield'
  }
];

export const brandsData: FilterBrand[] = [
  { name: 'IBBL', category: 'Purificadores e Bebedouros', models: ['Imaginare', 'Evolux', 'FR600', 'BDF', 'Mio', 'Due'] },
  { name: 'Soft Everest', category: 'Purificadores Refrigerados', models: ['Soft Fit', 'Soft Slim', 'Soft Star', 'Soft Baby', 'Soft Plus'] },
  { name: 'Europa', category: 'Filtros e Purificadores', models: ['Da Vinci', 'Palladium', 'Blubox', 'Noblesse', 'Summer'] },
  { name: 'Consul', category: 'Purificadores de Água', models: ['CPB36', 'CPB34', 'CPC31', 'CPC30', 'CPB35'] },
  { name: 'Electrolux', category: 'Purificadores de Bancada', models: ['PE12B', 'PE11B', 'PA21G', 'PE11X', 'PC41B'] },
  { name: 'Latina', category: 'Bebedouros e Purificadores', models: ['PA335', 'PN555', 'Aquaplus', 'Vitamax'] },
  { name: 'Colormaq', category: 'Purificadores e Bebedouros', models: ['Premium', 'Acqua', 'CPUHF'] },
  { name: 'Lorenzetti', category: 'Filtros de Água', models: ['Acqua Bella', 'Giovanna', 'Naturalis'] },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    name: 'Dr. Roberto Mendonça',
    role: 'Cliente Residencial',
    location: 'Plano Piloto - Brasília',
    comment: 'Atendimento impecável! O técnico chegou no horário combinado no Plano Piloto, fez a substituição do refil do meu purificador Soft Everest e a sanitização do reservatório. A água voltou a ficar extremamente pura e geladinha.',
    rating: 5,
    date: 'Junho de 2026',
    filterModel: 'Soft Everest'
  },
  {
    id: '2',
    name: 'Patrícia Alencar',
    role: 'Gestora de Clínica Médica',
    location: 'Lago Norte - DF',
    comment: 'A Fêrgon cuida dos bebedouros da nossa clínica há mais de 2 anos. Sempre pontuais, atenciosos e usam peças originais IBBL. Excelente suporte técnico para empresas!',
    rating: 5,
    date: 'Maio de 2026',
    filterModel: 'IBBL Industrial'
  },
  {
    id: '3',
    name: 'Gustavo Silveira',
    role: 'Cliente Residencial',
    location: 'Sudoeste - Brasília',
    comment: 'Meu purificador Consul parou de gelar repentinamente. O diagnóstico da Fêrgon foi rápido e resolveram a troca do termostato e recarga de gás no mesmo dia. Preço justo e equipe transparente!',
    rating: 5,
    date: 'Julho de 2026',
    filterModel: 'Consul CPB36'
  }
];

export const faqsData = [
  {
    question: 'De quanto em quanto tempo devo trocar o refil do meu purificador?',
    answer: 'A recomendação geral dos fabricantes e órgãos de saúde é trocar o refil a cada 6 meses ou a cada 3.000 a 4.000 litros de água filtrada. Se notar diminuição no fluxo de água, alteração no sabor ou odor, a troca deve ser antecipada.'
  },
  {
    question: 'Vocês atendem em todas as quadras da Asa Norte, Plano Piloto e de Brasília?',
    answer: 'Sim! Nossa sede fica na CLN 309, Bloco B, Loja 36 (Asa Norte), e atendemos prontamente toda a Asa Norte, Plano Piloto, Asa Sul, Lago Norte, Lago Sul, Sudoeste, Noroeste, Águas Claras, Guará, Taguatinga e demais regiões do Distrito Federal.'
  },
  {
    question: 'Quais marcas de purificadores vocês consertam e vendem refil?',
    answer: 'Trabalhamos com praticamente todas as marcas consagradas do mercado: IBBL, Soft Everest, Europa, Consul, Electrolux, Latina, Colormaq, Lorenzetti, Libell, Libell e marcas industriais.'
  },
  {
    question: 'Por que o purificador para de gelar a água?',
    answer: 'A falta de refrigeração pode ser causada por vazamento do gás refrigerante, falha no termostato, defeito no relé de partida ou no próprio compressor elétrico. Nossos técnicos realizam o teste de pressão e eletricidade para corrigir a falha no local.'
  }
];
