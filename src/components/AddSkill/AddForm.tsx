import { Button } from "../ui";
import { useState } from "react";
import type { Skill } from "@/types/skill";
import useLocalStorage from "@/hooks/useLocalStorage";
import { INITIAL_SKILLS } from "@/mocks/initial_skills";
export default function AddSkillForm() {
  const [skillTitle, setSkillTitle] = useState("");
  const [_, setSkills] = useLocalStorage<Skill[]>("skills", INITIAL_SKILLS);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (skillTitle.trim() === "") {
      // TODO: give an alert to say title can't be empty
      return;
    }

    const newSkill: Skill = { title: skillTitle, minutesAllTime: 0 };

    setSkills((prev) => [...prev, newSkill]);
    setSkillTitle("");
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Skill Title"
        value={skillTitle}
        onChange={(e) => setSkillTitle(e.target.value)}
      />
      <Button type="submit">Add Skill</Button>
    </form>
  );
}
