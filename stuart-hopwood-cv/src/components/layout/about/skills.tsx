import { domMax, LazyMotion, m, Variants } from 'framer-motion'
import { useEffect } from 'react'
import { Loading } from '..'
import { useTheme } from '../../../Hooks'
import { useSkillsStore } from '../../../state'
import { SkillProps } from '../../../types'
import { SkillWithProgress } from '../../controls/skills/skillsWithProgress'
import { Heading } from '../../typeography/heading'
import { classes } from './skills.css'

export const variants: Variants = {
	offscreen: {
		opacity: 0,
		x: 400
	},
	onscreen: {
		opacity: 1,
		x: 0,
	}
}

export function Skills() {
	const { skills, loading, getSkillsFromDb: getSkills } = useSkillsStore()
	const theme = useTheme()

	const getSkillsFromDb = () => {
		getSkills()
	}

	useEffect(() => {
		getSkillsFromDb()
	}, [])

	return <LazyMotion features={domMax}>
		<m.section id="skills" layout initial="offscreen" whileInView="onscreen" viewport={{ once: true, margin: '0px 0px 0px 0px' }} transition={{ duration: 0.8 }} variants={variants} className={classes.skills}>
			{loading
				? <Loading />
				: <>
					<Heading color={theme.brandMedium} type="h3" text="Career Experience" className="header" />
					<p>
						Much of my career has been spent using a variety of technologies, below are the one I&apos;ve spent the most time working with
					</p>
					{skills.map(function (skill: SkillProps) {
						return <SkillWithProgress key={skill.skillName} skillName={skill.skillName} percentage={skill.percentage} skillExamples={skill.skillExamples} />
					})}
				</>
			}
		</m.section>
	</LazyMotion>
}