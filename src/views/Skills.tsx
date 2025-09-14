import type { Skill } from "@/types/skill";
import SkillCardContainer from "@/components/SkillCard/SkillCardContainer";

// TODO: fetch skills from API
const INITIAL_SKILLS: Skill[] = [
  { title: "Hiking", minutesAllTime: 120 },
  { title: "Piano", minutesAllTime: 45 },
  { title: "Coding", minutesAllTime: 90 },
];

function Skills() {
  return (
    <div>
      <h3>Skills</h3>

      <div>
        {INITIAL_SKILLS.map((skill) => (
          <SkillCardContainer skill={skill} key={skill.title} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
