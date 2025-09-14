import { useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import SkillCard from "./SkillCard";
import type { Skill } from "@/types/skill";

interface SkillCardContainerProps {
  skill: Skill;
}

// Container component: handles data fetching and passes props to presentational component
function SkillCardContainer({ skill }: SkillCardContainerProps) {
  const [minutesAllTime, setMinutesAllTime] = useLocalStorage(
    skill.title,
    skill.minutesAllTime
  );
  const [minutesToday, setMinutesToday] = useState(0); // TODO: reafactor to persist daily minutes

  const handleMinutesChange = (minutes: number) => {
    // Prevent negative minutes today
    if (minutesToday + minutes < 0) return;
    setMinutesAllTime((prev) => prev + minutes);
    setMinutesToday((prev) => prev + minutes);
  };

  return (
    <SkillCard
      title={skill.title}
      minutesAllTime={minutesAllTime}
      minutesToday={minutesToday}
      onMinutesChange={handleMinutesChange}
    />
  );
}

export default SkillCardContainer;
