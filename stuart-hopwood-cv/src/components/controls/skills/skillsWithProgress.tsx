import { LinearProgress, Tooltip } from "@mui/material"
import { useProgressAnimation } from "../../../Hooks"
import { SkillProps } from "../../../types"
import { CircularProgressWithLabel } from "./circularProgressWithLabel"
import { SkillExamples } from "./skillExamples"
import { classes } from "./skillsWithProgress.css"

export function SkillWithProgress({ id, skillName, percentage: targetProgress, skillExamples }: SkillProps) {

  const progress = useProgressAnimation(targetProgress)

  return (
    <div id={`${id}`} className={`${classes.skillsWithProgress} skill`}>
      <Tooltip title={`${targetProgress}% Career Experience`} arrow>
        <div className={classes.progressBarWrapper}>
          <span className={classes.nameStyle}>{skillName}</span>
          <span className={classes.progressBar}>
            <LinearProgress variant="determinate" value={progress} />
          </span>
          <span className={classes.progressCircle}>
            <CircularProgressWithLabel value={progress} />
          </span>
        </div>
      </Tooltip >
      <SkillExamples examples={skillExamples} />
    </div>
  )
}
