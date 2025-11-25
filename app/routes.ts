import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // Anasayfa
  index("routes/home.tsx"),

  // Hakkımızda
  route("hakkimizda", "routes/hakkimizda.tsx"),

  // Hizmetler listesi
  route("hizmetler", "routes/hizmetler.tsx"),

  // Hizmet detay (slug)
  route("hizmetler/:slug", "routes/hizmet.tsx"),

  // Ürünler
  route("urunler", "routes/urunler.tsx"),

  // İletişim
  route("iletisim", "routes/iletisim.tsx"),

  // KVKK
  route("kvkk", "routes/kvkk.tsx"),
] satisfies RouteConfig;
