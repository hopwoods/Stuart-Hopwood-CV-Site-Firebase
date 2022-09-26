import { domMax, LazyMotion, m, Variants } from 'framer-motion'
import { ReactNode } from 'react'
import { classes } from './banner.css'

type BannerProps = {
	id: string
	fullscreen: boolean
	children: ReactNode
}

const variants: Variants = {
	start: {
		background: 'linear-gradient(45deg, rgba(142,202,230,1) 0%, rgba(33,158,188,1) 31%, rgba(2,48,71,1) 100%)',
		backgroundPosition: '0% 100%',
		backgroundSize: '200% 200%',
		opacity: 1
	},
	end: {
		backgroundPosition: ['0% 100%', '25% 75%', '50% 50%', '75% 25%', '100% 0%'],
		opacity: 1,
	}
}

export function Banner({ id, fullscreen, children }: BannerProps) {
	return <LazyMotion features={domMax}>
		<m.header
			layout
			initial="start"
			animate="end"
			transition={{
				repeat: Infinity, repeatType: 'mirror', duration: 5
			}}
			variants={variants}
			id={id}
			className={`${fullscreen ? classes.fullscreen : undefined} ${classes.banner}`}>
			{children}
		</m.header>
	</LazyMotion>
}