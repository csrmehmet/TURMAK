import type { Route } from "./+types/home";
import Hero from "../components/Hero";
import ServicesGrid from "~/components/ServicesGrid";
import HeroCarousel from "~/components/HeroCarousel";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Anasayfa | Şirket Adı" },
    {
      name: "description",
      content: "Kurumsal web sitemize hoş geldiniz.",
    },
  ];
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroCarousel />

      {/* HAKKIMIZDA ÖNİZLEME */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-dark">Hakkımızda</h2>
        <p className="mt-4 text-muted max-w-2xl">
          Şirketiniz için kaliteli çözümler üretiyor, sektördeki deneyimimiz ile güvenilir hizmet sunuyoruz.
          Bu bölümde hakkımızda için kısa bir açıklama yer alacak. 
        </p>

        <a
          href="/hakkimizda"
          className="inline-block mt-6 text-primary font-semibold hover:underline"
        >
          Devamını oku →
        </a>
      </section>

      <section className="container mx-auto px-4 py-20">
  <h2 className="text-3xl font-bold text-dark">Hizmetlerimiz</h2>

  <ServicesGrid />

  <a
    href="/hizmetler"
    className="inline-block mt-8 text-primary font-semibold hover:underline"
  >
    Tüm hizmetleri gör →
  </a>
</section>


      {/* İLETİŞİM CTA */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark">Bizimle İletişime Geçin</h2>
          <p className="mt-4 text-muted">
            Profesyonel çözümler için iletişime geçmekten çekinmeyin.
          </p>

          <a
            href="/iletisim"
            className="mt-6 inline-block px-8 py-3 bg-primary text-white rounded shadow hover:opacity-90 transition"
          >
            İletişime Geç
          </a>
        </div>
      </section>
    </>
  );
}
