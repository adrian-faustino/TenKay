import SkillSummary from "./SkillSummary";
import type { Skill } from "@/types/skill";

// from Skills.tsx
const HOURS = 60;
const INITIAL_SKILLS: Skill[] = [
  { title: "Hiking", minutesAllTime: 2300 * HOURS },
  { title: "Piano", minutesAllTime: 4500 * HOURS },
  { title: "Coding", minutesAllTime: 910 * HOURS },
];

export default function SkillSummaryContainer() {
  return (
    <div className="w-80 mx-auto flex flex-col gap-4">
      {INITIAL_SKILLS.map((skill) => (
        <SkillSummary skill={skill} key={skill.title} />
      ))}
    </div>
  );
}
