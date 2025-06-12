import {
  CallToActionSection,
  CustomerStorySection,
  FeatureSection,
  HeroSection,
  SupportSection,
} from "@/templates/landing-page/sections";

export function LandingPage() {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToActionSection />
    </article>
  );
}
