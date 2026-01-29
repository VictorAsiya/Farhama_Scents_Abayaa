"use client";

const offices = [
  {
    city: "Paris Office",
    address: "50 Rue du Roi de Sicile Paris",
    email: "estelle@qodeinteractive.com",
    phone: "+88(0) 101 0000 000",
  },
  {
    city: "Zürich Office",
    address: "Aemtlerstrasse 45 8003 Zürich",
    email: "estelle@qodeinteractive.com",
    phone: "+88(0) 101 0000 000",
  },
  {
    city: "London Office",
    address: "11-31 St Petersburgh Pl London",
    email: "estelle@qodeinteractive.com",
    phone: "+88(0) 101 0000 000",
  },
  {
    city: "Milano Office",
    address: "Via Bianca di Savoia, 8 Milano",
    email: "estelle@qodeinteractive.com",
    phone: "+88(0) 101 0000 000",
  },
];

export default function OfficeLocations() {
  return (
    <section className="w-full grid lg:grid-cols-2">
      {/* Map */}
      <div className="relative h-screen">
        <iframe
          src="https://www.google.com/maps?q=New%20York&output=embed"
          className="w-full h-full grayscale"
          loading="lazy"
        />
      </div>

      {/* Offices */}
      <div className="bg-[#faf7f5] px-10 py-20">
        <div className="grid md:grid-cols-2 gap-16 max-w-3xl mx-auto">
          {offices.map((office) => (
            <div key={office.city}>
              <h3 className="text-xl font-bold uppercase tracking-widest">
                {office.city}
              </h3>

              {/* Divider */}
              <div className="flex items-center my-4">
                <span className="mr-3">✻</span>
                <span className="flex-1 h-px bg-black" />
              </div>

              <p className="text-gray-700 mb-2">{office.address}</p>
              <p className="text-gray-700 mb-2">{office.email}</p>
              <p className="text-gray-700">{office.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
