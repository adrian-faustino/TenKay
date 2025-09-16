import SkillSummary from "./SkillSummary";
import { INITIAL_SKILLS } from "@/mocks/initial_skills";
import useLocalStorage from "@/hooks/useLocalStorage";
import type { Skill } from "@/types/skill";

export default function SkillSummaryContainer() {
  const [skills] = useLocalStorage<Skill[]>("skills", INITIAL_SKILLS);
  return (
    <div className="w-auto mx-auto overflow-y-scroll grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-4">
      {skills.map((skill) => (
        <SkillSummary skill={skill} key={skill.title} />
      ))}
    </div>
  );
}
