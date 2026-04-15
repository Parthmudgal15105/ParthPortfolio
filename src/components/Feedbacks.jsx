import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";

const achievements = [
  {
    platform: "Codeforces",
    handle: "Specialist",
    rating: "Max Rating: 1417",
    highlights: [
      "Global Rank 2192 in Round 1082 (Div. 2)",
      "Global Rank 2164 in Round 1003 (Div. 4)",
      "Global Rank 2934 in Round 1016 (Div. 3)",
    ],
    color: "#1da462",
    link: "https://codeforces.com/profile/Parthmudgal15105",
  },
  {
    platform: "CodeChef",
    handle: "3-Star",
    rating: "Max Rating: 1671",
    highlights: [
      "Global Rank 284 in Starters 180",
      "Global Rank 535 in Starters 196",
      "Global Rank 676 in Starters 170",
    ],
    color: "#915eff",
    link: "https://www.codechef.com/users/parthmudgal151",
  },
  {
    platform: "MAIT",
    handle: "Top 5 CP",
    rating: "Campus Rank: Top 5",
    highlights: [
      "Ranked top 5 competitive programmers at MAIT",
      "Grew CP community to 500+ students",
      "Coordinated seminars with Google engineers for 100+ students",
    ],
    color: "#ff6b6b",
    link: "https://github.com/Parthmudgal15105",
  },
];

const AchievementCard = ({ index, platform, handle, rating, highlights, color, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.4, 0.75)}
    className="bg-black-200 p-8 rounded-3xl w-full sm:w-[320px] cursor-pointer hover:scale-[1.02] transition-transform"
    onClick={() => window.open(link, "_blank")}
  >
    <div className="flex items-center gap-3 mb-4">
      <div
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: color }}
      />
      <p className="text-white font-bold text-[18px]">{platform}</p>
      <span
        className="ml-auto text-[13px] font-semibold px-3 py-1 rounded-full"
        style={{ backgroundColor: color + "22", color }}
      >
        {handle}
      </span>
    </div>

    <p className="text-secondary text-[14px] mb-4">{rating}</p>

    <ul className="space-y-2">
      {highlights.map((h, i) => (
        <li key={i} className="text-white-100 text-[13px] flex gap-2">
          <span style={{ color }}>›</span>
          {h}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Competitive programming & campus</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
        {achievements.map((a, index) => (
          <AchievementCard key={a.platform} index={index} {...a} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "achievements");
