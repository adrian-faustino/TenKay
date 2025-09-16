import SkillSummary from "./SkillSummary";
import { INITIAL_SKILLS } from "@/mocks/initial_skills";

export default function SkillSummaryContainer() {
  return (
    <div className="w-auto mx-auto overflow-y-scroll grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-4">
      {INITIAL_SKILLS.map((skill) => (
        <SkillSummary skill={skill} key={skill.title} />
      ))}
    </div>
  );
}
