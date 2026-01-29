"use client";

const plans = [
  {
    title: "Basic",
    price: 219,
    featured: false,
    features: [
      "Lorem ipsum dolor amet",
      "Maecenas nec odio et tincidu",
      "Lorem ipsum dolor amet",
      "Maecenas nec odio et tincidu",
    ],
  },
  {
    title: "Special",
    price: 319,
    featured: true,
    features: [
      "Lorem ipsum dolor amet",
      "Maecenas nec odio et tincidu",
      "Lorem ipsum dolor amet",
      "Maecenas nec odio et tincidu",
      "Lorem ipsum dolor amet",
    ],
  },
  {
    title: "Luxury",
    price: 519,
    featured: false,
    features: [
      "Lorem ipsum dolor amet",
      "Maecenas nec odio et tincidu",
      "Lorem ipsum dolor amet",
      "Maecenas nec odio et tincidu",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide uppercase">
          Fabulous Prices
        </h2>

        <div className="flex items-center justify-center my-6">
          <span className="w-10 sm:w-12 h-px bg-black" />
          <span className="mx-3">✻</span>
          <span className="w-10 sm:w-12 h-px bg-black" />
        </div>

        <p className="max-w-2xl mx-auto text-gray-600 italic leading-relaxed text-sm sm:text-base">
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 mt-20">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`bg-[#faf7f5] px-6 py-10 flex flex-col items-center transition-transform duration-300 ${
                plan.featured
                  ? "md:scale-105 shadow-xl"
                  : "shadow-md"
              }`}
            >
              {/* Price */}
              <h3 className="text-4xl sm:text-5xl font-serif">
                ${plan.price}
                <span className="text-base italic font-light"> /month</span>
              </h3>

              <div className="flex items-center my-6 w-full">
                <span className="flex-1 h-px bg-black" />
                <span className="mx-3">✻</span>
                <span className="flex-1 h-px bg-black" />
              </div>

              {/* Title */}
              <h4 className="text-lg sm:text-xl font-bold uppercase tracking-widest mb-6">
                {plan.title}
              </h4>

              {/* Features */}
              <ul className="space-y-3 text-gray-700 text-sm sm:text-base mb-10">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              {/* Button */}
              <button className="mt-auto text-sm font-bold uppercase tracking-widest border-b-2 border-black hover:text-gray-600 transition">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
