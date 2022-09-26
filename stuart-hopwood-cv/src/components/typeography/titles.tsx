import { domAnimation, LazyMotion, m, Variants } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { classes } from './titles.css'

export function Titles() {

	const [text, setText] = useState<string>('full stack developer')
	const [nextIndex, setIndex] = useState<number>(0)
	const animationDuration = 2500
	const titles: string[] = [
		'full stack Developer',
		'.Net Developer',
		'ReactJS Developer',
		'Typescript Developer',
		'amateur photographer',
		'dark theme enthusiast'
	]

	const switchText = useCallback(() => {
		const newIndex = nextIndex === titles.length ? 1 : nextIndex + 1
		setText(titles[newIndex % titles.length])
		setIndex(newIndex)
	}, [text, nextIndex])


	useEffect(() => {
		const myInterval = setInterval(switchText, animationDuration)
		return () => clearInterval(myInterval)
	}, [switchText])

	const variants: Variants = {
		display: {
			opacity: 1,
			scale: 2
		},
		hide: {
			opacity: 0,
			scale: 0
		}
	}

	return <LazyMotion features={domAnimation}>
		<span className={classes.subTitle}>
			<span>I&apos;m a </span>
			<m.span
				key={text}
				layout variants={variants}
				initial="hide"
				animate="display"
				transition={{ duration: ((animationDuration / 2) / 1000), repeat: Infinity, repeatType: 'mirror' }}
				className={classes.titleText}
			>
				{text}
			</m.span>
		</span>
	</LazyMotion>
}
