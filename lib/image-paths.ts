export function getResponsiveImageSet(folder: string, filename: string) {
  return {
    desktop: `/assets/images/${folder}/desktop/${filename}`,
    tablet: `/assets/images/${folder}/tablet/${filename}`,
    mobile: `/assets/images/${folder}/mobile/${filename}`,
  };
}