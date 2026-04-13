import { homeSections } from "@/data/home";
import { stories } from "@/data/stories";

import FeatureSplitSection from "@/components/sections/feature-split-section";
import StoryCard from "@/components/stories/story-card";
import FeatureGrid from "@/components/features/feature-grid";
import CTA from "@/components/shared/cta";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <FeatureSplitSection {...homeSections[0]} priority />

      {/* SECTIONS */}
      <FeatureSplitSection {...homeSections[1]} reverse />
      <FeatureSplitSection {...homeSections[2]} />

      {/* STORY PREVIEW */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4">
        {stories.slice(0, 4).map((story) => (
          <StoryCard key={story.title} {...story} />
        ))}
      </section>

      {/* FEATURES */}
      <FeatureGrid />

      {/* CTA */}
      <CTA />
    </main>
  );
}