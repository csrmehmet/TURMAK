export interface Service {
  id: number;
  title: string;
  description: string;
  slug: string;
  icon?: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Makine Bakım ve Onarım",
    description: "Endüstriyel makineler için profesyonel bakım ve onarım hizmetleri.",
    slug: "makine-bakim",
    icon: "🛠️",
  },
  {
    id: 2,
    title: "Üretim Hattı Kurulumu",
    description: "Fabrika ve tesisler için üretim hattı planlama ve kurulum çözümleri.",
    slug: "uretim-hatti",
    icon: "🏭",
  },
  {
    id: 3,
    title: "Teknik Destek ve Danışmanlık",
    description: "Uzman ekibimizle teknik danışmanlık ve yerinde destek hizmeti.",
    slug: "teknik-destek",
    icon: "📞",
  },
];
