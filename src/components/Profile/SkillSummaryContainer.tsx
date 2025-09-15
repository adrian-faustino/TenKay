import SkillSummary from "./SkillSummary";
import type { Skill } from "@/types/skill";

// from Skills.tsx
const HOURS = 60;
// TODO make a shared constant file for this to also use in Skills.tsx
const INITIAL_SKILLS: Skill[] = [
  { title: "Hiking", minutesAllTime: 2300 * HOURS },
  { title: "Piano", minutesAllTime: 4500 * HOURS },
  { title: "Coding", minutesAllTime: 910 * HOURS },
  { title: "Cooking", minutesAllTime: 1200 * HOURS },
  { title: "Photography", minutesAllTime: 300 * HOURS },
  { title: "Writing", minutesAllTime: 600 * HOURS },
];

export default function SkillSummaryContainer() {
  return (
    <div className="w-auto mx-auto overflow-y-scroll grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-4">
      {INITIAL_SKILLS.map((skill) => (
        <SkillSummary skill={skill} key={skill.title} />
      ))}
    </div>
  );
}
