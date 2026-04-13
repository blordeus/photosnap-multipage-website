type ImageSet = {
  desktop: string;
  tablet: string;
  mobile: string;
  alt: string;
};

export function createImageSet(
  folder: string,
  filename: string,
  alt: string
): ImageSet {
  return {
    desktop: `/assets/images/${folder}/desktop/${filename}`,
    tablet: `/assets/images/${folder}/tablet/${filename}`,
    mobile: `/assets/images/${folder}/mobile/${filename}`,
    alt,
  };
}