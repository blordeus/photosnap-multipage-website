import Image from "next/image";

type ResponsiveImageProps = {
  desktop: string;
  tablet: string;
  mobile: string;
  alt: string;
  priority?: boolean;
};

export default function ResponsiveImage({
  desktop,
  tablet,
  mobile,
  alt,
  priority = false,
}: ResponsiveImageProps) {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktop} />
      <source media="(min-width: 768px)" srcSet={tablet} />
      <Image
        src={mobile}
        alt={alt}
        width={830}
        height={650}
        priority={priority}
        className="h-full w-full object-cover"
      />
    </picture>
  );
}