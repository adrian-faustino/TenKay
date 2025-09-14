import { useState } from "react";
import { MINUTE_INCREMENTS } from "./constants";
import { minutesToHours } from "@/utils/datetime";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

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
    onMinutesChange(adjustDelta);
  };

  const formatButtonLabel = (minuteIncrement: number) => {
    let sign = isAdditionMode ? "+" : "-";
    return `${sign}${minuteIncrement}min`;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <span>{title}</span>
          <span>Today: {minutesToday}mins </span>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex gap-1">
          {MINUTE_INCREMENTS.map((minuteIncrement) => (
            <Button
              onClick={handleIncrementDecrement(minuteIncrement)}
              key={minuteIncrement}
            >
              {formatButtonLabel(minuteIncrement)}
            </Button>
          ))}

          <div className="flex flex-col items-center">
            <Switch
              id="mode"
              onClick={() => setIsAdditionMode((prev) => !prev)}
            />
            <Label htmlFor="mode">{isAdditionMode ? "add" : "sub"}</Label>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex flex-col w-full">
          <div>{minutesToHours(minutesAllTime)}h / 10,000h </div>
          <Progress value={(minutesToHours(minutesAllTime) / 10_000) * 100} />
        </div>
      </CardFooter>
    </Card>
  );
}

export default SkillCard;
