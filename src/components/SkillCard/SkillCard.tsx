import { useState } from "react";
import { MINUTE_INCREMENTS } from "./constants";
import { minutesToHours } from "@/utils/datetime";

interface SkillCardProps {
  title: string;
  minutesAllTime: number;
  minutesToday: number;
  onMinutesChange: (minutes: number) => void;
}

function SkillCard({
  title,
  minutesAllTime,
  minutesToday,
  onMinutesChange,
}: SkillCardProps) {
  const [isAdditionMode, setIsAdditionMode] = useState(true);

  const handleIncrementDecrement = (delta: number) => () => {
    let adjustDelta = isAdditionMode ? delta : -delta;
    // Prevent negative minutes today
    if (minutesToday + adjustDelta < 0) return;

    onMinutesChange(adjustDelta);
  };

  return (
    <div>
      {/* Header */}
      <div>
        <span>{title}</span>
        <span>Today: {minutesToday}mins </span>
      </div>

      {/* Body */}
      <div>
        {MINUTE_INCREMENTS.map((minuteIncrement) => (
          <button
            onClick={handleIncrementDecrement(minuteIncrement)}
            key={minuteIncrement}
          >
            <span>{isAdditionMode ? "+" : "-"}</span>
            <span>{minuteIncrement}min</span>
          </button>
        ))}

        {/* TODO: use Toggle component */}
        <button onClick={() => setIsAdditionMode((prev) => !prev)}>
          {isAdditionMode ? "+" : "-"}
        </button>
      </div>

      {/* Progress Bar */}
      <div>{minutesToHours(minutesAllTime)}h / 10,000h </div>
    </div>
  );
}

export default SkillCard;
