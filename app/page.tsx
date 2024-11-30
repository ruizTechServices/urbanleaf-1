'use client';
import { NavBar } from "@/components/main_ui/navigation/navbar";
import ProductCarousel from "@/components/main_ui/content/product_carousel";
import { HeroMain } from "@/components/main_ui/content/hero_main";
import { CallToAction } from "@/components/main_ui/content/call-to-action";
import { FAQSection } from "@/components/main_ui/content/faq";
import { Footer } from "@/components/main_ui/navigation/footer";


export default function Home() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        <HeroMain />
        <ProductCarousel />
        <CallToAction />
        <ProductCarousel />
        <ProductCarousel />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}