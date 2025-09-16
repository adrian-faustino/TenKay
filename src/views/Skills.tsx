import { INITIAL_SKILLS } from "@/mocks/initial_skills";
import SkillCardContainer from "@/components/SkillCard/SkillCardContainer";

// TODO: fetch skills from API

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
