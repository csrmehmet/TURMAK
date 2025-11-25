export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-l from-[#f6a732] to-[#0078bd] text-white py-28">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Şirketinize Hoş Geldiniz
        </h1>

        <p className="mt-6 text-lg md:text-xl opacity-95 max-w-xl">
          Profesyonel çözümler, güvenilir hizmetler.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/iletisim"
            className="px-6 py-3 rounded-lg bg-[#f6a732] text-[#0078bd] font-semibold shadow hover:opacity-90 transition"
          >
            Teklif Al
          </a>
          <a
            href="/hakkimizda"
            className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-primary transition"
          >
            Hakkımızda
          </a>
        </div>
      </div>
    </section>
  );
}