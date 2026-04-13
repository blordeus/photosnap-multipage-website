import Image from "next/image";
import Link from "next/link";

type FeatureSplitSectionProps = {
  title: string;
  description: string;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
    alt: string;
  };
  imageFirst?: boolean;
  dark?: boolean;
  priority?: boolean;
};

export default function FeatureSplitSection({
  title,
  description,
  image,
  imageFirst = false,
  dark = false,
  priority = false,
}: FeatureSplitSectionProps) {
   return (
    <section className="bg-white">
      <div className="grid md:grid-cols-[273px_1fr] lg:grid-cols-[610px_1fr]">
        <div
          className={[
            "relative min-h-[271px] md:min-h-[600px]",
            imageFirst ? "md:order-1" : "md:order-2",
          ].join(" ")}
        >
          <picture>
            <source media="(min-width: 1024px)" srcSet={image.desktop} />
            <source media="(min-width: 768px)" srcSet={image.tablet} />
            <Image
              src={image.mobile}
              alt={image.alt}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 58vw, (min-width: 768px) 64vw, 100vw"
              className="object-cover"
            />
          </picture>
        </div>

        <div
          className={[
            "relative flex items-center px-7 py-[72px] md:px-[54px] md:py-[173px] lg:px-[112px]",
            dark ? "bg-black text-white" : "bg-white text-black",
            imageFirst ? "md:order-2" : "md:order-1",
          ].join(" ")}
        >
          {dark ? (
            <div className="absolute left-0 top-0 h-[6px] w-32 bg-[image:var(--gradient-6)] md:top-1/2 md:h-[304px] md:w-[6px] md:-translate-y-1/2" />
          ) : null}

          <div className="max-w-[387px]">
            <h2 className="text-[32px] font-bold uppercase leading-[1.1] tracking-[3.33px] md:text-[40px] md:tracking-[4.17px]">
              {title}
            </h2>

            <p
              className={[
                "mt-4 text-[15px] leading-[25px]",
                dark ? "text-white/60" : "text-black/60",
              ].join(" ")}
            >
              {description}
            </p>

            <Link
              href="#"
              className={[
                "group mt-6 inline-flex items-center gap-4 text-[12px] font-bold uppercase tracking-[2px]",
                dark ? "text-white" : "text-black",
              ].join(" ")}
            >
              <span>Get an invite</span>
              <Image
                src="/assets/shared/arrow.svg"
                alt=""
                width={42}
                height={14}
                className={dark ? "invert transition duration-300 group-hover:translate-x-1" : "transition duration-300 group-hover:translate-x-1"}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}