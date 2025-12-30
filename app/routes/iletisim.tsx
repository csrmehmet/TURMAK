import type { Route } from "./+types/iletisim";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "İletişim | Turmak Makine" },
    { name: "description", content: "Turmak Makine Gaziantep iletişim bilgileri, konum ve e-posta." },
  ];
}

export default function IletisimPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* BAŞLIK BÖLÜMÜ KALDIRILDI - DİREKT İÇERİĞE GEÇİŞ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            
            {/* SOL TARAF: Bilgi Kartları */}
            <div className="lg:w-5/12 w-full space-y-6">
              
              <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">İletişim Bilgileri</h2>

              {/* Adres Kartı */}
              <div className="group p-7 bg-white rounded-[2rem] shadow-sm border border-gray-100 border-l-8 border-[#0078bd] hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0078bd]/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#0078bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#0078bd] uppercase tracking-widest mb-1">Adresimiz</h3>
                    <p className="text-gray-700 font-medium leading-relaxed">
                      Sanayi Mahallesi, 60214 Nolu Cadde No: 15 <br />
                      Şehitkamil / Gaziantep
                    </p>
                  </div>
                </div>
              </div>

              {/* Telefon Kartı */}
              <div className="group p-7 bg-white rounded-[2rem] shadow-sm border border-gray-100 border-l-8 border-[#f6a732] hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f6a732]/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#f6a732]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#f6a732] uppercase tracking-widest mb-1">Bizi Arayın</h3>
                    <div className="space-y-1">
                      <a href="tel:+905458262928" className="text-xl font-bold text-gray-900 block hover:text-[#0078bd] transition">+90 545 826 29 28</a>
                      <a href="tel:+905358224792" className="text-xl font-bold text-gray-900 block hover:text-[#0078bd] transition">+90 535 822 47 92</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mail Kartı - Siyah şerit kaldırıldı, mavi tonlara çekildi */}
              <div className="group p-7 bg-white rounded-[2rem] shadow-sm border border-gray-100 border-l-8 border-[#0078bd] hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0078bd]/5 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#0078bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#0078bd] uppercase tracking-widest mb-1">E-Posta</h3>
                    <a href="mailto:info@turmakisi.com.tr" className="text-xl font-bold text-[#0078bd] break-all border-b-2 border-transparent hover:border-[#0078bd] transition">
                      info@turmakisi.com.tr
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Butonu */}
              <div className="pt-2">
                <a
                  href="https://wa.me/+905458262928"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-5 bg-[#25D366] text-white font-black rounded-[1.5rem] shadow-lg hover:shadow-xl hover:bg-[#128C7E] transition-all transform hover:-translate-y-1"
                >
                  <img src="/images/whatsapp-icon.png" alt="WA" className="w-6 h-6 brightness-0 invert" />
                  WHATSAPP İLE HIZLI ULAŞIN
                </a>
              </div>
            </div>

            {/* SAĞ TARAF: Harita (Orijinal Link Korundu) */}
            <div className="lg:w-7/12 w-full relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#0078bd]/10 to-[#f6a732]/10 rounded-[2.5rem] blur-2xl opacity-50"></div>
              <div className="relative h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <iframe
                  title="Turmak Makine Konum"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1125.4073696882465!2d37.45312113619839!3d37.078145498983716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e5909def97ed%3A0x3e40baf848d12635!2sSanayi%2C%2060214.%20Sk.%20No%3A15%2C%2027110%20%C5%9Eehitkamil%2FGaziantep!5e0!3m2!1str!2str!4v1764840918601!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}