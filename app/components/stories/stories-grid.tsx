import StoryCard from "@/components/stories/story-card";
import { stories } from "@/data/stories";

export default function StoriesGrid() {
  return (
    <section>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4">
        {stories.map((story) => (
          <StoryCard
            key={`${story.title}-${story.author}`}
            title={story.title}
            author={story.author}
            date={story.date}
            image={story.image}
          />
        ))}
      </div>
    </section>
  );
}