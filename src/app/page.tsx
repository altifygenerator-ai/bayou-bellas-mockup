import AboutSection from "@/components/AboutSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LocationSection from "@/components/LocationSection";
import MenuFavorites from "@/components/MenuFavorites";
import ReviewsSection from "@/components/ReviewsSection";
import RotatingMenu from "@/components/RotatingMenu";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <main className="site-shell">
      <Header />
      <Hero />
      <TrustStrip />
      <RotatingMenu />
      <MenuFavorites />
      <ReviewsSection />
      <LocationSection />
      <AboutSection />
      <GallerySection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
