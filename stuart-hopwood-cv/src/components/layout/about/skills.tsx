import { domAnimation, LazyMotion, m, Variants } from 'framer-motion'
import { useAppStore } from '../../../state/appStore'
import { theme } from '../../../style/themeProvider'
import { SkillProps } from '../../../types'
import SkillWithProgress from '../../controls/skills/skillsWithProgress'
import Heading from '../../typeography/heading'
import Loading from '../loading/loading'
import { classes } from './skills.css'

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
	const { skills, loading } = useAppStore()

	return <LazyMotion features={domAnimation}>
		<m.section id="skills" layout initial="offscreen" whileInView="onscreen" viewport={{ once: true, margin: '100px 0px 0px 0px' }} transition={{ duration: 1 }} variants={variants} className={classes.skills}>
			{loading
				? <Loading />
				: <>
					<Heading color={theme.colors.brandMedium} type="h3" text="Career Experience" className="header" />
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