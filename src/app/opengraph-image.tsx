import { ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Parth Mudgal — small, careful software for Mac, iPhone and the browser";

export default function Image() {
  return ogImage({
    eyebrow: "Parth Mudgal · Independent developer",
    title: "Small, careful software for Mac, iPhone & the browser.",
    subtitle: "Closer, Catch, LoopStudio, Palmdeck, Transcription and more.",
    accent: "#17160f",
  });
}
