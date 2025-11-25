import { services } from "../data/services";
import { NavLink } from "react-router";

export default function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mt-10">
      {services.map((service) => (
        <div
          key={service.id}
          className="p-6 border rounded-lg shadow hover:shadow-lg transition bg-[#0078bdcc]"
        >
          <div className="text-4xl">{service.icon}</div>
          <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
          <p className="mt-2 text-muted">{service.description}</p>

          <NavLink
            to={`/hizmetler/${service.slug}`}
            className="inline-block mt-4 text-primary font-semibold hover:underline"
          >
            Detay →
          </NavLink>
        </div>
      ))}
    </div>
  );
}
