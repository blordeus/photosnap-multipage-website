import { stories } from "@/data/stories";
import StoryCard from "@/app/components/stories/story-card";
import StoriesGrid from "@/app/components/stories/stories-grid";
import CTA from "@/app/components/layout/cta-banner";

export default function StoriesPage() {
  return (
    <main>
      <section className="bg-black text-white">
        <div className="px-8 py-20 md:px-10 md:py-24 lg:px-28 lg:py-32">
          <div className="max-w-[387px]">
            <p className="text-[12px] font-bold uppercase tracking-[2px]">
              Last Month&apos;s Featured Story
            </p>

            <h1 className="mt-4 text-[32px] font-bold uppercase leading-[1.1] tracking-[3.33px] md:text-[40px] md:tracking-[4.17px]">
              Hazy Full Moon of Appalachia
            </h1>

            <p className="mt-4 text-[13px] leading-[17px] text-white/75">
              March 2nd 2020 <span className="text-white">by John Appleseed</span>
            </p>

            <p className="mt-6 text-[15px] leading-[25px] text-white/60">
              The dissected plateau area, while not actually made up of geological
              mountains, is popularly called &quot;mountains,&quot; especially in eastern
              Kentucky and West Virginia, and while the ridges are not high, the
              terrain is extremely rugged.
            </p>
          </div>
        </div>
      </section>

      <StoriesGrid />

      <CTA />
    </main>
  );
}