import { Fragment } from "react";

const TOKEN = /(https?:\/\/[^\s)]+[^\s).,;:!?]|[\w.+-]+@[\w-]+\.[\w.-]*\w)/g;

/** Renders plain registry text, turning bare URLs and emails into links. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
        // Match patterns such as https://example.com/* are not real links.
        if (part.includes("*")) return <code key={i}>{part}</code>;
        const href = part.includes("@") && !part.startsWith("http") ? `mailto:${part}` : part;
        const label = part.replace(/^https?:\/\//, "");
        return (
          <a key={i} href={href} {...(href.startsWith("http") ? { rel: "noopener" } : {})}>
            {label}
          </a>
        );
      })}
    </>
  );
}
