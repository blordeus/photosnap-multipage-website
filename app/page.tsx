import { homeSections } from "@/data/home";
import { stories } from "@/data/stories";

import FeatureSplitSection from "@/app/components/shared/feature-split-section";
import StoryCard from "@/app/components/stories/story-card";
import StoriesGrid from "@/app/components/stories/stories-grid";
import FeatureGrid from "@/app/components/features/features-grid";
import CTA from "@/app/components/shared/cta";

export default function HomePage() {
  return (
    <main>
      <FeatureSplitSection
        title={homeSections[0].title}
        description={homeSections[0].description}
        image={homeSections[0].image}
        dark={homeSections[0].dark}
        priority
      />

      <FeatureSplitSection
        title={homeSections[1].title}
        description={homeSections[1].description}
        image={homeSections[1].image}
        imageFirst={homeSections[1].imageFirst}
      />

      <FeatureSplitSection
        title={homeSections[2].title}
        description={homeSections[2].description}
        image={homeSections[2].image}
      />

      <StoriesGrid limit={4} />

      <FeatureGrid />

      <CTA />
    </main>
  );
}