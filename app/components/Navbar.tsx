import { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Anasayfa", to: "/" },
    { name: "Hakkımızda", to: "/hakkimizda" },
    { name: "Hizmetler", to: "/hizmetler" },
    { name: "Ürünler", to: "/urunler" },
    { name: "İletişim", to: "/iletisim" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        
        {/* LOGO */}
        <NavLink to="/" className="text-2xl font-bold text-blue-700">
        <img src="/images/WhatsApp Image 2025-11-17 at 16.41.57.jpeg" alt="Logo" className="w-40" />
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <span className="text-3xl">&times;</span>
          ) : (
            <span className="text-3xl">&#9776;</span>
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 font-semibold"
                    : "hover:text-blue-700 transition"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-inner">
          <ul className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-blue-700 font-semibold" : "block"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
