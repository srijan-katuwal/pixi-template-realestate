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
        <HeroSection
          backgroundVideo="/videos/real-estate3.mp4"
          title="Demo Real Estate"
          subtitle="Discover exclusive properties"
          height="100vh"
        />

        <FeaturedProperties />
        <RealEstateJourney />
        <LocalCommunities />
        <SiteFooter />
      </div>
    </AOSProvider>
  );
}
