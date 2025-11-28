import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import RealEstateJourney from "@/components/RealEstateJourney";
import LocalCommunities from "@/components/LocalCommunities";
import SiteFooter from "@/components/SiteFooter";
import AOSProvider from "@/components/AOSProvider";

export default function HomePage() {
  return (
    <AOSProvider>
      <div className="overflow-x-hidden max-w-[100vw]">
        <HeroSection />
        <FeaturedProperties />
        <RealEstateJourney />
        <LocalCommunities />
        <SiteFooter />
      </div>
    </AOSProvider>
  );
}
