import { createImageSet } from "@/lib/image-paths";

export const homeSections = [
  {
    title: "Create and share your photo stories.",
    description:
      "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    image: createImageSet(
      "home",
      "create-and-share.jpg",
      "Person standing on a dock at sunset"
    ),
    dark: true,
  },
  {
    title: "Beautiful stories every time",
    description:
      "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    image: createImageSet(
      "home",
      "beautiful-stories.jpg",
      "Laptop on a desk with printed photos"
    ),
    imageFirst: true,
  },
  {
    title: "Designed for everyone",
    description:
      "Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses and everyone in between.",
    image: createImageSet(
      "home",
      "designed-for-everyone.jpg",
      "Person standing on a wooden dock by a lake"
    ),
  },
];