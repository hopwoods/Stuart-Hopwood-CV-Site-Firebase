import { domMax, LazyMotion, m, Variants } from 'framer-motion'
import { classes } from './badge.css'

export type BadgeProps = {
	children: React.ReactNode
}

const badgeVariants: Variants = {
	offscreen: {
		opacity: 0,
		x: -300,
		filter: 'blur(10px)'
	},
	onscreen: {
		opacity: 1,
		x: 0,
		filter: 'blur(0px)',
		transition: {
			type: 'spring',
			bounce: 0.2,
		}
	}
}

export function Badge({ children }: BadgeProps) {
	return <LazyMotion features={domMax}>
		<m.div variants={badgeVariants} layout transition={{ duration: 0.8 }} className={classes.badge}>
			{children}
		</m.div>
	</LazyMotion>
}