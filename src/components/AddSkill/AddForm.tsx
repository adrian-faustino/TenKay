import { Button } from "../ui";
import { useState } from "react";

export default function AddSkillForm() {
  const [skillTitle, setSkillTitle] = useState("");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Form submitted the skill title: ${skillTitle}`);
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
