import FeatureSplitSection from "@/components/sections/feature-split-section";
import FeatureGrid from "@/components/features/feature-grid";
import CTA from "@/components/shared/cta";

export default function FeaturesPage() {
  return (
    <main>
      <FeatureSplitSection
        title="Features"
        description="We make sure all of our features..."
        image={{
          desktop: "/assets/images/features/desktop/hero.jpg",
          tablet: "/assets/images/features/tablet/hero.jpg",
          mobile: "/assets/images/features/mobile/hero.jpg",
          alt: "Camera close up",
        }}
        dark
      />

      <FeatureGrid extended />

      <CTA />
    </main>
  );
}