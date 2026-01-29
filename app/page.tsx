import Footer from "@/components/footer";
import ContactSection from "@/components/sections/Contacts";
import Hero from "@/components/sections/Hero";
import OfficeLocations from "@/components/sections/officies";
import PricingSection from "@/components/sections/Price";
import ProductsSection from "@/components/sections/Products";
import TestimonialSection from "@/components/sections/Testimonials";
import WeLive from "@/components/sections/WeLive";
import Why_us from "@/components/sections/Why_us";

export default function Home() {
  return (
    <div>
      <main className="">
        <Hero />
        <Why_us/>
        <TestimonialSection/>
        <WeLive/>
        <ProductsSection/>
        <ContactSection/>
        <PricingSection/>
        <OfficeLocations/>
        <Footer/>
      </main>
    </div>
  );
}
