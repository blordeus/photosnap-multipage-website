import Link from "next/link";
import Image from "next/image";

type StoryCardProps = {
  title: string;
  author: string;
  date?: string;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
    alt: string;
  };
};

export default function StoryCard({
  title,
  author,
  date,
  image,
}: StoryCardProps) {
  return (
    <Link
      href="#"
      className="group relative block min-h-[375px] overflow-hidden bg-black text-white transition md:min-h-[500px]"
    >
      <picture className="absolute inset-0 block h-full w-full">
        <source media="(min-width: 1024px)" srcSet={image.desktop} />
        <source media="(min-width: 768px)" srcSet={image.tablet} />
        <Image
          src={image.mobile}
          alt={image.alt}
          fill
          className="object-cover opacity-80 transition duration-500 group-hover:scale-105"
        />
      </picture>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-8">
        {date && <p className="mb-1 text-[13px] leading-[17px]">{date}</p>}

        <h3 className="text-heading-md">{title}</h3>
        <p className="mt-1 text-[13px] leading-[17px]">by {author}</p>

        <div className="mt-4 h-px bg-white/25" />

        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm-bold text-white">Read Story</span>
          <Image
            src="/assets/shared/arrow.svg"
            alt=""
            width={42}
            height={14}
            className="transition group-hover:translate-x-1"
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[image:var(--gradient-6)] transition duration-300 group-hover:scale-x-100" />
    </Link>
  );
}