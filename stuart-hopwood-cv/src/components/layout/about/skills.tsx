import { domAnimation, LazyMotion, m, Variants } from 'framer-motion'
import React, { Suspense, useEffect } from 'react'
import { useTheme } from '../../../Hooks'
import { useSkillsStore } from '../../../state'
import { SkillProps } from '../../../types'
import { classes } from './skills.css'

const Heading = React.lazy(() => import('../../typeography/heading'))
const Loading = React.lazy(() => import('../../layout/loading/loading'))
const SkillWithProgress = React.lazy(() => import('../../controls/skills/skillsWithProgress'))

export const variants: Variants = {
	offscreen: {
		opacity: 0,
		filter: 'blur(20px)'
	},
	onscreen: {
		opacity: 1,
		filter: 'blur(00px)'
	}
}

export default function Skills() {
	const { skills, loading, getSkillsFromDb: getSkills } = useSkillsStore()
	const theme = useTheme()

	const getSkillsFromDb = () => {
		getSkills()
	}

	useEffect(() => {
		getSkillsFromDb()
	}, [])

	return <Suspense>
		<LazyMotion features={domAnimation}>
			<m.section id="skills" layout initial="offscreen" whileInView="onscreen" viewport={{ once: true, margin: '0px 0px 0px 0px' }} transition={{ duration: 2 }} variants={variants} className={classes.skills}>
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
	</Suspense>
}