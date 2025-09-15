import { Card, CardContent, CardHeader, Progress } from "@ui";
import { minutesToHours } from "@/utils/datetime";
import type { Skill } from "@/types/skill";

interface SkillSummaryProps {
  skill: Skill;
}

export default function SkillSummary({ skill }: SkillSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <div>
          <span className="text-lg font-semibold">{skill.title}</span>
        </div>
      </CardHeader>
      <CardContent>
        {/* TODO make Progress a component */}
        <Progress
          value={(minutesToHours(skill.minutesAllTime) / 10_000) * 100}
          className="h-4 w-full"
        />
        <span>{minutesToHours(skill.minutesAllTime)} / 10,000 hours</span>
      </CardContent>
    </Card>
  );
}
