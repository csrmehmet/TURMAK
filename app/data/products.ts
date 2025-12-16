export interface Product {
  id: number;
  name: string;
  description: string;
  price?: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Endüstriyel Konveyör Sistemi",
    description: "Yüksek dayanımlı otomatik taşıma hattı taşıma hattı.",
    price: 125000,
    image: "/images/indir.jpg",
  },
  {
    id: 2,
    name: "CNC İşleme Makinesi",
    description: "Kesme ve şekillendirme için hassas CNC tezgahı.",
    price: 240000,
    image: "/images/indir (2).jpg",
  },
  {
    id: 3,
    name: "Otomasyon Kontrol Paneli",
    description: "PLC sistemleri için profesyonel kontrol paneli.",
    price: 38000,
    image: "/images/indir (3).jpg",
  },
];
