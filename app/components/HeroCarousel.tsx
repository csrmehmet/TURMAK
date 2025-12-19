import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { NavLink } from "react-router";

const slides = [
  {
    id: 1,
    title: "Fabrikalar İçin Anahtar Teslim Projeler",
    text: "Planlama, kurulum ve entegrasyon süreçlerinde profesyonel destek.",
    image: "/images/anahtar.jpg",
  },
  {
    id: 2,
    title: "Üretim Hattı Otomasyon Sistemleri",
    text: "Maksimum verimlilik için en gelişmiş otomasyon teknolojileri.",
    image: "/images/premium_photo-1661844830578-e17e40bdf2dc.avif",
  },
  {
    id: 3,
    title: "Makine ve Ekipman Tedarikinde Uzmanız",
    text: "Uluslararası standartlarda güvenilir makine çözümleri.",
    image: "/images/photo-1524514587686-e2909d726e9b.avif",
  },
  {
    id: 4,
    title: "Endüstriyel Üretimde Güvenilir Çözümler",
    text: "Modern üretim teknolojileriyle ihtiyaçlarınıza özel çözümler sunuyoruz.",
    image: "/images/premium_photo-1661811696984-e16d3d9f4ec2.avif",
  },
  {
    id: 5,
    title: "Endüstriyel Bakım & Onarım Hizmetleri",
    text: "Arıza durumlarında hızlı müdahale, kesintisiz üretim.",
    image: "/images/bakim.jpg",
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] text-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0078bdcc] to-[#f6a732cc]"></div>

              {/* CONTENT */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 md:px-12">
                  <h2 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
                    {slide.title}
                  </h2>

                  <p className="mt-4 text-xl max-w-xl drop-shadow-md">
                    {slide.text}
                  </p>

                  <div className="mt-8 flex gap-4">
                    <NavLink
                      to="/iletisim"
                      className="px-6 py-3 bg-[#f6a732] text-dark font-semibold rounded shadow hover:opacity-90"
                    >
                      Teklif Al
                    </NavLink>

                    <NavLink
                      to="/hakkimizda"
                      className="px-6 py-3 border border-white text-white rounded hover:bg-white hover:text-primary"
                    >
                      Hakkımızda
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
