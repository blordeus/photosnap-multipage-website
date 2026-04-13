import { stories } from "@/data/stories";
import StoryCard from "@/components/stories/story-card";
import CTA from "@/components/shared/cta";

export default function StoriesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[650px]">
        {/* Use your responsive image here */}
      </section>

      {/* GRID */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4">
        {stories.map((story) => (
          <StoryCard key={story.title} {...story} />
        ))}
      </section>

      <CTA />
    </main>
  );
}