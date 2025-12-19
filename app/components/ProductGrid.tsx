import ProductCard from "~/components/ProductCard";
import { products } from "~/data/products";

type Props = {
  title?: string;
  subtitle?: string;
  limit?: number;
};

export default function ProductGrid({
  title = "Öne Çıkan Endüstriyel Çözümler",
  subtitle = "Kataloğumuzdan seçili ürünler. Detay ve teklif için iletişime geçin.",
  limit = 6,
}: Props) {
  const items = products.slice(0, limit);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary ring-1 ring-black/5">
              <span className="h-2 w-2 rounded-full bg-turuncusu" />
              Ürün vitrini
            </div>

            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-dark">
              {title}
            </h2>

            <p className="mt-3 text-muted">{subtitle}</p>
          </div>

          <a
            href="/urunler"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-primary text-white shadow-sm hover:opacity-90 transition"
          >
            Tüm ürünleri gör →
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-gray-700">
            İhtiyacınıza uygun modeli birlikte netleştirelim.
          </p>
          <a
            href="/iletisim"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-turuncusu text-dark shadow-sm hover:opacity-90 transition"
          >
            Teklif / Bilgi Al
          </a>
        </div>
      </div>
    </section>
  );
}
