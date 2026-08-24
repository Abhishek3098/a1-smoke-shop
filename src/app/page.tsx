import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import ProductCatalog from '@/components/sections/ProductCatalog';
import Reviews from '@/components/sections/Reviews';
import LocationHours from '@/components/sections/LocationHours';
import FAQSection from '@/components/sections/FAQSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProductCatalog />
      <Reviews />
      <FAQSection />
      <LocationHours />
    </>
  );
}