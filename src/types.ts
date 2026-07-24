export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
  recommendedInterval?: string;
  badge?: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
  date: string;
  filterModel?: string;
}

export interface FilterBrand {
  name: string;
  category: string;
  models: string[];
}

export interface ContactFormData {
  name: string;
  phone: string;
  neighborhood: string;
  serviceType: string;
  filterBrand: string;
  message: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  subtitle: string;
  address: string;
  cityState: string;
  cep: string;
  fullAddress: string;
  phoneFormatted: string;
  phoneRaw: string;
  whatsappUrl: string;
  instagramUrl: string;
  mapsUrl: string;
  mapsEmbedIframe: string;
  hours: string;
  days: string;
  saturdayHours?: string;
  saturdayDays?: string;
}
