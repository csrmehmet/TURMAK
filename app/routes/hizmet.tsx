import { useParams } from "react-router";
import { services } from "../data/services";

export default function HizmetDetay() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <div className="container mx-auto py-20">Hizmet bulunamadı.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold">{service.title}</h1>
      <p className="mt-4 text-lg text-muted">{service.description}</p>
    </div>
  );
}
