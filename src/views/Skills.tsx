import { INITIAL_SKILLS } from "@/mocks/initial_skills";
import SkillCardContainer from "@/components/SkillCard/SkillCardContainer";
import useLocalStorage from "@/hooks/useLocalStorage";
import type { Skill } from "@/types/skill";

// TODO: fetch skills from API

function Skills() {
  const [skills] = useLocalStorage<Skill[]>("skills", INITIAL_SKILLS);
  return (
    <div>
      {skills.map((skill) => (
        <SkillCardContainer skill={skill} key={skill.title} />
      ))}
    </div>
  );
}

export default Skills;
