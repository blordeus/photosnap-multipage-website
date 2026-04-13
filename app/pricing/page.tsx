import FeatureSplitSection from "@/components/sections/feature-split-section";
import PricingTable from "@/components/pricing/pricing-table";
import CompareTable from "@/components/pricing/compare-table";
import CTA from "@/components/shared/cta";

export default function PricingPage() {
  return (
    <main>
      <FeatureSplitSection
        title="Pricing"
        description="Create a your stories..."
        image={{
          desktop: "/assets/images/pricing/desktop/hero.jpg",
          tablet: "/assets/images/pricing/tablet/hero.jpg",
          mobile: "/assets/images/pricing/mobile/hero.jpg",
          alt: "Photographer silhouette",
        }}
        dark
      />

      <PricingTable />
      <CompareTable />

      <CTA />
    </main>
  );
}