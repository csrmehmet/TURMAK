import type { Route } from "./+types/hakkimizda";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hakkımızda | Turmak Makine" },
    { name: "description", content: "Turmak Makine kurumsal değerleri ve Gaziantep merkezli endüstriyel çözümleri." },
  ];
}

export default function HakkimizdaPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* 1. ÜST BÖLÜM - Boşluklar daraltıldı */}
      <section className="relative py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Turmak Makine
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-snug">
            Geleceğin endüstriyel çözümlerini bugünden inşa ediyoruz. 
            Gaziantep'ten dünyaya teknoloji taşıyoruz.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1.5 w-16 bg-[#f6a732] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 2. BİZ KİMİZ - Metin ve Görsel daha sıkı ve çarpıcı */}
      <section className="pb-16 pt-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Metin Alanı */}
            <div className="lg:w-1/2 space-y-5">
              <div>
                <span className="text-[#f6a732] font-bold tracking-widest uppercase text-xs px-2 py-1 bg-[#f6a732]/10 rounded-md">Biz Kimiz?</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-3">
                  Güvenilir Çözüm Ortağınız
                </h2>
              </div>
              <p className="text-gray-600 text-md leading-relaxed">
                Turmak Makine olarak Gaziantep merkezli üretim tesislerimizde, endüstriyel makine imalatı 
                ve otomasyon sistemleri alanında uzmanlaşıyoruz. Her projemizde verimliliği, 
                dayanıklılığı ve yenilikçi mühendisliği esas alıyoruz.
              </p>
              
              {/* İstatistikler - Daha kompakt */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#0078bd]">
                  <span className="block text-2xl font-bold text-[#0078bd]">10+</span>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-tighter">Yıllık Tecrübe</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#f6a732]">
                  <span className="block text-2xl font-bold text-[#f6a732]">100+</span>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-tighter">Mutlu Müşteri</span>
                </div>
              </div>
            </div>

            {/* Görsel Alanı - Daha şık ve boşluksuz */}
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#0078bd]/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#f6a732]/10 rounded-full blur-3xl animate-pulse"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="/images/anahtar.jpg" 
                  alt="Turmak Makine Atölye" 
                  className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. İLKELERİMİZ - Yumuşak Geçişli ve Dinamik */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 -z-10" />

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">İlkelerimiz</h2>
            <div className="h-1 w-12 bg-[#f6a732] mx-auto mt-3 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Vizyon */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#0078bd] hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-[#0078bd]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#0078bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Vizyon</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Teknolojik gelişmeleri üretimin her aşamasına entegre ederek, makine sektöründe küresel bir oyuncu olmak.
              </p>
            </div>

            {/* Misyon */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#f6a732] hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-[#f6a732]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#f6a732]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Misyon</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Müşterilerimizin ihtiyaçlarına özel, yüksek kaliteli ve sürdürülebilir otomasyon çözümleri sunmak.
              </p>
            </div>

            {/* Değerler */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-gray-800 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Değerler</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Şeffaflık, dürüstlük ve sürekli gelişim ilkeleriyle sektörde güvenin simgesi olmayı sürdürüyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}