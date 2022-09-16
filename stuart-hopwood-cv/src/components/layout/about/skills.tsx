import { useEffect } from "react";
import { Fade } from "react-reveal";
import { Loading } from "..";
import { useSkillsStore } from "../../../state";
import { SkillProps } from "../../../types";
import { SkillWithProgress } from "../../controls/skills/skillsWithProgress";
import { classes } from "./skills.css";

export function Skills() {
  const { skills, loading, getSkills } = useSkillsStore();

  useEffect(() => {
    getSkills();
  }, [getSkills]);

  return (
    <Fade right big>
      <div className={classes.skills}>
        {loading
          ? <Loading />
          : skills.map(function (skill: SkillProps) {
            return <SkillWithProgress key={skill.id} id={skill.id} skillName={skill.skillName} percentage={skill.percentage} skillExamples={skill.skillExamples} />
          })
        }
      </div>
    </Fade>
  );
};
