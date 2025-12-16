import type { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border  rounded-xl shadow hover:shadow-lg transition bg-white overflow-hidden">
      <div className="p-1   bg-gradient-to-r from-blue-500 to-orange-500">
        <div className="bg-white rounded xl">
        <div className="h-56 w-full rounded-xl overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl h-full object-cover-r-[%75]"
        />
      </div>

      <div className="p-4 bg-blue-900 rounded-l">
        <h3 className="text-lg  font-semibold text-dark">{product.name}</h3>
        <p className="text-muted mt-2 text-sm">{product.description}</p>

        {product.price && (
          <p className="mt-3 font-bold text-primary text-lg">
            {product.price.toLocaleString("tr-TR")} ₺
          </p>
        )}

        <button className="mt-4 w-full py-2 bg-primary text-white rounded hover:opacity-90">
          İncele
        </button>
            </div>
            </div>
        </div>
    </div>
  );
}
