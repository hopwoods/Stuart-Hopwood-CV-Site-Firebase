import { domAnimation, LazyMotion, m, Variants } from "framer-motion"
import { useEffect } from "react"
import { Loading } from ".."
import { useSkillsStore } from "../../../state"
import { SkillProps } from "../../../types"
import { SkillWithProgress } from "../../controls/skills/skillsWithProgress"
import { classes } from "./skills.css"

export const variants: Variants = {
  offscreen: {
    opacity: 0,
    x: 200
  },
  onscreen: {
    opacity: 1,
    x: 0,
  }
};

export function Skills() {
  const { skills, loading, getSkillsFromDb: getSkills } = useSkillsStore()

  const getSkillsFromDb = () => {
    getSkills()
  }

  useEffect(() => {
    getSkillsFromDb()
  }, [])

  return <LazyMotion features={domAnimation}>
    <m.section id="skills" layout initial="offscreen" whileInView="onscreen" viewport={{ once: true, margin: "100px 0px 0px 0px" }} transition={{ duration: 1 }} variants={variants} className={classes.skills}>
      {loading
        ? <Loading />
        : skills.map(function (skill: SkillProps) {
          return <SkillWithProgress key={skill.skillName} skillName={skill.skillName} percentage={skill.percentage} skillExamples={skill.skillExamples} />
        })
      }
    </m.section>
  </LazyMotion>
}