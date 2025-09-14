import type { Skill } from "@/types/skill";
import SkillCardContainer from "@/components/SkillCard/SkillCardContainer";

// TODO: fetch skills from API
const HOURS = 60;
const INITIAL_SKILLS: Skill[] = [
  { title: "Hiking", minutesAllTime: 2300 * HOURS },
  { title: "Piano", minutesAllTime: 4500 * HOURS },
  { title: "Coding", minutesAllTime: 910 * HOURS },
];

function Skills() {
  return (
    <div>
      {INITIAL_SKILLS.map((skill) => (
        <SkillCardContainer skill={skill} key={skill.title} />
      ))}
    </div>
  );
}

export default Skills;
