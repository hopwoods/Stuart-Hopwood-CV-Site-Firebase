/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { style, progressBar, progressCircle, nameStyle, progressBarWrapper } from "./skillsWithProgress.css";
import { CircularProgressWithLabel } from "./circularProgressWithLabel";
import { LinearProgress, Tooltip } from "@material-ui/core";
import { SkillProps } from "../../../types";
import { useProgressAnimation } from "../../../Hooks";
import { SkillExamples } from "./skillExamples";

export function SkillWithProgress({ id, skillName, percentage: targetProgress, skillExamples }: SkillProps) {

  const progress = useProgressAnimation(targetProgress);

  return (
    <div className="skill" id={id.toString()} css={style}>
      <Tooltip title={`${targetProgress}% Career Experience`} arrow>
        <div css={progressBarWrapper}>
          <span css={nameStyle}>{skillName}</span>
          <span css={progressBar}>
            <LinearProgress variant="determinate" value={progress} />
          </span>
          <span css={progressCircle}>
            <CircularProgressWithLabel value={progress} />
          </span>
        </div>
      </Tooltip >
      <SkillExamples examples={skillExamples} />
    </div>
  );
};
