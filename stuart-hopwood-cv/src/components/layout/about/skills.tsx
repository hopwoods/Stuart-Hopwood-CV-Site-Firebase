/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { style } from "./skills.css";
import { Fade } from "react-reveal";
import { SkillWithProgress } from "../../controls/skills/skillsWithProgress";
import { useSkillsStore } from "../../../state";
import { useEffect } from "react";
import { Loading } from "..";
import { SkillProps } from "../../../types";

export const Skills: React.FC = () => {

  const { skills, loading, getSkills } = useSkillsStore();

  useEffect(() => {
    getSkills();
  }, [getSkills]);

  return (
    <Fade right big>
      <div css={style}>
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
