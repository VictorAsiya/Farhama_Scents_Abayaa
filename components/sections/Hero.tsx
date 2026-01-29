"use client";
import Image from "next/image";
import Line from "@/assets/hor_line.png";
import Button from "../ui/button";

function Hero() {
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 min-h-screen"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, .6), rgba(0, 0, 0, 0.3)), url('/background/perfume.jpg')`,
      }}
    >
      <div className="flex flex-col justify-center items-center pt-20 w-full max-w-5xl">
        <div className="flex items-center my-6 w-full">
          <span className="flex-1 h-px bg-brandWhite/60" />
          <span className="mx-3 text-3xl sm:text-4xl md:text-5xl text-brandWhite">
            ✻
          </span>
          <span className="flex-1 h-px bg-brandWhite/60" />
        </div>{" "}
        <h3 className="heroText text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text">
          LUXURY YOU CAN AFFORD
        </h3>
        <p className="text-white/60 font-bold mt-5 text-sm sm:text-base md:text-lg max-w-4xl">
          Elegant abayas, refined men's wear, children's designs, and premium
          base accessories such as bags, <br className="hidden sm:block" /> jewelry cores, belts, and tech
          straps. With unique designs for everyone.
        </p>
        <span className="flex  gap-5">
          <Button variant="primary" size="lg" className="mt-8">
            Discover
          </Button>

          <Button variant="primary" size="lg" className="mt-8">
            Shop Now
          </Button>
        </span>
      </div>
    </div>
  );
}

export default Hero;
