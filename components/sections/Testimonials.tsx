"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import user1 from "../../assets/users/user1.png";
import user2 from "../../assets/users/user2.avif";
import user3 from "../../assets/users/user3.png";

const testimonials = [
  {
    name: "John Doe",
    message:
      "This brand exceeded my expectations. The quality and attention to detail are outstanding.",
    image: user1,
  },
  {
    name: "Sarah Williams",
    message:
      "Absolutely love the products! Customer service was friendly and very responsive.",
    image: user2,
  },
  {
    name: "Michael Brown",
    message:
      "Elegant designs and premium quality. I highly recommend this brand to anyone.",
    image: user3,
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-10 bg-brandWhite flex justify-center">
      <div className="relative w-full max-w-3xl px-6 lg:px-10 text-center h-80">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute z-10 left-2 sm:left-0 top-1/2 -translate-y-1/2 px-2 rounded-full border border-black/10
  hover:border-black hover:bg-black hover:text-white transition"
        >
          <ChevronLeft size={18} className="sm:size-10" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute z-10 right-2 sm:right-0 top-1/2 -translate-y-1/2 px-2 rounded-full border border-black/10
  hover:border-black hover:bg-black hover:text-white transition"
        >
          <ChevronRight size={18} className="sm:size-10" />
        </button>

        {/* Slides */}
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out
              ${
                index === current
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95 pointer-events-none"
              }`}
          >
            <h2 className="text-2xl lg:text-3xl tracking-[0.25em] sm:tracking-[0.35em] font-semibold mb-4 sm:mb-6 text-black/60">
              VALUABLE LIFESTYLE
            </h2>

            <p className="italic text-brandBlack max-w-xl mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base px-2">
              “{testimonial.message}”
            </p>

            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={64}
              height={64}
              className="sm:w-20 sm:h-20 rounded-full object-cover mb-3 sm:mb-4"
            />

            <h4 className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-black/50">
              {testimonial.name}
            </h4>
          </div>
        ))}

        {/* Indicator Bars */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-0.5 transition-all duration-500
                ${
                  index === current
                    ? "w-8 sm:w-10 bg-black"
                    : "w-4 bg-black/30 hover:bg-black/60"
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
