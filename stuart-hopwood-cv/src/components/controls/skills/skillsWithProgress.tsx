import React, { Suspense } from 'react'
import { useProgressAnimation } from '../../../Hooks'
import { SkillProps } from '../../../types'
import { typography } from '../../typeography/typography.css'
import { classes } from './skillsWithProgress.css'

const LinearProgress = React.lazy(() => import('@mui/material/LinearProgress'))
const CircularProgressWithLabel = React.lazy(() => import('./circularProgressWithLabel'))
const SkillExamples = React.lazy(() => import('./skillExamples'))

export default function SkillWithProgress({ skillName, percentage: targetProgress, skillExamples }: SkillProps) {

	const progress = useProgressAnimation(targetProgress)

	return <Suspense>
		<div id={`${skillName}`} className={`${classes.skillsWithProgress} skill`}>
			<div className={classes.progressBarWrapper}>
				<span className={`${classes.nameStyle} ${typography.copy1}`}>{skillName}</span>
				<span className={classes.progressBar}>
					<LinearProgress variant="determinate" value={progress} />
				</span>
				<span className={classes.progressCircle}>
					<CircularProgressWithLabel value={progress} />
				</span>
			</div>
			<SkillExamples examples={skillExamples} />
		</div>
	</Suspense>
}
