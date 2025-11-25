import { NavLink } from "react-router";

export default function  Footer(){
    const links=[
        {name:"Anasayfa",to:"/"},
        {name:"Hakkımızda",to:"/hakkimizda"},
        {name:"Hizmetler",to:"/hizmetler"},
        {name:"Ürünler",to:"/ürünler"},
        
    ];
return (
    <footer className="bg-gradient-to-l from-[#f6a732] to-[#0078bd] text-white mt-20 pt-16 pb-8">

        <div className="container mx-auto px-8 md:grid-cols-3 gap-10">
        <div>
            <h2 className="text-2xl font-bold ">Şirket ADI</h2>
            <p className="mt-4 tex-sm text-gray-200 leading-relaxed">
                Sektörde X yıllık deneyimimizle kaliteli hizmetler sunuyor,  
            müşteri memnuniyetini her zaman ön planda tutuyoruz.</p>
        </div>

        <div>
            <h3 className="text-lg font-semibold mb-4 mt-10">Menü</h3>
            <ul className="space-y-8">{links.map((item)=>(
                <li key={item.to}>
                    <NavLink to={item.to}className="text-gray-200 hover:text-white transition">{item.name}</NavLink>
                </li>
            ))

                }</ul>
        </div>

        <div>
            <h3 className="text-lg font-semibold mb-2 mt-10">İletişim</h3>
            <p className="text-gray-200">Adres: Örnek Mah. 123. Sokak No: 45</p>
          <p className="text-gray-200 mt-2">Telefon: +90 555 555 55 55</p>
          <p className="text-gray-200 mt-2">Email: info@sirket.com</p>
        </div>
    </div>

    <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Şirket Adı. Tüm hakları saklıdır.
      </div>    
    </footer>
)
}