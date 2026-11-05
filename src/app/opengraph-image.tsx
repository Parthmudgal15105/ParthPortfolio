import { ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Parth Mudgal — I build software. Here’s the work.";

export default function Image() {
  return ogImage({
    eyebrow: "Parth Mudgal · App developer · Full-stack · CP",
    title: "I build software. Here’s the work.",
    subtitle: "Closer, Catch, LoopStudio, Palmdeck, Transcription and more.",
    accent: "#17160f",
  });
}
