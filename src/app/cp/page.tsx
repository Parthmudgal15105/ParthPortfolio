import type { Metadata } from "next";
import { Tracker } from "./tracker";
import "./cp.css";

export const metadata: Metadata = {
  title: "CP Tracker — LeetCode, Codeforces, CodeChef, GFG & Code360 in one place",
  description:
    "Free tracker for competitive programmers: problems solved, contest ratings, a combined activity heatmap and topic insights across LeetCode, Codeforces, CodeChef, GeeksforGeeks and Code360.",
  alternates: { canonical: "/cp" },
};

export default function CpPage() {
  return (
    <section className="section cp-page">
      <div className="wrap">
        <header className="section-head">
          <span className="eyebrow">Free tool · no sign-up</span>
          <h1 className="display h2">Every problem you’ve solved, in one place.</h1>
          <p className="lede">
            Enter your handles to see total solves, contest ratings, one combined heatmap and what to practise next. Works for anyone’s
            profile, and the link is shareable.
          </p>
        </header>
        <Tracker />
      </div>
    </section>
  );
}
