import { typography } from '../../typeography/typography.css'
import { classes } from './skillExample.css'

type SkillExample = {
	id: number
	text: string
}

export default function SkillExample({ id, text }: SkillExample) {
	return <>
		<p className={`${classes.skillExample} ${typography.copy2}`} key={id}>{text}</p>
	</>
};
