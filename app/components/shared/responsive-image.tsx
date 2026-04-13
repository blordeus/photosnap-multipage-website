<picture>
  <source media="(min-width: 1024px)" srcSet={desktop} />
  <source media="(min-width: 768px)" srcSet={tablet} />
  <Image
    src={mobile}
    alt={alt}
    fill
    sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
    priority={priority}
    className="object-cover"
  />
</picture>